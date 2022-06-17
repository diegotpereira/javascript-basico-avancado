const tempo = document.querySelector("#tempo")
const iniciarBtn = document.querySelector("#iniciar")

let cronometro = 0
let segundos = 0
let horas = 0
let minutos = 0

let MINUTOS_EM_HORAS = 60
let SEGUNDOS_EM_MINUTOS = 60 

function atualizarTempo() {
    segundos++ 

    if (segundos >= SEGUNDOS_EM_MINUTOS) {
        segundos = 0
        minutos++ 

        if (minutos >= MINUTOS_EM_HORAS) {
            minutos = 0
            horas++
        }
    }
    tempo.textContent = 
    (horas ? (horas > 9 ? horas : "0" + horas) : "00") + 
    ":" + 
    (minutos ? (minutos > 9 ? minutos : "0" + minutos) : "00") + 
    ":" + 
    (segundos > 9 ? segundos : "0" + segundos)

    // iniciar o cronômetro novamente
    iniciar()
}

function iniciar() {
    cronometro = setTimeout(atualizarTempo, 1000)
    iniciarBtn.disabled = true 
}

function parar() {
    clearTimeout(cronometro)
    iniciarBtn.disabled = false
}

function redefinir() {
    tempo.textContent = '00:00:00'
    segundos = 0
    minutos = 0
    horas = 0

    iniciarBtn.disabled = false
}
window.iniciar = iniciar
window.parar = parar 