var labirintoTela = document.getElementById('labirintoTela')
var ctx = labirintoTela.getContext('2d')
var duende
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
function Labirinto(Largura, Altura) {

    var labirintoMapa 
    var largura = Largura
    var altura = Altura
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
        labirintoMapa = new Array(altura)

        for(y = 0; y < altura; y++) {
            labirintoMapa[y] = new Array(largura)

            for(x = 0; x < largura; ++x) {
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
    genMap()
}

function DesenharLabirinto(Labirinto, ctx, cellSize) {
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
        if (cell.s == false) {
            ctx.beginPath()
            ctx.moveTo(x, y + cellSize)
            ctx.lineTo(x + cellSize, y + cellSize)
            ctx.stroke()
        }
        if (cell.e == false) {
            ctx.beginPath()
            ctx.moveTo(x + cellSize, y)
            ctx.lineTo(x + cellSize, y + cellSize)
            ctx.stroke()
        }
        if (cell.w == false) {
            ctx.beginPath()
            ctx.moveTo(x,  y)
            ctx.lineTo(x, y + cellSize)
            ctx.stroke()
        }
    }

    function desenharMapa() {

        for(x = 0; x < mapa[x].length; x++) {
            for(y = 0; y < mapa[y].length; y++) {
                desenharCelula(x, y, mapa[x][y])
            }
        }
    }
}
function fazerLabirinto() {

    var e = document.getElementById('dificuldadeSel')

    cellSize = labirintoTela.width / dificuldade
    labirinto = new Labirinto(dificuldade, dificuldade)
    desenhar = new DesenharLabirinto(labirinto, ctx, cellSize)
}