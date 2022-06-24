(function() {
    var ELEMENTO_TELA_SELETOR = '.screen'
    var SELETOR_DE_TV = '#switcher-tv'

    var estaLigado = true

    var linhaTempo 

    function construirLinhaTempo() {
        linhaTempo = new TimelineMax({
            paused: true
        })
        linhaTempo.to(ELEMENTO_TELA_SELETOR, .2, {
            width: '100vw',
            height: '2px',
            background: '#ffffff',
            ease: Power2.easeOut
        })
        .to(ELEMENTO_TELA_SELETOR, .2, {
            width: '0',
            height: '0',
            background: '#ffffff'
        })
    }
    function alternarSwitcherTV() {
        if (estaLigado) {
            linhaTempo.restart()
        }
        if (!estaLigado) {
            linhaTempo.reverse()
        }
        estaLigado = !estaLigado
    }

    // inicializar
    $(document).ready(construirLinhaTempo)
    
    $(document).on('click', SELETOR_DE_TV, function() {
        alternarSwitcherTV()
    })
})()