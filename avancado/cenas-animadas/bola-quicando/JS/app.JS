var bolaQuicando = anime({
    targets: '.bola',
    translateY: '60vh',
    duration: 300,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic',
    scaleX: {
        value: 1.05,
        duration: 150,
        delay: 268
    }
})