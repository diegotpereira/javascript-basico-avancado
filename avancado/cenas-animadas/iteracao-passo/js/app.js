var mousePos = 0
var atualPos = 0
var posicao = 0
var arrastavel = false
var bloquearAnimeAdicionar
var contarAnimeMais = anime.timeline()
var contarAnimeMenos = anime.timeline()
var deslocamento = 130
var direcao 
var dur = 2000
var contar = parseInt($('.active').text())

$(document).on('mousedown', '.stepper', function() {
    atualPos = mousePos

    arrastavel = true 
    blockAnime.pause()

    if ($('.first').hasClass('active')) {
        $('.first').removeClass('active').addClass('next')
        $('.second').removeClass('next').addClass('active')

    } else if ($('.second').hasClass('active')) {
        $('.second').removeClass('active').addClass('next')
        $('.first').removeClass('next').addClass('active')
    }
    if (direcao == 'mais') {
        contarAnimeMais.pause()
    }
    if (direcao == 'menos') {
        contarAnimeMenos.pause()
    }
})

$(document).on("mousemove", function(event) {
    mousePos = event.pageY

    if (arrastavel) {
        posicao = mousePos - atualPos
        $('.stepper').css('transform', 'translateY(' + posicao /  2 + 'px)')
    }
    if (posicao <= (deslocamento * -1) && arrastavel) {
        center()
        contar++
        mais()
    }
    if (posicao >= deslocamento && arrastavel) {
        center()
        contar--
        menos()
    }
})

$(document).on("mouseup", function(event) {
    if (arrastavel) {
        center()
    }
})

function center() {
    arrastavel = false
    blockAnime = anime({
        targets: '.stepper',
        duration: dur,
        translateY: 0
    })
}
function mais() {
    direcao = 'mais'
    contarAnimeMais = anime.timeline()

    $('.next').text(contar).css('transform', 'translateY(-100px) translateX(-50%)')

    contarAnimeMais.add({
        targets: '.active',
        translateY: 100,
        translateX: '-50%',
        duration: dur 
    })
    .add({
        targets: '.next',
        translateY: 0,
        translateX: '-50%',
        duration: dur,
        deslocamento: '-=' + dur
    })
}
function menos() {
    direcao = 'menos'
    contarAnimeMenos = anime.timeline()

    $('.next').text(contar).css('transform', 'translateY(100px) translateX(-50%)')
    console.log(contar);

    contarAnimeMenos.add({
        targets: '.active',
        translateY: -100,
        translateX: '-50%',
        duration: dur 
    })
    .add({
        targets: '.next',
        translateY: 0,
        translateX: '-50%',
        duration: 1500,
        deslocamento: '-=' + dur
    })
}
center()
mais()
setTimeout(() => {
   $('.hide').removeClass('hide')
}, 300);