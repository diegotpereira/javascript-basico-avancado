var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

// primeiro path
ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.moveTo(20, 20)
ctx.lineTo(200, 20)
ctx.stroke()

// segundo path
ctx.beginPath()
ctx.strokeStyle = 'green'
ctx.moveTo(20, 20)
ctx.lineTo(120, 120)
ctx.stroke()