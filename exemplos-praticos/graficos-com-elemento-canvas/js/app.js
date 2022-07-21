var canvas = document.querySelector('#canvasExemplo')

var contexto = canvas.getContext('2d')

contexto.fillStyle = 'rgba(255, 0, 0, 0.5'
contexto.fillRect(20, 20, 100, 100)

contexto.fillStyle = 'rgba(0, 255, 0, 0.5'
contexto.fillRect(40, 40, 100, 100)

contexto.fillStyle = 'rgba(0, 0, 255, 0.5'
contexto.fillRect(60, 60, 100, 100)

contexto.fillStyle = '#000'
contexto.fillText('Exemplo Usando Canvas', 15, 15)