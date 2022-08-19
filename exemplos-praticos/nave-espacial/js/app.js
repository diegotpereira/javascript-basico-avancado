function verificarTeclado(event) {

    var teclaPressionada = event.originalEvent.code

    if (teclaPressionada == 'ArrowRight') {
        
        var direitaCSS = {
            'left' : '+=20px'
        }
        $('.naveEspacial').css(direitaCSS)
    }
    if (teclaPressionada == 'ArrowLeft') {
        
        var esquerdaCSS = {
            'left' : '-=20px'
        }
        $('.naveEspacial').css(esquerdaCSS)
    }
}

$(document).keydown(verificarTeclado)

function plataformaColisao() {

    var colidiu = colisao($('.naveEspacial'), $('.plataforma'))

    if (colidiu) {
        
        $('body').html('Nave espacial pousou com sucesso')
    }
}

setInterval(plataformaColisao, 50)

function aguaColisao() {

    var colidiu = colisao($('.naveEspacial'), $('.agua'))

    if (colidiu) {
        
        $('body').html('A nave espacial caiu')
    }
}

setInterval(aguaColisao, 50)