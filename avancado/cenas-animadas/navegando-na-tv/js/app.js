var svgContainer = document.getElementById('svgContainer')

var animarItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
})