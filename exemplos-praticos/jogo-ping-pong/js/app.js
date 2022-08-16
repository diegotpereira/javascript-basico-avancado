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

//
//
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

// JOGADOR 
function Jogador() {
    this.raquete = new Raquete(10, MEIO_Y, RAQUETE_LARGURA, RAQUETE_ALTURA)
}

Jogador.prototype.renderizar = function(cor) {
    this.raquete.renderizar(cor)
}

// COMPUTADOR
function Computador() {
    this.raquete = new Raquete(JOGO_LARGURA - 20, MEIO_Y, RAQUETE_LARGURA, RAQUETE_ALTURA)
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
    renderizar()
    animar(step)
}

var renderizar = function() {
    context.fillStyle = CORDEFUNDO
    context.fillRect(0, 0, JOGO_LARGURA, JOGO_ALTURA)
    jogador.renderizar(JOGADOR_COR)
    computador.renderizar(COMPUTADOR_COR)
    bola.renderizar(BOLA_COR)
}