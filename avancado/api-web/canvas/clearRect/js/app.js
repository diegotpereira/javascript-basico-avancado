var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(200, 20)
ctx.lineTo(120, 120)
ctx.closePath()
ctx.stroke()

ctx.clearRect(10, 10, 100, 100)