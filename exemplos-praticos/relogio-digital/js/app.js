function exibirTempo() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    var sessao = "AM"

    // se hora for igual a zero
    if (hora == 0) {

        // relogio recebe 12 
        hora = 12
    }
    // se hora for maior que 12 
    if (hora > 12) {
        // hora recebe hora - 12
        hora = hora - 12
        sessao = "PM"
    }
    hora = (hora < 10) ? "0" + hora : hora 
    minuto = (minuto < 10) ? "0" + minuto : minuto
    segundos = (segundos < 10) ? "0" + segundos : segundos

    var tempo = hora + ":" + minuto + ":" + segundos + " " + sessao

    document.querySelector("#exibicaoMeuRelogio").innerText = tempo
    document.querySelector("#exibicaoMeuRelogio").textContent = tempo
    

    setTimeout(exibirTempo, 1000)
}
exibirTempo()