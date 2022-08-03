var labirintoTela = document.getElementById('labirintoTela')
var ctx = labirintoTela.getContext('2d')
var duende
var finalDuende
var labirinto, desenhar, jogador
var dificuldade

window.onload = function() {

    let exibirLargura = $('#exibir').width()
    let exibirAltura = $('#exibir').height()

    if (exibirAltura < exibirLargura) {
        ctx.canvas.width = exibirAltura - exibirAltura / 100
        ctx.canvas.height = exibirAltura - exibirAltura / 100
    } else {
        ctx.canvas.width = exibirLargura - exibirLargura / 100
        ctx.canvas.height - exibirLargura - exibirLargura / 100
    }
    duende = new Image()
    duende.src = "https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png" + 
    "?" +
    new Date().getTime()
    duende.setAttribute("crossOrigin", " ")
    duende.onload = function() {
        duende = changeBrightness(1.2, duende)

    }
    finalDuende = new Image()
    finalDuende.src = "https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png" +
    "?" + 
    new Date().getTime()
    finalDuende.setAttribute("crossOrigin", " ")
    finalDuende.onload = function() {
        finalDuende = changeBrightness(1.1, finalDuende)
    }
}

function changeBrightness(fator, duende) {
    
    var virtCanvas = document.createElement("canvas")
    virtCanvas.width = 500
    virtCanvas.height = 500

    var context = virtCanvas.getContext('2d')
    context.drawImage(duende, 0, 0, 500, 500)
    
    var imgDado = context.getImageData(0, 0, 500, 500)

    for(let i = 0; i < imgDado.data.length; i += 4) {
        imgDado.data[i] = imgDado.data[i] * fator
        imgDado.data[i + 1] = imgDado.data[i + 1] * fator
        imgDado.data[i + 2] = imgDado.data[i + 2] * fator
    }
    context.putImageData(imgDado, 0, 0)

    var duendeSaidaPut = new Image()
    duendeSaidaPut.src = virtCanvas.toDataURL()
    virtCanvas.remove()

    return duendeSaidaPut

}

window.onresize = function() {

    let exibirLargura = $('#exibir').width()
    let exibirAltura = $('#exibir').height()

    if (exibirAltura < exibirLargura) {
        ctx.canvas.width = exibirAltura - exibirAltura / 100
        ctx.canvas.height = exibirAltura - exibirAltura / 100
    } else {
        ctx.canvas.width = exibirLargura - exibirLargura / 100
        ctx.canvas.height - exibirLargura - exibirLargura / 100
    }
    cellSize = labirintoTela.width / dificuldade
}
function Labirinto(Width, Height) {

    var labirintoMapa 
    var width = Width
    var height = Height
    var iniciarCoord, fimCoord
    var dirs = ["n", "s", "e", "w"]
    var modDir = {
        n: {
            y: -1,
            x: 0,
            o: "s"
        },
        s: {
            y: 1,
            x: 0,
            o: "n"
        },
        e: {
            y: 0,
            x: 1,
            o: "w"
        },
        w: {
            y: 0,
            x: -1,
            o: "e"
        }
    }
    this.map = function() {
        return labirintoMapa
    }
    this.iniciarCoord = function() {
        return iniciarCoord
    }
    this.fimCoord = function() {
        return fimCoord
    }
    function genMap() {
        labirintoMapa = new Array(height)

        for(y = 0; y < height; y++) {
            labirintoMapa[y] = new Array(width)

            for(x = 0; x < width; ++x) {
                labirintoMapa[y][x] = {
                    n: false,
                    s: false,
                    e: false,
                    w: false,
                    visitado: false,
                    priorPos: null
                }
            }
        }
    }
    function definirLabirinto() {
        var ehComp = false
        var mover = false
        var cellsVisited = 1
        var numLoops = 0
        var maxLoops = 0
        var pos = {
            x: 0,
            y: 0
        }
        var numCells = width * height

        while(!ehComp) {
            mover = false
            labirintoMapa[pos.x][pos.y].visitado = true 

            if (numLoops >= maxLoops) {
                shuffle(dirs)
                maxLoops = Math.round(rand(height / 8))
                numLoops = 0
            }
            numLoops++

            for(index = 0; index < dirs.length; index++) {
                var direcao = dirs[index]
                var nx = pos.x + modDir[direcao].x
                var ny = pos.y + modDir[direcao].y

                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    
                    if (!labirintoMapa[nx][ny].visitado) {
                        
                        labirintoMapa[pos.x][pos.y][direcao] = true 
                        labirintoMapa[nx][ny][modDir[direcao].o] = true

                        labirintoMapa[nx][ny].priorPos = pos 

                        pos = {
                            x: nx,
                            y: ny 
                        }
                        cellsVisited++ 

                        mover = true 
                        break
                    }
                }
            }
            if (!mover) {
                
                pos = labirintoMapa[pos.x][pos.y].priorPos
            }
            if (numCells == cellsVisited) {
                ehComp = true 
            }
        }
    }
    function definirIniciarTerminar() {
        switch(rand(4)) {
            case 0:
                iniciarCoord = {
                    x: 0,
                    y: 0
                }
                fimCoord= {
                    x: height - 1,
                    y: width - 1
                }
                break
            case 1: 
            iniciarCoord= {
                x: 0,
                y: width - 1
            }
            fimCoord = {
                x: height - 1,
                y: 0
            }
            break

            case 2:
                iniciarCoord = {
                  x: height - 1,
                  y: 0
                };
                fimCoord = {
                  x: 0,
                  y: width - 1
                };
                break;
            case 3:
                iniciarCoord = {
                    x: height - 1,
                    y: width - 1
                };
                fimCoord = {
                    x: 0,
                    y: 0
                };
                break;
        }
    }
    genMap()
    definirLabirinto()
    definirIniciarTerminar()
}

function rand(max) {
    return Math.floor(Math.random() * max)
}
function shuffle(a) {

    for(let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

function desenharLabirinto(Labirinto, ctx, cellSize) {
    var mapa = Labirinto.map()
    var cellSize = cellSize
    var desenharFinalMetodo

    ctx.lineWidth = cellSize / 40

    this.redesenharLabirinto = function(tamanho) {
        cellSize = tamanho
        ctx.lineWidth = cellSize / 50
        desenharMapa()
        desenharFinalMetodo()
    }

    function desenharCelula(xCord, yCord, cell) {
        var x = xCord * cellSize
        var y = yCord * cellSize

        if (cell.n == false) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + cellSize, y)
            ctx.stroke()
        }
        if (cell.s === false) {
            ctx.beginPath()
            ctx.moveTo(x, y + cellSize)
            ctx.lineTo(x + cellSize, y + cellSize)
            ctx.stroke()
        }
        if (cell.e === false) {
            ctx.beginPath()
            ctx.moveTo(x + cellSize, y)
            ctx.lineTo(x + cellSize, y + cellSize)
            ctx.stroke()
        }
        if (cell.w === false) {
            ctx.beginPath()
            ctx.moveTo(x,  y)
            ctx.lineTo(x, y + cellSize)
            ctx.stroke()
        }
    }

    function desenharMapa() {

        for(x = 0; x < mapa.length; x++) {
            for(y = 0; y < mapa[x].length; y++) {
                desenharCelula(x, y, mapa[x][y])
            }
        }
    }
}
function fazerLabirinto() {

    var e = document.getElementById('dificuldadeSel')

    cellSize = labirintoTela.width / dificuldade
    labirinto = new Labirinto(dificuldade, dificuldade)
    desenhar = new desenharLabirinto(labirinto, ctx, cellSize)

    if (document.getElementById('labirintoContainer').style.opacity < "100") {
        document.getElementById('labirintoContainer').style.opacity = "100"
    }
}