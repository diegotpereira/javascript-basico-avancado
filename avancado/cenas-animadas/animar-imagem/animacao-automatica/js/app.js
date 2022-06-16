var imgObj = null 
var animacao

function init() {
    imgObj = document.querySelector("#minhaImagem")
    imgObj.style.position = 'relative'
    imgObj.style.left = '0px'
}
function moverDireita() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px'
    animacao =  setTimeout(moverDireita, 20)
}
function parar() {
    clearTimeout(animacao)
    imgObj.style.left = '0px'
}
window.onload = init