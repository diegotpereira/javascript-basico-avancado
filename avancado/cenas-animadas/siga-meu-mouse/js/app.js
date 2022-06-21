var $circulo = $('.circulo')

function moverCirculo(e) {
    TweenLite.to($circulo, 0.3, {
        css: {
            left: e.pageX,
            top: e.pageY
        }
    })
}
$(window).on('mousemove', moverCirculo)