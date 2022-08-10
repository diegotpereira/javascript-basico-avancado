// crie um objeto de tela a partir do elemento HTML
var canvas = document.getElementById('canvas')

// criar um objeto de desenho 2D
var ctx = canvas.getContext('2d')

// calcule o raio do relógio usando a altura
var raio = canvas.height / 2

// remapear os eixos x e y para o centro da tela
ctx.translate(raio, raio)

// reduzir o raio do relógio em 90%
raio = raio * 0.90

// execute a função drawClock a cada segundo.
setInterval(desenharRelogio, 1000)

function desenharRelogio() {
    desenharRosto(ctx, raio)
    desenharNumeros(ctx, raio)
    desenharTempo(ctx, raio)
}

function desenharRosto(ctx, raio) {

    var grade

    // desenhe um círculo branco para o rosto
    ctx.beginPath()
    ctx.arc(0, 0, raio, 0, 2 * Math.PI)
    ctx.fillStyle = "White"
    ctx.fill()

    // criar um gradiente radial (borda interna, média e externa do relógio)
    grade = ctx.createRadialGradient(0, 0, raio * 0.95, 0, 0, raio * 1.05)
    grade.addColorStop(0, '#333')
    grade.addColorStop(0.5, 'white')
    grade.addColorStop(1, '#333')

    // definir gradiente como estilo de traço
    ctx.beginPath()
    ctx.arc(0, 0, raio * 0.1, 0, 2 * Math.PI)
    ctx.fillStyle = '#333'
    ctx.fill()
}
function desenharNumeros(ctx, raio) {
    var ang
    var num

    // definir fonte em 15% do raio
    ctx.font = raio * 0.15 + 'px arial'

    // definir o alinhamento do texto para o meio
    ctx.textBaseline = 'middle'

    // definir o alinhamento do texto para o centro
    ctx.textAlign = 'center'

    // calcular a posição de impressão para cada número
    for(num = 1; num < 13; num++) {
        ang = num * Math.PI / 6
        ctx.rotate(ang)
        ctx.translate(0, -raio * 0.85)
        ctx.rotate(-ang)
        ctx.fillText(num.toString(), 0, 0)
        ctx.rotate(ang)
        ctx.translate(0, raio * 0.85)
        ctx.rotate(-ang)
    }
}
function desenharTempo(ctx, raio) {
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    var segundo = agora.getSeconds()

    // hora 
    hora = hora %12

    // calcular ângulo do ponteiro das horas
    hora = (hora * Math.PI / 6) + (minuto * Math.PI / (6 * 60)) + (segundo * Math.PI/(360 * 60))

    // fazer o ponteiro das horas 50% do raio da tela
    desenharPonteiro(ctx, hora, raio * 0.5, raio * 0.07)

    // calcular ângulo do ponteiro dos minutos
    minuto = (minuto * Math.PI / 30) + (segundo * Math.PI / (30 * 60))

    // fazer ponteiro dos minutos 80% do raio da tela
    desenharPonteiro(ctx, minuto, raio * 0.8, raio * 0.07)

    // calcular ângulo do ponteiro dos segundos
    segundo = (segundo * Math.PI / 30)

    // fazer de segunda mão 90% do raio da tela
    desenharPonteiro(ctx, segundo, raio * 0.9, raio * 0.02)
}
function desenharPonteiro(ctx, pos, altura, largura) {
    ctx.beginPath()
    ctx.lineWidth = largura
    ctx.lineCap = 'round'
    ctx.moveTo(0, 0)
    ctx.rotate(pos)
    ctx.lineTo(0, -altura)
    ctx.stroke()
    ctx.rotate(-pos)
}