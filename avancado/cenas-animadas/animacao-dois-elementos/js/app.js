function calcularXpos(bolaW, containerW) {

    return containerW - bolaW
}

var container = document.querySelector('.wrapper'),
bolaImg = document.querySelector('.bola'),
  containerWidth = container.offsetWidth,
  bolaWidth = bolaImg.offsetWidth;

imagesLoaded(document, function() {
    var kickBall = anime({
        targets: '.chutar',
        scale: 1.2,
        duration: 300,
        easing: 'easeInCubic',
        complete: function() {
            anime({
                targets: '.bola',
                translateX: calcularXpos(bolaWidth, containerWidth),
                scale: 1.5,
                easing: 'easeOutBounce',
                delay: 150
            })
        }
    })
})

