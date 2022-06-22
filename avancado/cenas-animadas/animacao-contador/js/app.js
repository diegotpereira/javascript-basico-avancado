var resultado = document.querySelector('.resultado')

iniciarBtn = document.querySelector('.iniciar')
pararBtn = document.querySelector('.parar')

c = 0
rodando = true
var rodar = function() {
    if (!rodando) {
        return 
    }
    requestAnimationFrame(rodar)
    c++
    resultado.innerHTML = c
}
var iniciar = function() {
    rodando = true 
    rodar()
}
var parar = function() {
    rodando = false 
    c = 0
    parar.innerHTML = c
}
iniciarBtn.addEventListener('click', iniciar)
pararBtn.addEventListener('click', parar)