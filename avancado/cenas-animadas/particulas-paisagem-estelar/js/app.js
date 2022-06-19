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

        configuracoes.velocidade_x += 2
    }).mouseup(function() {
        configuracoes.velocidade_x -= 2
    })
    estrela = function() {
        this.deslocamento = 0
        this.x = 0,
        this.y = 0,
        this.params = {
            velocidade_x: 1,
            velocidade_y: 1,
            opacity: 1,
            vidaTempo: 3,
            x_deslocamento: 0,
            y_deslocamento: 0,
            radius: 0,
            decair: 0,
            crescimentocrescimento: 0,
            amplitude: 100,
            mudancaFase: 360,
            freq: 0.05,
            cor: '255, 255, 255'
        }
    }

    estrela.prototype.init = function() {
        this.params.mudancaFase = (Math.random() * 0.01)
        this.params.amplitude = Math.ceil(Math.random() * configuracoes.amplitudeSeed)
        this.params.freq = (Math.random() * configuracoes.freqSeed)
        this.params.x_deslocamento = Math.ceil(Math.random() * 1000)
        this.params.y_deslocamento = configuracoes.y_centro + Math.ceil(Math.random() * configuracoes.y_deslocarSeed)
        this.params.vidaTempo = Math.ceil(Math.random() * 3)
        this.params.velocidade_x = (Math.random() * configuracoes.velocidade_xSeed)
        this.params.velocidade_y = (Math.random() * configuracoes.velocidade_ySeed)
        this.params.radius = (Math.random() * configuracoes.maxRadius)
        this.params.opacity = Math.round(Math.random() * configuracoes.opacSeed, 2) / 100

        if (configuracoes.decair) {
            this.params.decair = Math.round(Math.random() * 1.5) * Math.random() * 0.01
        }

        if (configuracoes.crescimento) {
            this.params.crescimento = Math.round(Math.random() * 1.2) * Math.random() * 0.01
        }
        if(configuracoes.irregCor) {
            switch (Math.ceil(Math.random() * configuracoes.corPct)) {
                case 1:
                    this.params.cor = '255, 0, 0'
                    break 
                case 2:
                    this.params.cor = '0, 255, 255'
                    break 

                case 3:
                    this.params.cor = '0, 255, 200'
                    break 

                case 4:
                    this.params.cor = '255, 0, 255'
                    break 

                default:
                    this.params.cor = '255, 255, 255'
                    break 
            }
        }
        this.x = this.params.x_deslocamento
    }
    estrela.prototype.draw = function(ctx, novo_x) {
        this.deslocamento = (this.deslocamento + 1)
        var t = (this.params.x_deslocamento + this.deslocamento)

        if (this.params.opacity > configuracoes.opacMax) {
            this.params.decair *= -1
            this.params.vidaTempo--
        } else if (this.params.opacity <= configuracoes.opacMin) {
            this.params.vidaTempo--
            this.params.decair *= -1
            this.params.opacity = 0
        }
        if (this.params.radius > configuracoes.maxRadius) {
            this.params.crescimento *= -1
        } else if (this.params.radius <= 0.2) {
            this.params.crescimento *= -1
            this.params.radius = 0.2
        }
        this.params.radius += 2 * (this.params.crescimento)
        this.params.opacity += 2 * (this.params.decair)

        this.y = this.params.y_deslocamento + 
        (this.params.amplitude / 4 * Math.sin((2 + t * configuracoes.velocidade_y * 0.03) * this.params.freq)) * this.params.velocidade_y * configuracoes.escala_y
        this.x += (1 * this.params.velocidade_x *  configuracoes.velocidade_x)
        ctx.beginPath()
        ctx.fillStyle = "rgba(" + this.params.cor + ", " + Math.round(this.params.opacity * 100) / 100 + ")"
        ctx.arc(this.x, this.y, this.params.radius, 0, Math.PI * 2, false);
        ctx.fill()
       }

    configuracoes = {
        velocidade_x: 1,
        escala_y: 1,
        y_centro: 250,
        y_deslocarSeed: 0,
        velocidade_y: 1,
        particulas: 1100,
        maxRadius: 7,
        irregCor: true,
        decair: true,
        crescimento: true,
        freqSeed: 1.4,
        amplitudeSeed: 200,
        velocidade_xSeed: 3,
        velocidade_ySeed: 3,
        opacMax: 0.601,
        opacMin: 0.01,
        opacSeed: 90,
        corPct: 10
    }

    var estrelas = []
    init = function() {
        for(index = 0; index < configuracoes.particulas; index++) {
            estrelas[index] = new estrela()
            estrelas[index].init()
        }
    }

    var gui = new dat.GUI();
    gui.add(configuracoes, 'velocidade_x', -10.1, 10.1);
    gui.add(configuracoes, 'velocidade_y', 0.0, 10.111);
    gui.add(configuracoes, 'escala_y', -10.1, 10.1);
    gui.add(configuracoes, 'y_deslocarSeed', 0, 500).onChange(function (value) {
        init();
    })
    gui.add(configuracoes, 'y_centro', 0, 500).onChange(function (value) {
        init();
    })
    gui.add(configuracoes, 'maxRadius', 0.2, 100.1).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'decair').onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'corPct', 4, 100).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'crescimento').onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'irregCor').onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'particulas', 1, 9000).onChange(function (value) {
        init();
    })
    gui.add(configuracoes, 'freqSeed', 0.1, 30.1).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'amplitudeSeed', 1, 500).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'velocidade_xSeed', 1, 10).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'velocidade_ySeed', 1, 10).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'opacMax', 0.01, 1.00).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'opacMin', 0.01, 1.00).onChange(function (value) {
        init();
    });
    gui.add(configuracoes, 'opacSeed', 1, 100).onChange(function (value) {
        init();
    });

    gui.open();

    var deg2rad = function (angle) {
        return angle * .017453292519943295; // (angle / 180) * Math.PI;
    }

    var colorfreq = function (i) {
        var frequencia = .3;
        i = i % 32;
        var red = Math.ceil(Math.sin(frequencia * i + 0) * 127 + 128);
        var green = Math.ceil(Math.sin(frequencia * i + 2) * 127 + 128);
        var blue = Math.ceil(Math.sin(frequencia * i + 4) * 127 + 128);
        return "rgba(" + red + "," + green + "," + blue + "," + settings.alpha + ")";
    }

    init()
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

            if (estrelas[index].x > 998 || 
                (estrelas[index].params.vidaTempo < 0 && estrelas[index].params.opacity <= 0) ||
                (estrelas[index].y < (0 - configuracoes.maxRadius)) ||
                (estrelas[index].x < (0 - configuracoes.maxRadius)) || 
                (estrelas[index].y > (500 + configuracoes.maxRadius))) {
                
                estrelas[index] =  new estrela();
                estrelas[index].init()
                estrelas[index].params.x_deslocamento = (-1) * deslocamento
                estrelas[index].x -= Math.random() * 200
                estrelas[index].params.opacity = 0
            }
        }
    }) ()
})