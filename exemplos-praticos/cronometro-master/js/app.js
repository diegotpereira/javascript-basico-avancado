var iniciarTemporizadorBotao = document.querySelector('.iniciarTemporizador')
var pausarTemporizadorBotao = document.querySelector('.pausarTemporizador')
var temporizadorDisplay = document.querySelector('.temporizador')

var iniciarTempo
var atualizarTemporizador 
var diferenca
var temporizadorIntervalo 
var salvarTemporizador
var pausado = 0
var rodando = 0

function iniciarTemporizador() {

    if (!rodando) {
        
        iniciarTempo = new Date().getTime()
        temporizadorIntervalo = setInterval(getExibirTempo, 1)
        pausado = 0
        rodando = 1

        temporizadorDisplay.style.background = "#FF0000"
        temporizadorDisplay.style.cursor = "auto"
        temporizadorDisplay.style.color = "yellow"

        iniciarTemporizadorBotao.classList.add('acendedor')
        pausarTemporizadorBotao.classList.remove('acendedor')

        iniciarTemporizadorBotao.style.cursor = "auto"
        pausarTemporizadorBotao.style.cursor = "pointer"
    }
}

function pausarTemporizador() {

    if (!diferenca) {
        
        // se o temporizador nunca foi iniciado, 
        // não permita que o botão de pausa faça nada

    } else if (!pausado) {
        
        clearInterval(temporizadorIntervalo)

        salvarTemporizador = diferenca

        pausado = 1
        rodando = 0

        temporizadorDisplay.style.background = '#A90000'
        temporizadorDisplay.style.color = '#690000'
        temporizadorDisplay.style.cursor = "pointer"

        iniciarTemporizadorBotao.classList.remove('acendedor')
        pausarTemporizadorBotao.classList.add('acendedor')

        iniciarTemporizadorBotao.style.cursor = "pointer"
        pausarTemporizadorBotao.style.cursor = "auto"

    } else {

        iniciarTemporizador()
    }
}

function redefinirTemporizador() {

    clearInterval(temporizadorIntervalo)

    salvarTemporizador = 0
    diferenca = 0
    pausado = 0
    rodando = 0

    temporizadorDisplay.innerHTML = 'Comece a estudar!'
    temporizadorDisplay.style.background = "#A90000"
    temporizadorDisplay.style.color = "#fff"
    temporizadorDisplay.style.cursor = "pointer"

    iniciarTemporizadorBotao.classList.remove('acendedor')
    pausarTemporizadorBotao.classList.remove('acendedor')

    iniciarTemporizadorBotao.style.cursor = "pointer"
    pausarTemporizadorBotao.style.cursor = "auto"
}

function getExibirTempo() {

    atualizarTemporizador = new Date().getTime()

    if (salvarTemporizador) {
        
        diferenca = (atualizarTemporizador - iniciarTempo) + salvarTemporizador

    } else {

        diferenca = atualizarTemporizador - iniciarTempo
    }

    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutos = Math.floor((diferenca % ( 1000 * 60 * 60)) / (1000 * 60))
    var segundos = Math.floor((diferenca % ( 1000 * 60)) / 1000)
    var milisegundos = Math.floor((diferenca % (1000 * 60)) / 100)

    horas = (horas < 10) ? "0" + horas : horas 
    minutos = (minutos < 10) ? "0" + minutos : minutos
    segundos = (segundos < 10) ? "0" + segundos : segundos
    milisegundos = (milisegundos < 100) ? (milisegundos < 10) ? "00" + milisegundos : "0" + milisegundos : milisegundos

    temporizadorDisplay.innerHTML = horas + ':' + minutos + ': ' + segundos + ':' + milisegundos
}