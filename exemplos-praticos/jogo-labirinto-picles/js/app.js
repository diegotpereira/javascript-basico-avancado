var labirintoTela = document.getElementById('labirintoTela');
var ctx = labirintoTela.getContext('2d');
var duende;
var finalDuende;
var labirinto, desenhar, jogador;
var dificuldade;

window.onload = function() {

    let exibirLargura = $('#exibir').width();
    let exibirAltura = $('#exibir').height();

    if (exibirAltura < exibirLargura) {
        ctx.canvas.width = exibirAltura - exibirAltura / 100;
        ctx.canvas.height = exibirAltura - exibirAltura / 100;
    } else {
        ctx.canvas.width = exibirLargura - exibirLargura / 100;
        ctx.canvas.height - exibirLargura - exibirLargura / 100;
    }

    var completoUm = false;
    var completoDois = false;

    if (completoUm === true && completoDois === true) {
        
        console.log("Rodando");
        setTimeout(function() {

            fazerLabirinto();

        }, 500);
    }
    duende = new Image()
    duende.src = "https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png" + 
    "?" +
    new Date().getTime();
    duende.setAttribute("crossOrigin", " ");
    duende.onload = function() {
        duende = alterarBrilho(1.2, duende);

    }
    finalDuende = new Image();
    finalDuende.src = "https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png" +
    "?" + 
    new Date().getTime();
    finalDuende.setAttribute("crossOrigin", " ");
    finalDuende.onload = function() {
        finalDuende = alterarBrilho(1.1, finalDuende);
    }
}

function alterarBrilho(fator, duende) {
    
    var virtCanvas = document.createElement("canvas");
    virtCanvas.width = 500;
    virtCanvas.height = 500;

    var context = virtCanvas.getContext('2d');
    context.drawImage(duende, 0, 0, 500, 500);
    
    var imgDado = context.getImageData(0, 0, 500, 500);

    for(let i = 0; i < imgDado.data.length; i += 4) {
        imgDado.data[i] = imgDado.data[i] * fator;
        imgDado.data[i + 1] = imgDado.data[i + 1] * fator;
        imgDado.data[i + 2] = imgDado.data[i + 2] * fator;
    }
    context.putImageData(imgDado, 0, 0);

    var duendeSaidaPut = new Image();
    duendeSaidaPut.src = virtCanvas.toDataURL();
    virtCanvas.remove();

    return duendeSaidaPut;

}
function exibirVitoriaBagunca(moves) {
    document.getElementById('moves').innerHTML = "Você se moveu " + moves + "Passos.";
    toggleVisablity('Message-Container');
}
function toggleVisablity(id) {
    if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
    } else {
        document.getElementById(id).style.visibility = "visible";
    }
}

window.onresize = function() {

    let exibirLargura = $('#exibir').width();
    let exibirAltura = $('#exibir').height();

    if (exibirAltura < exibirLargura) {
        ctx.canvas.width = exibirAltura - exibirAltura / 100;
        ctx.canvas.height = exibirAltura - exibirAltura / 100;
    } else {
        ctx.canvas.width = exibirLargura - exibirLargura / 100;
        ctx.canvas.height - exibirLargura - exibirLargura / 100;
    }
    cellSize = labirintoTela.width / dificuldade;

    if (jogador != null) {
        
        draw.redesenharLabirinto(cellSize);
        jogador.redesenharJogador(cell);
    }
}
function Labirinto(Width, Height) {

    var labirintoMapa;
    var width = Width;
    var height = Height;
    var iniciarCoord, fimCoord;
    var dirs = ["n", "s", "e", "w"];
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
        return labirintoMapa;
    }
    this.iniciarCoord = function() {
        return iniciarCoord;
    }
    this.fimCoord = function() {
        return fimCoord;
    }
    function genMap() {
        labirintoMapa = new Array(height);

        for(y = 0; y < height; y++) {
            labirintoMapa[y] = new Array(width);

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
        var ehComp = false;
        var mover = false;
        var cellsVisited = 1;
        var numLoops = 0;
        var maxLoops = 0;
        var pos = {
            x: 0,
            y: 0
        }
        var numCells = width * height;

        while(!ehComp) {
            mover = false;
            labirintoMapa[pos.x][pos.y].visitado = true ;

            if (numLoops >= maxLoops) {
                shuffle(dirs);
                maxLoops = Math.round(rand(height / 8));
                numLoops = 0;
            }
            numLoops++;

            for(index = 0; index < dirs.length; index++) {
                var direcao = dirs[index];
                var nx = pos.x + modDir[direcao].x;
                var ny = pos.y + modDir[direcao].y;

                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    
                    if (!labirintoMapa[nx][ny].visitado) {
                        
                        labirintoMapa[pos.x][pos.y][direcao] = true ;
                        labirintoMapa[nx][ny][modDir[direcao].o] = true;

                        labirintoMapa[nx][ny].priorPos = pos;

                        pos = {
                            x: nx,
                            y: ny 
                        }
                        cellsVisited++ 

                        mover = true;
                        break;
                    }
                }
            }
            if (!mover) {
                
                pos = labirintoMapa[pos.x][pos.y].priorPos;
            }
            if (numCells == cellsVisited) {
                ehComp = true;
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
    genMap();
    definirLabirinto();
    definirIniciarTerminar();
}

function rand(max) {
    return Math.floor(Math.random() * max);
}
function shuffle(a) {

    for(let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function desenharLabirinto(Labirinto, ctx, cellSize) {
    var mapa = Labirinto.map();
    var cellSize = cellSize;
    var desenharFinalMetodo;

    ctx.lineWidth = cellSize / 40;

    this.redesenharLabirinto = function(tamanho) {
        cellSize = tamanho;
        ctx.lineWidth = cellSize / 50;
        desenharMapa();
        desenharFinalMetodo();
    }

    function desenharCelula(xCord, yCord, cell) {
        var x = xCord * cellSize;
        var y = yCord * cellSize;

        if (cell.n == false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize, y);
            ctx.stroke();
        }
        if (cell.s === false) {
            ctx.beginPath();
            ctx.moveTo(x, y + cellSize);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.stroke();
        }
        if (cell.e === false) {
            ctx.beginPath();
            ctx.moveTo(x + cellSize, y);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.stroke();
        }
        if (cell.w === false) {
            ctx.beginPath();
            ctx.moveTo(x,  y);
            ctx.lineTo(x, y + cellSize);
            ctx.stroke();
        }
    }

    function desenharMapa() {

        for(x = 0; x < mapa.length; x++) {
            for(y = 0; y < mapa[x].length; y++) {
                desenharCelula(x, y, mapa[x][y]);
            }
        }
    }
}
function fazerLabirinto() {

    if (jogador != undefined) {
        jogador.unbindKeyDown();
        jogador = null;
    }

    var e = document.getElementById('dificuldadeSel')

    dificuldade = e.options[e.selectedIndex].value;
    cellSize = labirintoTela.width / dificuldade;
    labirinto = new Labirinto(dificuldade, dificuldade);
    desenhar = new desenharLabirinto(labirinto, ctx, cellSize);
    jogador = new Jogador(labirinto, labirintoTela, cellSize, exibirVitoriaBagunca, duende);

    if (document.getElementById('labirintoContainer').style.opacity < "100") {
        document.getElementById('labirintoContainer').style.opacity = "100";
    }
}
function Jogador(labirinto, c, _cellsize, onComplete, duende = null) {

    var ctx = c.getContext('2d');
    var desenharDuende;
    var moves = 0;

    desenharDuende = desenharDuendeCirculo;

    if (duende != null) {
        desenharDuende = desenharDuendeImg;
    }
    var jogador = this ;
    var mapa = labirinto.map();

    var cellCoords = {
        x: labirinto.iniciarCoord().x,
        y: labirinto.iniciarCoord().y 
    }
    var cellSize = _cellsize;
    var halfCellSize = cellSize / 2;

    this.redesenharJogador = function(_cellsize) {
        cellSize = _cellsize;
        desenharDuendeImg(cellCoords);
    }
    function desenharDuendeCirculo(coord) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";

        ctx.arc(
            (coord.x + 1) * cellSize - halfCellSize,
            (coord.y + 1) * cellSize - halfCellSize,
            halfCellSize - 2,
            0,
            2 * Math.PI
        )
        ctx.fill();

        if (coord.x === labirinto.endCoord().x && coord.y === labirinto.endCoord().y) {
            onComplete(moves);
            jogador.unbindKeyDown();
        }
    }
    function desenharDuendeImg(coord) {
        var offsetLeft = cellSize / 50
        var offsetRight = cellSize / 25
        ctx.drawImage(
            duende,
            0,
            0,
            duende.width,
            duende.height,
            coord.x * cellSize + offsetLeft,
            coord.y * cellSize + offsetLeft,
            cellSize - offsetRight,
            cellSize - offsetRight
        )
        if (coord.x === labirinto.fimCoord().x && coord.y === labirinto.fimCoord().y) {
            onComplete(moves)
            jogador.unbindKeyDown()
        }
    }
    function removerDuende(coord) {
        var offsetLeft = cellSize / 50
        var offsetRight = cellSize / 25 

        ctx.clearRect(
            coord.x * cellSize + offsetLeft,
            coord.y * cellSize + offsetLeft,
            cellSize - offsetRight,
            cellSize - offsetRight
        )
    }
    function verificar(e) {
        var celula = mapa[cellCoords.x][cellCoords.y]
        moves++ 

        switch(e.keyCode) {
            case 65:
            case 37: 

            if (celula.w == true ) {
                removerDuende(cellCoords)

                cellCoords = {
                    x: cellCoords.x - 1,
                    y: cellCoords.y
                }
                desenharDuende(cellCoords)
            }
            break;

            case 87: 
            case 38: 

            if (celula.n == true) {
                removerDuende(cellCoords)

                cellCoords = {
                    x: cellCoords.x,
                    y: cellCoords.y - 1
                }
                desenharDuende(cellCoords)
            }
            break;

            case 68:
            case 39:

            if (celula.e == true) {
                removerDuende(cellCoords)

                cellCoords = {
                    x: cellCoords.x + 1,
                    y: cellCoords.y
                }
                desenharDuende(cellCoords)
            }
            break;

            case 83:
            case 40: 

            if (celula.s == true) {
                removerDuende(cellCoords);
                cellCoords = {
                    x: cellCoords.x,
                    y: cellCoords.y + 1
                }
                desenharDuende(cellCoords);
            }
            break;
        }
    }
    this.bindKeyDown = function() {
        window.addEventListener('keydown', verificar, false)

        $('#exibir').swipe({
            swipe: function(
                event, 
                direction,
                distance,
                duration,
                fingerCount,
                fingerData
            ) {
                console.log(direction);

                switch(direction) {
                    case "subir":
                        verificar({
                            keyCode: 38
                        });
                        break;
                    case "abaixo":
                        verificar({
                            keyCode: 40 
                        });
                        break;
                    case "left":
                        verificar({
                            keyCode: 37
                        });
                        break;
                    case "right": 
                    verificar({
                        keyCode: 39
                    })
                    break;
                }
            },
            threshold: 0
        })
    }
    this.unbindKeyDown = function() {
        window.removeEventListener('keydown', verificar, false)
        $('#exibir').swipe('destroy')
    }
    desenharDuende(labirinto.iniciarCoord())

    this.bindKeyDown()
}
