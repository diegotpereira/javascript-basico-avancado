var alterarEl = $('.el')
var linhaCorte = anime.timeline({
    loop: true 
})

linhaCorte
.add({
    targets: '.el',
    width: [0, 160],
    duration: 800,
    easing: 'easeOutQuart',
    delay: 50
})
.add({
    targets: '.el',
    width: [160, 160],
    easing: 'linear',
    duration: 800
})
.add({
    targets: '.el',
    width: [160, 0],
    duration: 800,
    easing: 'easeOutQuart',
    delay: 50
})
.add({
    targets: '.el',
    width: [0, 0],
    easing: 'linear',
    duration: 800
})

alterarEl.update = function(anim) {

    if (anim.currentTime < 2500 && anim.currentTime > 850) {
        alterarEl.css({ float: 'right', left: 'auto', right: '20px'})
    }
    if (anim.currentTime > 2500) {
        alterarEl.css({float: 'left', left: '20px', right: 'auto'})
    }
}