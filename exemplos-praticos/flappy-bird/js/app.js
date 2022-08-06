document.addEventListener('DOMContentLoaded', () => {

    const passaro = document.querySelector('.passaro')
    const jogoExibir = document.querySelector('.jogo-container')
    const chao = document.querySelector('.chao')
    
    let passaroEsquerdo = 220
    let passaroFundo = 100
    let gravidade = 3

    function iniciarJogo() {
        passaroFundo -= gravidade
        passaro.style.bottom = passaroFundo + 'px'
        passaro.style.left = passaroEsquerdo + 'px'
    }

    let tempoId = setInterval(iniciarJogo, 20)

    // clearInterval(tempoId)
    function control(e) {
        if (e.keyCode === 32) {
            pular()
        }
    }

    function pular() {

        if(passaroFundo < 500) passaroFundo += 50
        passaro.style.bottom = passaroFundo + 'px'
        console.log(passaroFundo);
    }
    document.addEventListener('keyup', pular)
})