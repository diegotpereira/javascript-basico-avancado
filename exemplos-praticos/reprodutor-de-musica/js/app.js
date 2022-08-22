let listaDeReproducao = [{
    'titulo' : 'I Remember You de Jude Suarez',
    'audio' : 'audio/sample2.mp3'
}]
i = 0
n = listaDeReproducao.length
let tocador = document.getElementById('tocador')
let dur = document.getElementById('dur')

listaDeReproducao.forEach(function(i) {
    console.log(i.audio);
    tocador.src = i.audio

    $('.titulo').html(i.titulo)
}, )

function calcularValorTotal(tamanho) {

    let minutos = Math.floor(tamanho / 60),
        segundos_int = tamanho - minutos * 60,
        segundos_str = segundos_int.toString(),
        segundos = segundos_str.substr(0, 2),
        tempo = minutos + ':' + segundos 

        return tempo
}

function calcularAtualValor(atualTempo) {

    let atual_hora = parseInt(atualTempo / 3600) % 24,
    atual_minuto = parseInt(atualTempo / 60) % 60,
    atual_segundos_long = atualTempo % 60,
    atual_segundos = atual_segundos_long.toFixed(),
    atual_tempo = (atual_minuto < 10 ? '0' + atual_minuto : atual_minuto) + ':' + (atual_segundos < 10 ? '0' + atual_segundos : atual_segundos)

    console.log(atual_tempo);
    return atual_tempo
}

function initProgressBar() {

    let tamanho = tocador.duration
    console.log(tamanho);
    
    let atual_tempo = tocador.atualTempo
    console.log(atual_tempo);

    let comprimentoTotal = calcularValorTotal(tamanho)
    jQuery('.final-tempo').html(comprimentoTotal)
    console.log(comprimentoTotal);
    
    let atualTempo = calcularAtualValor(atual_tempo)

    console.log(atualTempo);
    jQuery('.iniciar-tempo').html(atualTempo)
    
    dur.value = tocador.atualTempo

    if (tocador.atualTempo === tocador.duration) {
        
        $('#tocar-btn').fadeIn('slow', function() {

            $(this).removeClass('fa-pause')
            $(this).addClass('fa-play')
            dur.value = 0
        })
    }

}

function mSet() {
    tocador.atualTempo = dur.value
}

function mDur() {
    let tamanho = tocador.duration
    dur.max = tamanho
}
function iniciarTocador (num) {

    for(let i = 0; i < num; i++) {

        (function() {
            let tocadoraContainer = document.getElementById('tocador-container'),
            tocador = document.getElementById('tocador'),
            estahTocando = false,
            tocarBtn = document.getElementById('tocar-btn')

            if (tocarBtn != null) {
                
                tocarBtn.addEventListener('click', function() {
                    alternarReproduzir()
                })
            }
            function alternarReproduzir() {

                if (tocador.paused === false) {
                    
                    tocador.pause()
                    estahTocando = false

                    $('#tocar-btn').fadeIn('slow', function() {
                        $(this).removeClass('fa-pause')
                        $(this).addClass('fa-play')
                    })
                } else {
                    tocador.play()
                    $('#tocar-btn').fadeIn('slow', function() {
                        $(this).removeClass('fa-play')
                        $(this).addClass('fa-pause')
                    })
                    estahTocando = true
                }
            }
        }())
    }
}

$('#ant').data('dir', 1)
$('#prox').data('dir', -1)
$('#ant, #prox').on('click', function() {
    i = (i + $(this).data('dir') + n) % n
    console.log(i);

    tocador.src = listaDeReproducao[i].audio

    $('#titulo').html(listaDeReproducao[i].titulo)
    $('#tocar-btn').removeClass('fa-play')
    $('#tocar-btn').addClass('fa-pause')

    tocador.play()
})

$('.audio-tocar').toArray().forEach(function(tocador) {

    let audio = $(tocador).find('audio')[0]
    let volumeControle = $(tocador).on('click', function(e) {

        let volumePosicao = e.pageX - $(this).offset().left
        let audioVolume = volumePosicao / $(this).width()

        if (audioVolume >= 0 && audioVolume <= 1) {
            
            audio.volume = audioVolume

            $(this).find('.interna').css('width', audioVolume * 100 + '%')
        }
    })
})

$(function() {
    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown').slideToggle('fast')
    })
    $(document).click(function(e) {
        var target = e.target

        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
            $(this).next('.dropdown').hide()
        }
    })
})
$('#botaoEscuro').click(trocarEscuro)
$('#botaoBranco').click(trocarBranco)
$('#botaoAzul').click(trocarAzul)

function trocarEscuro() {
    $('#skin').attr('class', 'dark audio-tocar')
    $('.interna').css('background', '#fff')
    $('.titulo').css('color', '#fff')
    $('.tempo').css('color', '#fff')
    $('.fa-volume-up').css({
        'color': '#fff'
    })

    $('.audio-tocar #tocar-btn').css({
        'color': '#fff',
        'border-color': '#fff'
    })
    $('.ctrl_btn').css({
        'color': '#fff',
        'border-color': '#fff'
    })
}

function trocarBranco() {
    $('#skin').attr('class', 'white audio-tocar')
    $('.interna').css('background', '#555')
    $('.titulo').css('color', '#555')
    $('.tempo').css('color', '#555')
    $('.fa-volume-up').css({
        'color': '#555'
    })
    $('.audio-tocar $tocar-btn').css({
        'color': '#555',
        'border-color': '$55'
    })
    $('.crtl_btn').css({
        'color': '$555',
        'border-color': '#555'
    })
}
function trocarAzul() {
    $('#skin').attr('class', 'blue audio-tocar')
    $('.interna').css('background', '#fff')
    $('.titulo').css('color', '#fff')
    $('.tempo').css('color', '#fff')
    $('.fa-volume-up').css({
        'color' : '#fff'
    })
    $('.audio-tocar #tocar-btn').css({
        'color' : '#fff'
    })
    $('.ctrl_btn').css({
        'color': '#fff',
        'border-color' : '#fff'
    })
}
iniciarTocador(jQuery('#tocador-container').length)