(function() {
    'use strict'

    // variaveis
    var itens = document.querySelectorAll('.linhaDoTempo li')

    function ehElementoNaPortaVisualizacao(el) {
        var reta =el.getBoundingClientRect()

        return (
            reta.top >= 0 &&
            reta.left >= 0 && 
            reta.bottom <= 
            (window.innerHeight || document.documentElement.clientHeight) &&
            reta.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
    function callBackFunc() {
        for(var index = 0; index < itens.length; index++) {
            if (ehElementoNaPortaVisualizacao(itens[index])) {
                itens[index].classList.add('in-view')
            }
        }
    }
    // ouvintes dos eventos
    window.addEventListener('load', callBackFunc)
    window.addEventListener('resize', callBackFunc)
    window.addEventListener('scroll', callBackFunc)
})()