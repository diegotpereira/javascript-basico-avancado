trem.onclick = function() {
    let iniciar = Date.now()

    let tempo = setInterval(function() {
        let tempoPassado = Date.now() - iniciar

        trem.style.left = tempoPassado / 5 + 'px'

        if(tempoPassado > 2000) 
        clearInterval(tempo)
    }, 20)
}