var paraGraus = function(radianos) {

    return radianos * (180 / Math.PI)
}

var paraRadianos = function(graus) {

    return graus * (Math.PI / 180)
}

document.addEventListener('DOMContentLoaded', function() {

    // Referencias
    var sol = document.querySelector('#sol')
    var terra = document.querySelector('#terra')

    // Dimensões
    var solDimen = sol.getBoundingClientRect()
    var terraDimen = terra.getBoundingClientRect()

    // controles 
    var angulo = 0
    var dx = 200
    var tempo = 10
    var velocidade = 5.5; 

    (function desenhar() {
        if (angulo < tempo * 360) requestAnimationFrame(desenhar)
            
        // funcão trigonometrica
        var sin = Math.sin(paraRadianos(angulo))
        var cos = Math.cos(paraRadianos(angulo))

        // escala
        var x = (cos * dx).toFixed(3)
        var y = (sin * dx).toFixed(3)

        // buscar cordenadas
        var translateX = solDimen.left + Number(x)
        var translateY = solDimen.top - Number(y)

        // animação
        terra.style.transform = 'translate(' + translateX + 'px,' + translateY + 'px)'
        angulo += velocidade
        
    }())
})