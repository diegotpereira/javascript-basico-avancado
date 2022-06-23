var caixa = document.querySelector('#caixa')

var taxaQuadros = document.querySelector('#taxaQuadros')

var distancia = document.querySelector('#distancia')

var int 

function animar() {
    var margem = 0

    int = setInterval(function() {
        margem = (margem > window.innerWidth ? 0 : margem + Number(distancia.value))
        caixa.style.marginLeft = margem + 'px'
    }, 100 / Number(taxaQuadros.value))
}
animar()

function redefinir() {
    clearInterval(int)
    animar()
}

taxaQuadros.addEventListener('change', redefinir)
distancia.addEventListener('change', redefinir)