// Variavel Global
var DIRECAO = {
    PARADO: 0,
    CIMA: 1,
    BAIXO: 2,
    ESQUERDA: 3,
    DIREITA: 4
}
var rodadas = [5, 5, 3, 3, 2]
var cores = ['#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6']
/// O objeto bola (Cubo quica para frente e para trás)
var Bola = {
    nova: function (incrementaVelocidade)  {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECAO.PARADO,
            moveY: DIRECAO.PARADO,
            velocidade: incrementaVelocidade || 9
        }
    }
}
// O objeto paddle (as duas linhas que se movem para cima e para baixo)
var Raquete = {
    nova: function (lado) {
        return {
            width: 18,
            height: 70,
            x: lado === 'esquerda' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            pontuacao: 0,
            mover: DIRECAO.PARADO,
            velocidade: 10
        }
    }
}

var Jogo = {
    inicializar: function() {
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')

        this.canvas.width = 1400
        this.canvas.height = 1000   

        this.canvas.style.width = (this.canvas.width / 2) + 'px'
        this.canvas.style.height = (this.canvas.height / 2) + 'px'

        this.jogador = Raquete.nova.call(this, 'esquerda')
        this.raquete = Raquete.nova.call(this, 'direita')
        this.bola = Bola.nova.call(this)

        this.raquete.velocidade = 8
        this.rodar = this.fim = false
        this.turn = this.raquete
        this.tempo = this.rodada = 0
        this.color = '#2c3e50'

        Pong.menu()
        Pong.escutar()
    },
    fimJogoMenu: function(texto) {
        // Muda o tamanho e a cor da fonte da tela
        Pong.context.font = '50px Courier New'
        Pong.context.fillStyle = this.color

        // Desenha o retângulo atrás do texto 'Pressione qualquer tecla para começar'.
        Pong.context.fillRect(
            Pong.canvas.width / 2 - 350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        )
        // Muda a cor da tela;
        Pong.context.fillStyle = '#ffffff'

        // Desenha o texto do menu final do jogo ('Fim de Jogo' e 'Vencedor')
        Pong.context.fillText(texto,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15)

        setTimeout(function() {
            Pong = Object.assign({}, Jogo)
            Pong.inicializar()
        }, 3000)
    },
    menu: function() {
        // Desenha todos os objetos Pong em seu estado atual
        Pong.desenhar()

        // Muda o tamanho e a cor da fonte da tela
        this.context.font = '50px Courier New'
        this.context.fillStyle = this.color

        // Desenha o retângulo atrás do texto 'Pressione qualquer tecla para começar'.
        this.context.fillRect(
            this.canvas.width / 2 - 350,
            this.canvas.height / 2 - 48,
            700,
            100
        )
        // Muda a cor da tela;
        this.context.fillStyle = '#ffffff'

        // Desenha o texto 'pressione qualquer tecla para começar'
        this.context.fillText('Pressione Qualquer Tecla Para Começar', 
        this.canvas.width / 2,
        this.canvas.height / 2 + 15)
    },
    // Atualiza todos os objetos (move o jogador, raquete, bola, incrementa a pontuação, etc.)
    atualizar: function() {
        if (!this.fim) {
            // Se a bola colidir com os limites delimitados - corrija as coordenadas x e y.
            if(this.bola.x <= 0) Pong._redefinirCaminho.call(this, this.raquete, this.jogador)
            if(this.bola.x >= this.canvas.width - this.bola.width) Pong._redefinirCaminho.call(this, this.jogador, this.raquete)
            if(this.bola.y <= 0) this.bola.moveY = DIRECAO.BAIXO
            if(this.bola.y >= this.canvas.height - this.bola.height) this.bola.moveY = DIRECAO.CIMA

            // Move o jogador se o valor jogador.mover foi atualizado por um evento de teclado
            if(this.jogador.mover === DIRECAO.CIMA) this.jogador.y -= this.jogador.velocidade
            else if(this.jogador.mover === DIRECAO.BAIXO) this.jogador.y += this.jogador.velocidade

            
            // No novo saque (início de cada turno) move a bola para o lado correto
            // e randomize a direção para adicionar algum desafio.
            if (Pong.__turnoAtrasoAcabou.call(this) && this.turn) {
                this.bola.moveX = this.turn === this.jogador ? DIRECAO.ESQUERDA : DIRECAO.DIREITA
                this.bola.moveY = [DIRECAO.CIMA, DIRECAO.BAIXO][Math.round(Math.random())]
                this.bola.y = Math.floor(Math.random() * this.canvas.height - 200) + 200
                this.turn = null
            }
            // Se o jogador colidir com os limites, atualize as coordenadas xey.
            if(this.jogador.y <= 0) this.jogador.y = 0
            else if(this.jogador.y >= (this.canvas.height - this.jogador.height)) this.jogador.y = (this.canvas.height - this.jogador.height) 

            // Move a bola na direção pretendida com base nos valores moveY e moveX
            if(this.bola.moveY === DIRECAO.CIMA) this.bola.y -= (this.bola.velocidade / 1.5)
            else if(this.bola.moveY === DIRECAO.BAIXO) this.bola.y += (this.bola.velocidade / 1.5)
            if(this.bola.moveX === DIRECAO.ESQUERDA) this.bola.x -= this.bola.velocidade
            else if(this.bola.moveX === DIRECAO.DIREITA) this.bola.x += this.bola.velocidade
            
            // Handle raquete (AI) movimento PARA CIMA e PARA BAIXO
            if(this.raquete.y > this.bola.y - (this.raquete.height / 2)) {
                if(this.bola.moveX === DIRECAO.DIREITA) this.raquete.y -= this.raquete.velocidade / 1.5
                else this.raquete.y -= this.raquete.velocidade / 4
            }
            if (this.raquete.y < this.bola.y - (this.raquete.height / 2)) {
                if(this.bola.moveX === DIRECAO.DIREITA) this.raquete.y += this.raquete.velocidade / 1.5
                else this.raquete.y += this.raquete.velocidade / 4
            }
            // Lidar com colisão de raquete rede (AI)
            if(this.raquete.y >= this.canvas.height - this.raquete.height) this.raquete.y =  this.canvas.height - this.raquete.height
            else if(this.raquete.y <=  0) this.raquete.y = 0

             // Lida com colisões jogador-bola
            if(this.bola.x - this.bola.width <= this.jogador.x && this.bola.x >= this.jogador.x - this.jogador.width) {
                if (this.bola.y <= this.jogador.y + this.jogador.height && this.bola.y + this.bola.height >= this.jogador.y) {
                    this.bola.x = (this.jogador.x + this.bola.width)
                    this.bola.moveX = DIRECAO.DIREITA

                    // beep1.play()
                }
            }
            // Lida com colisão bola-jogador
            if (this.bola.x - this.bola.width <= this.raquete.x && this.bola.x >= this.raquete.x - this.raquete.width) {
                if (this.bola.y <= this.raquete.y + this.raquete.height && this.bola.y + this.bola.height >= this.raquete.y) {
                    this.bola.x = (this.raquete.x - this.bola.width)
                    this.bola.moveX = DIRECAO.ESQUERDA

                    // beep1.play()
                }
            }
        }
       
        // Manipula o final da transição de rodada
        // Verifica se o jogador ganhou a rodada.
        if (this.jogador.pontuacao === rodadas[this.rodada]) {
            // Verifica se há mais rodadas/níveis restantes e exibe a tela de vitória se
            // não há.
            if (!rodadas[this.rodada + 1]) {
                this.fim = true
                setTimeout(function() {
                    Pong.fimJogoMenu('Vencedor')
                }, 1000)
            } else {
                // Se houver outra rodada, redefina todos os valores e incremente o número da rodada.
                this.color = this._gerarRodadaCor()
                this.jogador.pontuacao = this.raquete.pontuacao = 0
                this.jogador.velocidade += 0.5 
                this.raquete.velocidade += 1
                this.bola.velocidade += 1
                this.rodada += 1

                // beep3.play()
            }
        }
        // Verifica se a raquete/IA ganhou a rodada.
        else if (this.raquete.pontuacao === rodadas[this.rodada]) {
            this.fim = true 
            setTimeout(function() {
                Pong.fimJogoMenu('Fim de Jogo')
            }, 1000)
        }
    },
    // Desenha os objetos para o elemento canvas
    desenhar: function() {
        // limpa o canvas
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        )
        // Define o estilo de preenchimento para preto
        this.context.fillStyle = this.color

        // desenha o fundo
        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        )

        // Defina o estilo de preenchimento para branco (Para as raquetes e a bola)
        this.context.fillStyle = '#ffffff'

        // desenha o jogador
        this.context.fillRect(
            this.jogador.x,
            this.jogador.y,
            this.jogador.width,
            this.jogador.height
        )
        // desenha a raquete
        this.context.fillRect(
            this.raquete.x,
            this.raquete.y,
            this.raquete.width,
            this.raquete.height
        )
        // desenha a bola
        if (Pong.__turnoAtrasoAcabou.call(this)) {
            this.context.fillRect(
                this.bola.x,
                this.bola.y,
                this.bola.width,
                this.bola.height
            )
        }
        // Desenha a rede (Linha no meio)
        this.context.beginPath()
        this.context.setLineDash([7, 15])
        this.context.moveTo((this.canvas.width / 2 ), this.canvas.height - 140)
        this.context.lineTo((this.canvas.width / 2), 140)
        this.context.lineWidth = 10
        this.context.strokeStyle = '#ffffff'
        this.context.stroke()

        // Define a fonte de tela padrão e alinha-a ao centro
        this.context.font = '100px Courier New'
        this.context.textAlign = 'center'

        // Desenha a pontuação dos jogadores (esquerda)
        this.context.fillText(
            this.jogador.pontuacao.toString(),
            (this.canvas.width / 2) - 300,
            200
        )
        // Desenha a pontuação dos jogadores (direita)
        this.context.fillText(
            this.raquete.pontuacao.toString(),
            (this.canvas.width / 2) + 300,
            200
        )
        // Muda o tamanho da fonte para o texto da pontuação central
        this.context.font = '30px Courier New'

        // Desenha a pontuação vencedora (centro)
        this.context.fillText(
            'Rodada ' + (Pong.rodada + 1),
            (this.canvas.width / 2),
            35
        )
        // Muda o tamanho da fonte para o valor da pontuação central
        this.context.font = '40px Courier'

        // Desenha o número da rodada atual
        this.context.fillText(
            rodadas[Pong.rodada] ? rodadas[Pong.rodada] : rodadas[Pong.rodada - 1],
            (this.canvas.width / 2),
            100
        )
    },
    loop: function() {
        Pong.atualizar()
        Pong.desenhar()

        // Se o jogo não acabou, desenhe o próximo quadro.
        if(!Pong.fim) requestAnimationFrame(Pong.loop)
    },
    escutar: function() {
        document.addEventListener('keydown', function(chave) {
            // Manipule a função 'Pressione qualquer tecla para começar' e inicie o jogo.
            if (Pong.rodar === false) {
                Pong.rodar =  true
                window.requestAnimationFrame(Pong.loop)
            }
            // Manipula os eventos de seta para cima e tecla w
            if (chave.keyCode === 38 || chave.keyCode === 87) Pong.jogador.mover = DIRECAO.CIMA
    
            // Manipula os eventos de seta para baixo e tecla s
            if(chave.keyCode === 40 || chave.keyCode === 83) Pong.jogador.mover = DIRECAO.BAIXO
        })
        // Impede o jogador de se mover quando não há teclas sendo pressionadas.
        document.addEventListener('keyup', function(chave) {
            Pong.jogador.mover = DIRECAO.PARADO
        })
    },
    // Reinicializa a localização da bola, o jogador vira e define um atraso antes do início da próxima rodada.
    _redefinirCaminho: function(vitoria, derrota) {
        this.bola = Bola.nova.call(this, this.bola.velocidade)
        this.turn = derrota
        this.tempo = (new Date()).getTime()

        vitoria.pontuacao++

        // beep2.play()
    },
    __turnoAtrasoAcabou: function() {
        // Espera que um atraso tenha passado após cada turno.
        return ((new Date()).getTime() - this.tempo >= 1000)
    },
    // Seleciona uma cor aleatória como fundo de cada nível/rodada.
    _gerarRodadaCor: function() {
        var novaCor = cores[Math.floor(Math.random() * cores.length)]
        if(novaCor === this.color) return Pong._gerarRodadaCor()

        return novaCor  
    }
}

var Pong = Object.assign({}, Jogo)
Pong.inicializar()