document.addEventListener('DOMContentLoaded', () => {

    const passaro = document.querySelector('.passaro')
    const jogoExibir = document.querySelector('.jogo-container')
    const chao = document.querySelector('.chao-movendo')
    
    let passaroEsquerdo = 220
    let passaroFundo = 100
    let gravidade = 3
    let ehFimDeJogo = false
    let gap = 430

    function iniciarJogo() {
        passaroFundo -= gravidade
        passaro.style.bottom = passaroFundo + 'px'
        passaro.style.left = passaroEsquerdo + 'px'
    }

    let jogotempoId = setInterval(iniciarJogo, 20)

    // clearInterval(tempoId)
    function controle(e) {
        if (e.keyCode === 32) {
            pular()
        }
    }

    function pular() {

        if(passaroFundo < 500) passaroFundo += 50
        passaro.style.bottom = passaroFundo + 'px'
        console.log(passaroFundo);
    }
    document.addEventListener('keyup', controle)

    function gerarObstaculo() {
        
        let obstaculoRestante = 500
        let aleatoriaAltura = Math.random() * 60
        let obstaculoBottom = aleatoriaAltura

        const obstaculo = document.createElement('div')
        const topoObstaculo = document.createElement('div')

        if (!ehFimDeJogo) {
            obstaculo.classList.add('obstaculo')
            topoObstaculo.classList.add('topoObstaculo')
        }
        jogoExibir.appendChild(obstaculo)
        jogoExibir.appendChild(topoObstaculo)

        jogoExibir.appendChild(obstaculo)
        jogoExibir.appendChild(topoObstaculo)

        obstaculo.style.left = obstaculoRestante + 'px'
        topoObstaculo.style.left = obstaculoRestante +  'px'

        obstaculo.style.bottom = obstaculoBottom + 'px'
        topoObstaculo.style.bottom = obstaculoBottom + gap + 'px'

        function moverObstaculo() {

            obstaculoRestante -=2

            obstaculo.style.left = obstaculoRestante + 'px'
            topoObstaculo.style.left = obstaculoRestante + 'px'

            if (obstaculoRestante === -60) {
                
                clearInterval(tempoId)

                jogoExibir.removeChild(obstaculo)
                jogoExibir.removeChild(topoObstaculo)
            }
            if (obstaculoRestante > 200 && obstaculoRestante < 280 && passaroEsquerdo === 220 &&
                (passaroFundo < obstaculoBottom + 153 || passaroFundo > obstaculoBottom + gap - 200) ||
                passaroFundo === 0) {
                
                    clearInterval(tempoId)
            }
        }
        let tempoId = setInterval(moverObstaculo, 20)
        if(!ehFimDeJogo) setInterval(gerarObstaculo, 3000)
    }
    gerarObstaculo()

    function fimDeJogo() {
        clearInterval(jogotempoId)
        console.log('Fim de Jogo');
        ehFimDeJogo = true

        document.removeEventListener('keyup', controle)

        chao.classList.add('chao')
        chao.classList.remove('chao-movendo')
    }
})