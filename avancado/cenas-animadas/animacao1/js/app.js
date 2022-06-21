var id = null

function mover() {
    var elemento = document.querySelector('#minhaAnimacao')
    var posicao = 0

    clearInterval(id)
    id = setInterval(quadrado, 10)

    function quadrado() {
        if (posicao == 350) {
            clearInterval(id)
        } else {
            posicao++
            elemento.style.top = posicao + 'px'
            elemento.style.left = posicao + 'px'
        }
    }
}