// Constantes
const JOGO_LARGURA = 600
const JOGO_ALTURA = 400
const TECLA_CIMA = 38
const TECLA_BAIXO = 40
const RAQUETE_LARGURA = 10
const RAQUETE_ALTURA = 50
const CORDEFUNDO = '#000000'
const JOGADOR_COR = '#FFFFFF'
const COMPUTADOR_COR = '#FF0000'
const BOLA_COR = '#FFFFFF'

// Obtenha o valor y do meio para desenhar a raquete usando a relação entre
// a altura da tela e a altura da raquete
const MEIO_Y = (JOGO_ALTURA - RAQUETE_ALTURA) / 2

/* Entidades no jogo */
var jogador = new Jogador()
var computador = new Computador()
var bola = new Bola(JOGO_LARGURA/2, JOGO_ALTURA/2)

// RAQUETE 
function Raquete(x, y, width, height) {
    this.x = x 
    this.y = y
    this.width = width
    this.height = height
    this.x_velocidade = 0
    this.y_velocidade = 0
}

Raquete.prototype.renderizar = function(cor) {
    context.fillStyle = cor 
    context.fillRect(this.x, this.y, this.width, this.height)
}

Raquete.prototype.mover = function(x, y) {
    this.x += x
    this.y += y
    
    this.x_velocidade = x
    this.y_velocidade = y

    // todo o caminho até o fundo
    if (this.y < 0) {
        this.y = 0
        this.y_velocidade = 0

    } else if (this.y + this.height > JOGO_ALTURA) {
        // todo o caminho para o topo
        this.y = JOGO_ALTURA - this.height
        this.y_velocidade = 0
    }
}
// BOLA 
function Bola(x, y) {

    this.x = x
    this.y = y
    this.x_velocidade = 3
    this.y_velocidade = 0
    this.raio = 5
}

Bola.prototype.renderizar = function(cor) {
    context.beginPath()
    context.arc(this.x, this.y, this.raio, 2 * Math.PI, false)
    context.fillStyle = cor 
    context.fill()
}

Bola.prototype.atualizar = function(raquete1, raquete2) {
    this.x += this.x_velocidade
    this.y += this.y_velocidade

    var topo_x = this.x - 5
    var topo_y = this.y - 5

    var inferior_x = this.x + 5
    var inferior_y = this.y + 5

    // batendo na parede superior
    if (this.y - 5 < 0) {
        this.y = 5
        this.y_velocidade = -this.y_velocidade

    // batendo na parede inferior
    } else if (this.y + 5 > JOGO_ALTURA) {
        this.y = JOGO_ALTURA-5
        this.y_velocidade = -this.y_velocidade
    }

    // Um ponto foi feito, redefinir a bola
    if (this.x < 0 || this.x > JOGO_LARGURA) {
        this.x_velocidade = 3
        this.y_velocidade = 0
        this.x = JOGO_LARGURA /2
        this.y = JOGO_ALTURA /2
        raquete1.y = MEIO_Y
        raquete2.y = MEIO_Y
    }

    if (topo_x < 300) {
        if (topo_y < (raquete1.y + raquete1.height) && inferior_y > raquete1.y 
           && topo_x < (raquete1.x + raquete1.width) && inferior_x > raquete1.x) {
            
            // acertar a raquete do jogador
            this.x_velocidade = 3
            this.y_velocidade += (raquete1.y_velocidade / 2)
            this.x += this.x_velocidade
        }
    } else {
        if (topo_y < (raquete2.y + raquete2.height) && inferior_y > raquete2.y 
           && topo_x < (raquete2.x + raquete2.width) && inferior_x > raquete2.x) {
            
            // bater a raquete do computador
            this.x_velocidade = -3 
            this.y_velocidade += (raquete2.y_velocidade / 2)
            this.x += this.x_velocidade
        }
    }
}

// JOGADOR 
function Jogador() {
    this.raquete = new Raquete(10, MEIO_Y, RAQUETE_LARGURA, RAQUETE_ALTURA)
}

Jogador.prototype.atualizar = function() {

    for(var chave in teclasParaBaixo) {

        var valor = Number(chave)

        if (valor == TECLA_CIMA) {
            this.raquete.mover(0, -4)

        } else if (valor == TECLA_BAIXO) {
            this.raquete.mover(0, 4)

        } else {
            this.raquete.mover(0, 0)
        }
    }
}
Jogador.prototype.renderizar = function(cor) {
    this.raquete.renderizar(cor)
}

// COMPUTADOR
function Computador() {
    this.raquete = new Raquete(JOGO_LARGURA - 20, MEIO_Y, RAQUETE_LARGURA, RAQUETE_ALTURA)
}

Computador.prototype.atualizar = function(bola) {

    var y_pos = bola.y 
    var dif = -((this.raquete.y + (this.raquete.height / 2)) - y_pos)

    if (dif < 0 && dif < -4) {
        dif = -4

    } else if (dif > 0 && dif > 4) {
        dif = 4
    }
    this.raquete.mover(0, dif)

    if (this.raquete.y < 0) {
        this.raquete.y = 0

    } else if (this.raquete.y + this.raquete.height > 400) {
        this.raquete.y = 400 - this.raquete.height
    }
}

Computador.prototype.renderizar = function(cor) {
    this.raquete.renderizar(cor)
}

// Diga ao navegador que desejamos realizar a animação
var animar = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame  ||

             function(callback) {

                window.setTimeout(callback, 1000/60)
             }

// Configurar uma tela 2D
var canvas = document.createElement('canvas')
canvas.width = JOGO_LARGURA
canvas.height = JOGO_ALTURA

var context = canvas.getContext('2d')

// Quando a página for carregada, anexe a tela à tela
window.onload = function() {
    document.body.appendChild(canvas)
    animar(step)
}

var step = function() {
    atualizar()
    renderizar()
    animar(step)
}

var atualizar = function() {

    jogador.atualizar()
    computador.atualizar(bola)
    bola.atualizar(jogador.raquete, computador.raquete)
}

var renderizar = function() {
    context.fillStyle = CORDEFUNDO
    context.fillRect(0, 0, JOGO_LARGURA, JOGO_ALTURA)
    jogador.renderizar(JOGADOR_COR)
    computador.renderizar(COMPUTADOR_COR)
    bola.renderizar(BOLA_COR)
}

// Controles

// Acompanhe qual tecla é pressionada
var teclasParaBaixo = {}

window.addEventListener('keydown', function(e) {

    teclasParaBaixo[e.keyCode] = true 
})

window.addEventListener('keyup', function(e) {
    delete teclasParaBaixo[e.keyCode]
})