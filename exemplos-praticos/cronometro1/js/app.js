window.onload = function() {
    var segundos = 00
    var dezenas = 00
    var anexarDezenas = document.querySelector('#dezenas')
    var anexarSegundos = document.querySelector('#segundos')
    var iniciarBtn = document.querySelector('#button-iniciar')
    var pararBtn = document.querySelector('#button-parar')
    var resetarBtn = document.querySelector('#button-resetar')
    var intervalo 

    iniciarBtn.onclick = function() {
        clearInterval(intervalo)

        intervalo = setInterval(iniciarTempo, 10)
    }
    pararBtn.onclick = function() {
        clearInterval(intervalo)
    }
    resetarBtn.onclick = function() {
        clearInterval(intervalo)

        dezenas = "00"
        segundos = "00"

        anexarDezenas.innerHTML = dezenas 
        anexarSegundos.innerHTML = segundos
    }
    function iniciarTempo() {
        dezenas++

        // se a dezena forem menor ou igual 1 9 faça
        if (dezenas <= 9) {
            // dezena recebe 0
            anexarDezenas.innerHTML = "0" + dezenas
        }
        // se a dezena for maior que nove
        if (dezenas > 9) {
            // dezena recebe dezena
            anexarDezenas.innerHTML = dezenas 
        }
        // se as dezenas for maior que 99
        if (dezenas > 99) {

            console.log("segundos");
            // acrescenta segundos 
            segundos++

            // html exibe 0
            anexarSegundos.innerHTML = "0" + segundos
            // dezena recebe 0
            dezenas = 0
            // html exibe 0
            anexarDezenas.innerHTML = "0" + 0 
        }
        // se segundos for maior que 9
        if (segundos > 9) {
            // html exibe segundos
            anexarSegundos.innerHTML = segundos
        }
    }
}