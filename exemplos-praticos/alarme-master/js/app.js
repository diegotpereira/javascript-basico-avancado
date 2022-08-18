function alarme() {

    clearInterval(intervalo)
    document.getElementById('relogio').src = 'img/alarm.gif'
    alert('O tempo acabou');
}

var tempo = prompt('Digite o tempo em segundos:')

function tiqueTaque() {

    tempo = tempo - 1
    document.getElementById('temporizador').innerHTML = tempo
}

var intervalo = setInterval(tiqueTaque, 1000)
var tempoEsgotado = setTimeout(alarme, tempo * 1000)

function cancelar() {

    clearTimeout(tempoEsgotado)
    clearInterval(intervalo)
}

function reiniciar() {

    location.reload()
}