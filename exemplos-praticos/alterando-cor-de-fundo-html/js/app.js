let cores = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']


let botao = document.getElementById('button')

botao.addEventListener('click', function() {

    let index = parseInt((Math.random() * cores.length) + 1)

    let canvas = document.getElementById('canvas')

    canvas.style.background = `${cores[index]}`

})