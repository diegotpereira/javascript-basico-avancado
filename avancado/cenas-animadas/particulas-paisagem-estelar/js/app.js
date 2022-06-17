// https://codepen.io/worenga/pen/DKexxq
// https://geracaocriativa.com/conteudos/desenvolvimento/codigo/516-8-animacoes-em-javascript-e-css-excelentes
// https://github.com/learning-zone/JavaScript-Coding-Practice
// https://www.geeksforgeeks.org/javascript/

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
})()

$(document).ready(function() {
    $('#canvas').mousedown(function() {
        configuracoes.velocity_x += 2
    }).mouseup(function() {
        configuracoes.velocity_x -= 2
    })
    estrela = function() {
        this.deslocamento = 0
    }

    var ctx = document.getElementById("canvas").getContext('2d')
    var deslocamento = 0

    (function animarLoop() {
        requestAnimFrame(animarLoop)

        ctx.fillStyle = "rgba(0, 0, 0, 1)"
        ctx.fillRect(0, 0, 1000, 1000)

        for(index = 0; index < configuracoes.particulas; index++) {
            estrelas[index].draw(ctx)
            ctx.beginPath()
            ctx.fill()

            if (estrelas[index].x > 998 || (estrelas[index].params.life)) {
                
            }
        }
    })
})