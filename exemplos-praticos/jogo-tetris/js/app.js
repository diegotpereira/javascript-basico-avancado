const I = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];

const cvs = document.getElementById('tetris')
const ctx = cvs.getContext('2d')
const pontuacaoElemento = document.getElementById('pontuacao')

const linha = 20
const coluna = COLUNA = 10
const quadrado = quadradoTamanho = 20
const vago = "WHITE"

function desenharQuadrado(x, y, color) {
    ctx.fillStyle = color
    ctx.fillRect(x * quadrado, y * quadrado, quadrado, quadrado)

    ctx.strokeStyle = "BLACK"
    ctx.strokeRect(x * quadrado, y * quadrado, quadrado, quadrado)
}

// criar painel
let painel = []
for(r = 0; r < linha; r++) {
    painel[r] = []
    for(c = 0; c < coluna; c++) {
        painel[r][c] = vago
    }
}
function desenharPainel() {

    for(r = 0; r < linha; r++) {
        for(c = 0; c < coluna; c++) {
            desenharQuadrado(c, r, painel[r][c])
        }
    }
}
desenharPainel()

// as peças e suas cores
const pecas = [
    [Z, "red"],
    [S, "green"],
    [T, "yellow"],
    [O, "blue"],
    [L, "purple"],
    [I, "cyan"],
    [J, "orange"]
]

// gerar peças aleatórias
function aleatoriaPecas() {

    let r = randomN = Math.floor(Math.random() * pecas.length)

    return new peca(pecas[r][0], pecas[r][1])
}
let p = aleatoriaPecas()

// objeto peca
function peca(tetromino, color) {

    this.tetromino = tetromino
    this.color = color

    this.tetrominoN = 0
    this.activeTetromino = this.tetromino[this.tetrominoN]

    // precisamos controlar as peças
    this.x = 3
    this.y = -1
}

// função de preenchimento
peca.prototype.fill = function(color) {
    for(r = 0; r < this.activeTetromino.length; r++) {
        for(c = 0; c < this.activeTetromino.length; c++) {

            // desenhamos apenas quadrados ocupados
            if (this.activeTetromino[r][c]) {
                desenharQuadrado(this.x + c, this.y + r, color)
            }
        }
    }
}
// desenhar uma peça no tabuleiro
peca.prototype.draw = function() {
    this.fill(this.color)
}

// desenhe um pedaço
peca.prototype.unDraw = function() {
    this.fill(vago)
}

// mover para baixo a peça
peca.prototype.moveDown = function() {

    if (!this.colisao(0, 1, this.activeTetromino)) {
        this.unDraw()
        this.y++
        this.draw()
    } else {
        this.lock()
        p = aleatoriaPecas()
    }
}
// mover para a direita a peça
peca.prototype.moverDireita = function() {

    if (!this.colisao(1, 0, this.activeTetromino)) {
        this.unDraw()
        this.x++
        this.draw()
    }
}
// mover para a esquerda a peça
peca.prototype.moverEsquerda = function() {
    if (!this.colisao(-1, 0, this.activeTetromino)) {
        this.unDraw()
        this.x--
        this.draw()
    }
}
// gire a peça
peca.prototype.rotate = function() {

    let proximoPadrao = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length]
    let chute = 0

    if (this.colisao(9, 0, proximoPadrao)) {
        
        if (this.x > coluna / 2) {
            // é a parede certa
            chute = -1
        } else {
            // é a parede errada
            chute = 1
        }
    }
    if (!this.colisao(chute, 0, proximoPadrao)) {
        this.unDraw()
        this.x += chute
        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length
        this.activeTetromino = this.tetromino[this.tetrominoN]
        this.draw()
    }
}
let pontuacao = 0

peca.prototype.lock = function() {
    for(r = 0; r < this.activeTetromino.length; r++) {
        for(c = 0; c < this.activeTetromino.length; c++) {

            // verifique se já existe uma peça bloqueada no lugar
            if (!this.activeTetromino[r][c]) {
                continue
            }

            // peças para travar em cima = fim de jogo
            if (this.y + r < 0) {
                alert('Fim de Jogo')

                // parar quadro de animação de solicitação
                jogoAcabou = true 
                break;
            }
            // nós trancamos a peça
            painel[this.y + r][this.x + c] = this.color
        }
    }
    // remover linhas completas
    for(r = 0; r < linha; r++) {
        let ehLinhaCheia = true 

        for(c = 0; c < coluna; c++) {
            ehLinhaCheia = ehLinhaCheia && (painel[r][c] != vago)
        }
        if (ehLinhaCheia) {
            // se a linha estiver cheia
            // descemos todas as linhas acima
            for(y = r; y > 1; y--) {
                for(c = 0; c < coluna; c++) {
                    painel[y][c] = painel[y - 1][c]
                }
            }
            // a placa da linha superior[0][..] não tem linha acima dela
            for(c = 0; c < coluna; c++) {
                painel[0][c] = vago 
            }
            // aumentar a pontuação
            pontuacao += 10
        }
    }
    // atualize a painel
    desenharPainel()

    // atualize a pontuação
    pontuacaoElemento.innerHTML = pontuacao
}

// função colisao
peca.prototype.colisao = function(x, y, peca) {
    for(r = 0; r < peca.length; r++) {
        for(c = 0; c < peca.length; c++) {

            if (!peca[r][c]) {
                continue;
            }

            // coordenadas da peça após o movimento
            let novax = this.x + c + x
            let novay = this.y + r + y 

            // condições
            if (novax < 0 || novax >= coluna || novay >= linha) {
                return true 
            }
            // pular novoY < 0; board[-1] vai acabar com nosso jogo
            if (novay < 0) {
                continue
            }
            // verifique se já existe uma peça bloqueada no lugar
            if (painel[novay][novax] != vago) {
                return true
            }

        }
    }
    return false
}

// CONTROLE a peça
document.addEventListener('keydown', controle)

function controle(e) {

    if (e.keyCode == 37) {
        p.moverEsquerda()

    } else if (e.keyCode == 38) {
        p.rotate()
    } else if (e.keyCode == 39) {
        p.moverDireita()
    } else if (e.keyCode == 40) {
        p.moveDown()
    }
}

// solte a peça a cada 1 segundo
let soltarIniciar = Date.now()
let jogoAcabou = false 

function drop() {

    let agora = Date.now()
    let delta = agora - soltarIniciar

    if (delta > 1000) {
        
        p.moveDown()
        soltarIniciar = Date.now()
    }
    if (!jogoAcabou) {
        
        requestAnimationFrame(drop)
    }
}
drop()