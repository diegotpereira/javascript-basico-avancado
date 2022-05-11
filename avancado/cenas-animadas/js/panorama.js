var img = new Image()
img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg'

var CanvasXSize = 800
var CanvasYSize = 200
var velocidade = 30
var escala = 1.05
var y = -4.5

// programa principal 
var dx = 0.75
var imgW;
var imgH
var x = 0
var limparX
var limparY
var ctx

img.onload = function() {
    imgW = img.width * escala
    imgH = img.height * escala

    // imagem maior que tela
    if (imgW > CanvasXSize) {
        x = CanvasXSize - imgW
    }
    // imagem maior que tela
    if (imgW > CanvasXSize) {
        limparX = imgW
    } else {
        limparX = CanvasXSize
    }

    // imagem maior que tela
    if (imgH > CanvasYSize) {
        limparY = imgH
    } else {
        limparY = CanvasYSize
    }

    // buscar elemento canvas
    ctx = document.getElementById('canvas').getContext('2d')

    // Definir taxa de atualização
    return setInterval(desenhar, velocidade)
}

function desenhar() {
    // limpar canvas 
    ctx.clearRect(0, 0, limparX, limparY)

    // se imagem é <= tamanho canvas
    if (imgW <= CanvasXSize) {
        // redifinir, começar do inicio
        if (x > (CanvasXSize)) {
            x = 0
        }
        // desenhar imagem adicional
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH)
                // se imagem é > tamanho canvas
        } else {
            if (x > (CanvasXSize)) {
                x = CanvasXSize - imgW
            }
            // desenhar imagem adicional
            if (x > (CanvasXSize - imgW)) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH)
            }
        }
    }
    // desenhar imagem 
    ctx.drawImage(img, x, y, imgW, imgH)

    // quantidade para mover
    x += dx
}