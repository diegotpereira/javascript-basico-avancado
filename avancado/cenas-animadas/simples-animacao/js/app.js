var anim = document.querySelector('.texto .click-btn')

anim.addEventListener('click', function(e) {
    document.querySelector('.vermelho').classList.toggle('vermelho-expand')
    document.querySelector('.verde').classList.toggle('verde-expand')
    document.querySelector('.amarelo').classList.toggle('amarelo-expand')
    document.querySelector('.azul').classList.toggle('azul-expand')
})