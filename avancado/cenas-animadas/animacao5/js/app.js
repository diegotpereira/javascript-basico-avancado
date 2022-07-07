(function() {
    'use-strict'

    console.log('teste');

    TweenMax.from('.box1', 1, {
        scale: 0.5,
        delay: 1
    })
    TweenMax.to('.box2', 2, {
        y: 300,
        ease: Power2.easeOut,
        repeat: 2
    })
    TweenMax.to('.box', 1, {
        x: 200
    })
})()