var sol = new Image()
var lua = new Image()
var terra = new Image()

function init() {
    sol.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
    lua.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
    terra.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'

    setInterval(desenhar, 100)
}

function desenhar() {
    var ctx = document.getElementById('canvas').getContext('2d')

    ctx.globalCompositeOperation = 'destination-over'
        // limpar canvas
    ctx.clearRect(0, 0, 300, 300)

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
    ctx.save()
    ctx.translate(150, 150)

    // Terra
    var tempo = new Date()
    ctx.rotate(((2 * Math.PI) / 60) * tempo.getSeconds() +
        ((2 * Math.PI) / 60000) * tempo.getMilliseconds())
    ctx.translate(105, 0)
    ctx.fillRect(0, -12, 50, 24)
    ctx.drawImage(terra, -12, -12);

    // Lua
    ctx.save()
    ctx.rotate(((2 * Math.PI) / 6) * tempo.getSeconds() +
        ((2 * Math.PI) / 6000) * tempo.getMilliseconds())
    ctx.translate(0, 28.5)
    ctx.drawImage(terra, -3.5, -3.5)
    ctx.restore()
    ctx.restore()
    ctx.beginPath()
        // Orbita terra
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
    ctx.stroke();
    ctx.drawImage(sol, 0, 0, 300, 300)
}
init()