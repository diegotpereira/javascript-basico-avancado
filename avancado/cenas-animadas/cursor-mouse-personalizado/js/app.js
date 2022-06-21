var $cursor = $('.cursor')

function moverCursor(e) {
    $cursor.addClass('is-moving')

    TweenLite.to($cursor, 0.23, {
        left: e.pageX,
        top: e.pageY,
        ease: Power4.easeOut
    })
    clearTimeout(tempo)

    var tempo = setTimeout(function() {
        $cursor.removeClass('is-moving')
    }, 300)
}
$(window).on('mousemove', moverCursor)