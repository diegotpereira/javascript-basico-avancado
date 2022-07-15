{
    const tocandoClasse = 'tocando', batidaLevada = document.getElementById('crash-ride')
    const hiHatTop = document.getElementById('hihat-top')

    const animarBatidaOuLevada = () => {
        batidaLevada.style.transform = 'rotate(0deg) scale(1.5)'
    }
    const animateHiHatClosed = () => {
        hiHatTop.style.top = '171px'
    }
    const tocarMusica = e => {
        const codigoChave = e.keyCode,
        chaveElemento = document.querySelector(`div[data-key="${codigoChave}"]`)

        if(!chaveElemento) return 

        const audioElemento = document.querySelector(`audio[data-key="${codigoChave}"]`)
        audioElemento.currentTime = 0
        audioElemento.play()

        switch (codigoChave) {
            case 69:
            case 82:
                animarBatidaOuLevada()
                break
            case 75:
                animateHiHatClosed()
                break;
        }
        chaveElemento.classList.add(tocandoClasse)
    }

    const removerBatidaLevadaTransicao = e => {
        if(e.propertyName !== 'transform') return

        e.target.style.transform = 'rotate(-7.2deg) scale(1.5)'
    }

    const removerhiHatTopTransicao = e => {
        if(e.propertyName !== 'top') return 

        e.target.style.top = '166px'
    }
    const removeChaveTransicao = e => {
        if (e.propertyName !== 'transform') return 

        e.target.classList.remove(tocandoClasse)
    }

    const bateriaChave = Array.from(document.querySelectorAll('.key'))

    bateriaChave.forEach(key => {
        key.addEventListener('transitionend', removeChaveTransicao)
    })

    batidaLevada.addEventListener('transitionend', removerBatidaLevadaTransicao)
    hiHatTop.addEventListener('transitionend', removerhiHatTopTransicao)

    window.addEventListener('keydown', tocarMusica)
}