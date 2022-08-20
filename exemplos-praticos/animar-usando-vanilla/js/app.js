

var elemento = document.getElementById('animadoElemento'),
esquerdo = 0,
ultimoFrame = +new Date,
temporizador

temporizador = setInterval(function() {
    
    var agora = +new Date,
    deltaT = agora - ultimoFrame

    elemento.style.left = (esquerdo += 10 * deltaT / 16) + 'px'


    ultimoFrame = agora 

    if (esquerdo > 400) {
        
        clearInterval(temporizador)
        
    }
}, 16)