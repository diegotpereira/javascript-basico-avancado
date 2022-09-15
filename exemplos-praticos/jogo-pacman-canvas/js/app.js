'use strict'

const FANTASMAS = {
    INKY: 'inky',
	BLINKY: 'blinky',
	PINKY: 'pinky',
	CLYDE: 'clyde'
}

// Constantes globais 
const PONTOS_PILHA_ENERGIA = 50
const FANTASMA_PONTOS = 100
const PILULA_PONTOS = 10

function geral () {

    var canvas
    var context
    var canvas_paredes, context_paredes
    var jogo

    var inky, blinky, clyde, pinky;

    var mapConfig = "data/map.json";

    function construirParede(context, gridX, gridY, width, height) {

        width = width * 2 - 1;
        height = height * 2 -1;
        context.fillRect(
            pacman.radius / 2 + gridX * 2 *
            pacman.radius, pacman.radius / 2 + gridY * 2 *
            pacman.radius, width * pacman.radius, height *
            pacman.radius
        )
    }

    function entre(x, min, max) {
        return x >= min && x <= max
    }

    function Timer() {
        console.log("Temporizador");

        this.tempo_diferente = 0
        this.tempo_iniciar = 0
        this.tempo_parar = 0

        this.iniciar = function() {
            this.tempo_iniciar = new Date().getTime()
        }
        this.parar = function() {
            this.tempo_parar = new Date().getTime()
            this.tempo_diferente += this.tempo_parar - this.tempo_iniciar
            this.tempo_parar = 0
            this.tempo_iniciar = 0
        }
        this.redefinir = function() {
            this.tempo_diferente = 0
            this.tempo_iniciar = 0
            this.tempo_parar = 0
        }
    }

    function Jogo() {
        
        this.temporizador = new Timer()

        this.taxaAtualizacao = 33

        this.iniciado = false
        this.pausar = true;
        this.fimdejogo = false
        this.pontuacao = new Pontuacao()
        this.map   
        // numero de pilulas
        this.pilulaContar
        this.nivel = 1
        this.recarregueNivel = function(h) {
            $(h).html("Nivel: " + this.nivel)
        }
        this.canvas = $('#meuCanvas').get(0);
        this.corParede = "Blue"
        this.width = this.canvas.width
        this.height = this.canvas.height

        // Estados globais da pilula
        this.pilulaTamanho = 3
        this.pilulaPoderTamanhoMin = 2
        this.pilulaPoderTamanhoMax = 6
        this.pilulaPoderTamanhoAtual = this.pilulaPoderTamanhoMax 

        
        // Estados fantasmas globais
        this.fantasmaAssustado = false
        this.fantasmaAssustadoTemporizador = 240
        
        // 0 = Dispersão, 1 = Perseguição
        this.fantasmaModo = 0

        // decrementa cada execução de animacaoLoop
        this.fantasmaModoTemporizador = 200

        // padrão global para velocidade fantasma
        this.fantasmaVelocidadeNormal = (this.nivel > 4 ? 3 : 2)

        // padrão global para velocidade fantasma quando ofuscado
        this.fantasmaVelocidadeOfuscado = 2

        // funções do jogo
        this.iniciarFantasmaAssustado = function() {

            console.log("");

            this.fantasmaAssustado = true 
            this.fantasmaAssustadoTemporizador = 240

            inky.deslumbrar()
            pinky.deslumbrar()
            blinky.deslumbrar()
            clyde.deslumbrar()
        }

        this.finalFantasmaAssustado = function() {
            this.fantasmaAssustado = false 

            inky.undeslumbrar()
            pinky.undeslumbrar()
            blinky.undeslumbrar()
            clyde.undeslumbrar()
        }

        this.verifiqueModoFantasma = function() {
            
            if (this.fantasmaAssustado) {
                
                this.fantasmaAssustadoTemporizador--

                if (this.fantasmaAssustadoTemporizador === 0) {
                    
                    this.finalFantasmaAssustado()
                    this.fantasmaAssustadoTemporizador = 240
                }
            }
            // sempre diminuir o temporizador fantasmaModo
            this.fantasmaModoTemporizador--

            if (this.fantasmaModoTemporizador === 0 && jogo.nivel > 1) {
                this.fantasmaModo ^= 1
                this.fantasmaModoTemporizador = 200 + this.fantasmaModo * 450

                console.log("fantasmaModo = " + this.fantasmaModo);

                jogo.construirParedes()
            }
        }

        this.getMapaConteudo = function(x, y) {
            var maxX = jogo.width / 30 - 1
            var maxY = jogo.height / 30 - 1

            if(x < 0) x = maxX + x 
            if(x > maxX) x = x - maxX

            if(y < 0) y = maxY + y
            if(y > maxY) y = y - maxY

            return this.map.posY[y].posX[x].type
        }

        this.redefinir = function() {
            this.pontuacao.set(0)
            this.pontuacao.refresh('.pontuacao')
            pacman.vidas = 3
            jogo.nivel = 1
            this.recarregueNivel('.nivel')
        }

        this.novoJogo = function() {
            var r = confirm('Tem certeza de que deseja reiniciar?')

            if (r) {
                console.log('novo jogo');
                this.init(0)
                this.forcarRetomar()
            }
        }

        /* Funções UI */
        this.desenharCoracoes = function (contar) {

            var html = ""

            for(var i = 0; i < contar; i++) {

                // html += "<img src='img/heart.png'>"
                html += " <img src='img/heart.png'>";
            }
        
            $(".vidas").html("Vidas: " + html);
        }

        this.exibirMensagem =  function(titulo, texto) {
            $('#canvas-overlay-container').fadeIn(200)
            if($('.controles').css('display') != 'none') $('.controles').slideToggle(200)
            $('#canvas-overlay-content #titulo').text(titulo)
            $('#canvas-overlay-content #text').html(texto)
        }

        this.pausarEhExibirMensagem = function(titulo, texto) {
            this.temporizador.parar()
            this.pausar = true
            this.exibirMensagem(titulo, texto)

        }

        this.fecharMensagem = function() {
            $('#canvas-overlay-container').fadeOut(200)
            $('.controles').slideToggle(200)
        }

        // jogo controles
        this.forceIniciarLoopAnimacao = function() {

            this.temporizador.iniciar()

            this.pausar = false;
            this.iniciado = true;
            this.fecharMensagem()

            animacaoLoop();
        }

        this.forcePausa = function() {
            this.temporizador.parar()
            this.pausarEhExibirMensagem("Pausa", "Clique para retornar")
        }

        this.forcarRetomar = function() {
            this.fecharMensagem()
            this.pausar = false
            this.temporizador.iniciar()
        }

        this.pausaRetomar = function() {
            if (this.fimdejogo) {
                console.log('Não é possível pausar/retomar. fimdejogo definido como verdadeiro.');

                return
            }
            if(!this.iniciado) {
                this.forceIniciarLoopAnimacao()

            } else if (this.pausar) {
                this.forcarRetomar()

            } else {
                this.pausarEhExibirMensagem('Pausar', 'Clique para retomar')
            }
        }

        this.carregarConfiguracaoMapa = async () => {

            console.log("carregarConfiguracaoMapa...");

            return new Promise((resolve, reject) => {

                $.ajax({
                    url: mapConfig,
                    beforeSend: function(xhr) {

                        if(xhr.overrideMimeType) xhr.overrideMimeType('application/json')
                    },
                    dataType: 'json',
                    success: (data) => {

                        console.log('configuração mapa carregando');
                        jogo.map = data 
                        resolve(data)
                    },
                    error: (response) => {
                        console.error('erro ao buscar a configuração do mapa')
                        reject(response)
                    }
                })
            })
        }
        
        this.getContagemPilulas = () => {

            var temp = 0;

            $.each(this.map.posY, function(i, item) {
                $.each(this.posX, function() {

                    if (this.type == "pilula") {
                        temp++
                    }
                })
            })
            return temp
        }

        this.init = async (state) => {

            console.log("iniciando jogo... " + state)

            // obter mapa de níveis
            this.map = await this.carregarConfiguracaoMapa()
            this.pilulaContar = this.getContagemPilulas()

            if (state === 0) {
                this.temporizador.redefinir()
                jogo.redefinir()
            }

            console.log(state);

            pacman.redefinir()

            jogo.desenharCoracoes(pacman.vidas)

            this.fantasmaAssustado = false
            this.fantasmaAssustadoTemporizador = 240

            // 0 = Dispersão, 1 = Perseguição
            this.fantasmaModo = 0

            // decrementa cada execução de animacaoLoop
            this.fantasmaModoTemporizador = 200

            // inicializa Fantasmas, evita inundação de memória
            if(pinky === null || pinky === undefined) {
                pinky = new Fantasma(FANTASMAS.PINKY, 7, 5, 'img/pinky.svg', 2, 2)
                inky = new Fantasma(FANTASMAS.INKY, 8, 5, 'img/inky.svg', 13, 11)
                blinky = new Fantasma(FANTASMAS.BLINKY, 9, 5, 'img/blinky.svg', 13, 0)
                clyde = new Fantasma(FANTASMAS.CLYDE, 10, 5, 'img/clyde.svg', 2, 11)
            } else {
                pinky.redefinir()
                inky.redefinir()
                blinky.redefinir()
                clyde.redefinir()
            }
            blinky.iniciar()
            inky.iniciar()
            pinky.iniciar()
            clyde.iniciar()
        }

        this.verifiqueParaSubirNivel = function() {
            if ((this.pilulaContar === 0) && jogo.iniciado) {
                this.proxNivel()
            }
        }

        this.acabou = function() {
            this.pausar = true
            this.fimdejogo = true
        }

        this.proxNivel = function() {
            console.debug('proxNivel: atual, final', this.nivel, FINAL_NIVEL)
            if (this.nivel === FINAL_NIVEL) {
                
                console.log('proximo nivel, ' + FINAL_NIVEL + ', final jogo');
                jogo.acabou(true)
                
            } else {
                this.nivel++
                console.log("Nivel ", jogo.nivel);
                jogo.pausarEhExibirMensagem("Nivel ", jogo.nivel, this.getNivelTitulo() + "<br />(clique para continuar!)")
                jogo.recarregueNivel('.nivel')
                this.init(1)
            }
        }

        this.paraPixelPos = function(gridPos) {
            return gridPos * 30
        }

        // Iniciar Paredes Pré-Construídas
        
        this.construirParedes = function() {

            if(this.fantasmaModo === 0)
               jogo.corParede = 'blue'
            else 
               jogo.corParede = 'red'

            canvas_paredes = document.createElement('canvas')
            canvas_paredes.width = jogo.canvas.width
            canvas_paredes.height = jogo.canvas.height
            context_paredes = canvas_paredes.getContext('2d')

            context_paredes.fillStyle = jogo.corParede;
            context_paredes.strokeStyle = jogo.corParede

            // exterior horizontal
            construirParede(context_paredes, 0, 0, 18, 1)   
            construirParede(context_paredes, 0, 12, 18, 1)

            // exterior vertical
            construirParede(context_paredes, 0, 0, 1, 6);
            construirParede(context_paredes, 0, 7, 1, 6);
            construirParede(context_paredes, 17, 0, 1, 6);
            construirParede(context_paredes, 17, 7, 1, 6);

            // base fantasma
			construirParede(context_paredes, 7, 4, 1, 1);
			construirParede(context_paredes, 6, 5, 1, 2);
			construirParede(context_paredes, 10, 4, 1, 1);
			construirParede(context_paredes, 11, 5, 1, 2);
			construirParede(context_paredes, 6, 6, 6, 1);

			// porta base fantasma
			context_paredes.fillRect(8 * 2 * pacman.radius, pacman.radius / 2 + 4 * 2 * pacman.radius + 5, 4 * pacman.radius, 1);

            // blocos únicos
            construirParede(context_paredes, 4, 0, 1, 2);
			construirParede(context_paredes, 13, 0, 1, 2);

            construirParede(context_paredes, 2, 2, 1, 2);
			construirParede(context_paredes, 6, 2, 2, 1);
			construirParede(context_paredes, 15, 2, 1, 2);
			construirParede(context_paredes, 10, 2, 2, 1);

            construirParede(context_paredes, 2, 3, 2, 1);
			construirParede(context_paredes, 14, 3, 2, 1);
			construirParede(context_paredes, 5, 3, 1, 1);
			construirParede(context_paredes, 12, 3, 1, 1);
			construirParede(context_paredes, 3, 3, 1, 3);
			construirParede(context_paredes, 14, 3, 1, 3);

			construirParede(context_paredes, 3, 4, 1, 1);
			construirParede(context_paredes, 14, 4, 1, 1);

			construirParede(context_paredes, 0, 5, 2, 1);
			construirParede(context_paredes, 3, 5, 2, 1);
			construirParede(context_paredes, 16, 5, 2, 1);
			construirParede(context_paredes, 13, 5, 2, 1);

			construirParede(context_paredes, 0, 7, 2, 2);
			construirParede(context_paredes, 16, 7, 2, 2);
			construirParede(context_paredes, 3, 7, 2, 2);
			construirParede(context_paredes, 13, 7, 2, 2);

			construirParede(context_paredes, 4, 8, 2, 2);
			construirParede(context_paredes, 12, 8, 2, 2);
			construirParede(context_paredes, 5, 8, 3, 1);
			construirParede(context_paredes, 10, 8, 3, 1);

			construirParede(context_paredes, 2, 10, 1, 1);
			construirParede(context_paredes, 15, 10, 1, 1);
			construirParede(context_paredes, 7, 10, 4, 1);
			construirParede(context_paredes, 4, 11, 2, 2);
			construirParede(context_paredes, 12, 11, 2, 2);
        }
    }

    jogo = new Jogo()

    function Pontuacao(){
        this.pontuacao = 0
        this.set =  function(i) {
            this.pontuacao = i
        }
        this.add = function(i) {
            this.pontuacao += i
        }
        this.refresh = function(h){
            $(h).html("Pontuação: " + this.pontuacao)
        }
    }

    function Direcao(nome, angulo1, angulo2, dirX, dirY) {
        this.nome = nome 
        this.angulo1 = angulo1
        this.angulo2 = angulo2
        this.dirX = dirX
        this.dirY = dirY
        this.equals = function(dir) {
            return JSON.stringify(this) == JSON.stringify(dir)
        }
    }

    // Objetos de direção
    var up = new Direcao("up", 1.75, 1.25, 0, -1); // UP
	var left = new Direcao("left", 1.25, 0.75, -1, 0); // LEFT
	var down = new Direcao("down", 0.75, 0.25, 0, 1); // DOWN
	var right = new Direcao("right", 0.25, 1.75, 1, 0); // RIGHT

    // direção de Sentinela
    function direcaodeSentinela() {
        this.dir = null
        this.set = function(dir) {
            this.dir = dir 
        }
        this.get = function() {
            return this.dir
        }
    }

    // Objeto fantasma em notação de construtor
    function Fantasma(nome, gridPosX, gridPosY, imagem, gridBaseX, gridBaseY) {
        this.nome = nome 
        this.posX = gridPosX * 30 
        this.posY = gridPosY * 30
        this.iniciarPosX = gridPosX * 30
        this.iniciarPosY = gridPosY * 30 
        this.gridBaseX = gridBaseX
        this.gridBaseY = gridBaseY
        this.velocidade = jogo.fantasmaVelocidadeNormal
        this.imagens = JSON.parse(
            '{"normal" : {' +
			`"${FANTASMAS.INKY}" : "0",` +
			`"${FANTASMAS.PINKY}" : "1",` +
			`"${FANTASMAS.BLINKY}" : "2",` +
			`"${FANTASMAS.CLYDE}" : "3"` +
			'},' +
			'"frightened1" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""},' +
			'"frightened2" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""},' +
			'"morto" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""}}'
        );

        this.imagem = new Image()
        this.imagem.src = imagem
        this.fantasmaCasa = true 
        this.deslumbrado = true 
        this.morto = false 
        
        this.deslumbrar = function() {
            this.alterarVelocidade(jogo.fantasmaVelocidadeOfuscado)

            if(this.posX > 0) this.posX = this.posX - this.posX % this.velocidade
            if(this.posY > 0) this.posY = this.posY -  this.posY % this.velocidade

            this.deslumbrado = true 
        }

        this.undeslumbrar = function() {

            if(!this.morto) this.alterarVelocidade(jogo.fantasmaVelocidadeOfuscado)

            if(this.posX > 0) this.posX = this.posX - this.posX % this.velocidade
            if(this.posY > 0) this.posY = this.posY -  this.posY % this.velocidade

            this.deslumbrado = false 
        }
        this.deslumbrarImg = new Image()
        this.deslumbrarImg.src = 'img/dazzled.svg'

        this.deslumbrarImg2 = new Image()
        this.deslumbrarImg2.src = 'img/dazzled2.svg'

        this.mortoImg = new Image()
        this.mortoImg.src = 'img/dead.svg'

        this.direcao = right
        this.radius = pacman.radius

        this.draw = function(context) {
            if (this.morto) {
                context.drawImage(this.mortoImg, this.posX, this.posY, 2 * this.radius, 2 * this.radius)

            } else if (this.deslumbrado) {
                if (pacman.modoAnimalTemporizador < 50 && pacman.modoAnimalTemporizador % 8 > 1) {
                    context.drawImage(this.deslumbrarImg2, this.posX, this.posY, 2 * this.radius, 2 * this.radius)

                } else {
                    context.drawImage(this.deslumbrarImg, this.posX, this.posY, 2 * this.radius, 2 * this.radius)
                }
            } else context.drawImage(this.imagem, this.posX, this.posY, 2 * this.radius, 2 * this.radius)
        }
        this.getCentroX = function() {
            return this.posX + this.radius
        }
        this.getCentroY = function() {
            return this.posY + this.radius
        }
        this.mover = function() {

            this.verifiqueMudancaDirecao()
            this.verifiqueColisao()
            // sai da Casa Fantasma
            if(this.fantasmaCasa == true) {
                
                // Clyde não começa a perseguir antes de 2/3 de todas as pílulas serem consumidas e se o nível for < 4
                if (this.nome == FANTASMAS.CLYDE) {
                    if((jogo.nivel < 4) || ((jogo.pilulaContar > 104 / 3))) this.parar = true
                    else this.parar = false
                }

                // Inky começa após 30 pílulas e somente a partir do terceiro nível
                if (this.nome == FANTASMAS.INKY) {
                    if((jogo.nivel < 3) || ((jogo.pilulaContar > 104 - 30))) this.parar = true 
                    else this.parar = false
                }

                if((this.getGradePosY() == 5) && this.naGrade())  {
                    if((this.getGradePosX() == 7)) this.setDirecao(right)
                    if((this.getGradePosX() == 8) || this.getGradePosX() == 9) this.setDirecao(up)
                    if((this.getGradePosX() == 10)) this.setDirecao(left)
                }
                if((this.getGradePosY() == 4) && ((this.getGradePosX() == 8) || (this.getGradePosX() == 9)) && this.naGrade()) {
                    console.log("fantasmaCasa -> false");
                    this.fantasmaCasa = false
                }
            }
            if (!this.parar) {
                    
                // mover
                this.posX += this.velocidade * this.dirX
                this.posY += this.velocidade * this.dirY

                // Verifique se está fora da tela
                if(this.posX >= jogo.width - this.radius) this.posX = this.velocidade - this.radius
                if(this.posX <= 0 - this.radius) this.posX = jogo.width - this.velocidade - this.radius
                if(this.posY >= jogo.height - this.radius) this.posY =  this.velocidade - this.radius
                if(this.posY <= 0 -  this.radius) this.posY = jogo.height - this.velocidade - this.radius
            }
        }
        this.verifiqueColisao = function() {

            // Verifique de volta à página inicial
            if(this.morto && (this.getGradePosX() == this.iniciarPosX / 30) && (this.getGradePosY() == this.iniciarPosY / 30)) this.redefinir()
            else {

                // Verifique Colisão Fantasma / Pacman
                if ((entre(pacman.getCentroX(), this.getCentroX() - 10, this.getCentroX() + 10)) && 
                    (entre(pacman.getCentroY(), this.getCentroY() - 10, this.getCentroY() + 10))) {
                    
                        if ((!this.deslumbrado) && (!this.morto)) {
                            pacman.matar()
                        } else {
                            this.matar()
                        }
                }
            }
        }
        this.getProximaDirecao = function() {
            // obter o próximo campo
            var pX = this.getGradePosX()
            var pY = this.getGradePosY() 

            jogo.getMapaConteudo(pX, pY)

            // pega o alvo
            if (this.morto) {
                
                var tX = this.iniciarPosX / 30
                var tY = this.iniciarPosY / 30

            } else if (jogo.fantasmaModo == 0) {
                var tX = this.gradeBaseX
                var tY = this.gradeBaseY

            } else if(jogo.fantasmaModo == 1) {

                switch(this.nome) {

                    // alvo: 4 à frente e 4 à esquerda do pacman
                    case FANTASMAS.PINKY:
                        var pdir = pacman.direcao
                        var pdirX = pdir.dirX == 0 ? -pdir.dirY : pdir.dirX
                        var pdirY = pdir.dirY == 0 ? -pdir.dirX : pdir.dirY

                        var tX = (pacman.getGradePosX() + pdirX * 4) % (jogo.width / pacman.radius + 1)
                        var tY = (pacman.getGradePosY() + pdirY * 4) % (jogo.height / pacman.radius + 1)
                        break;

                    case FANTASMAS.BLINKY:
                        var tX = pacman.getGradePosX()
                        var tY = pacman.getGradePosY()
                        break;

                    case FANTASMAS.INKY:
                        var tX = pacman.getGradePosX() + 2 * pacman.direcao.dirX
                        var tY = pacman.getGradePosY() + 2 * pacman.direcao.dirY

                        var vX = tX - blinky.getGradePosX()
                        var vY = tY - blinky.getGradePosY()

                        // Math.abs retorna o valor absoluto de um número "x"
                        tX = Math.abs(blinky.getGradePosX() + vX * 2)
                        tY = Math.abs(blinky.getGradePosY() + vY * 2)
                        break;

                    case FANTASMAS.CLYDE:
                        var tX = pacman.getGradePosX()
                        var tY = pacman.getGradePosY()
                        
                        // Math.sqrt retorna a raiz quadrada de um número (x)  // Math.pow  retorna a base elevada ao expoente power
                        var dist = Math.sqrt(Math.pow((pX - tX), 2) + Math.pow((pY - tY), 2))

                        if (dist < 5) {
                            tX = this.gradeBaseX
                            tY = this.gradeBaseY
                        }
                        break;
                }
            }
            // var oppDir = this.obterDirecaoOposta();
            var dirs = [{}, {}, {}, {}]

            dirs[0].campo = jogo.getMapaConteudo( pX, pY -1)
            dirs[0].dir = up
            dirs[0].distancia = Math.sqrt(Math.pow((pX - tX), 2) + Math.pow((pY - 1 - tY), 2))

            dirs[1].campo = jogo.getMapaConteudo( pX, pY + 1)
            dirs[1].dir = down
            dirs[1].distancia = Math.sqrt(Math.pow((pX - tX), 2) + Math.pow((pY + 1 - tY), 2))

            dirs[2].campo = jogo.getMapaConteudo( pX + 1, pY)
            dirs[2].dir = right
            dirs[2].distancia = Math.sqrt(Math.pow((pX + 1 - tX), 2) + Math.pow((pY - tY), 2))

            dirs[3].campo = jogo.getMapaConteudo( pX - 1, pY)
            dirs[3].dir = left
            dirs[3].distancia = Math.sqrt(Math.pow((pX - 1 - tX), 2) + Math.pow((pY - tY), 2))

            // Ordena possíveis direções por distância
            function comparar(a, b) {
                if(a.distancia < b.distancia)
                return - 1

                if(a.distancia > b.distancia)
                return 1

                return 0
            }
            var dirs2 = dirs.sort(comparar)

            var r = this.dir 

            var j

            if (this.morto) {
                
                for(var i = dirs2.length - 1; i >= 0; i--) {
                    if ((dirs2[i].campo != "muro") && !(dirs2[i].dir.equals(this.obterDirecaoOposta()))) {
                        r = dirs2[i].dir
                    }
                }
            } else {
                for(var i = dirs2.length - 1; i >= 0; i--) {
                    if ((dirs2[i].campo != "muro") && (dirs2[i].campo != "porta") && !(dirs2[i].dir.equals(this.obterDirecaoOposta()))) {
                        r = dirs2[i].dir 
                    }
                }
            }
            this.direcaodeSentinela.set(r)

            return r
        }
        this.redefinir = function() {
            this.morto = false
            this.posX = this.iniciarPosX
            this.posY = this.iniciarPosY
            this.fantasmaCasa = true 
            this.deslumbrar()
        }
        this.matar = function() {
            if (!this.morto) {
                jogo.pontuacao.add(FANTASMA_PONTOS)
                this.morto = true 
                this.alterarVelocidade(jogo.fantasmaVelocidadeNormal)
            }
        }
        this.alterarVelocidade = function(s) {
            // ajusta gradePosicao para nova velocidade
            this.posX = Math.round(this.posX / s) * s
            this.posY = Math.round(this.posY / s) * s
            this.velocidade = s
        }
    }
    Fantasma.prototype = new Figure()

      // Super Classe para Pacman e Fantasmas
      function Figure() {

        this.posX
        this.posY 
        this.velocidade
        this.dirX = right.dirX 
        this.dirY = right.dirY 
        this.direcao 
        this.parar = true
        this.direcaodeSentinela = new direcaodeSentinela()

        this.getProximaDirecao = function() {
            console.log("Figura getProximaDirecao");
        }
        this.verifiqueMudancaDirecao = function() {
            if(this.naGrade() && (this.direcaodeSentinela.get() == null)) this.getProximaDirecao()
            if ((this.direcaodeSentinela.get() != null) && this.naGrade()) { 
                this.setDirecao(this.direcaodeSentinela.get())
                this.direcaodeSentinela.set(null)
            }
        }
        this.naGrade = function() {
            if((this.posX % (2 * this.radius) === 0) && (this.posY % (2 * this.radius) === 0)) return true
            return false
        }
        this.obterDirecaoOposta = function() {
            if(this.direcao.equals(up)) return down
            else if(this.direcao.equals(down)) return up 
            else if(this.direcao.equals(right)) return left 
            else if(this.direcao.equals(left)) return right
        }
        this.getGradePosX = function() {
            return (this.posX - (this.posX % 30)) / 30
        }
        this.getGradePosY = function() {
            return (this.posY - (this.posY % 30)) / 30
        }
        this.setDirecao = function(dir) {
            this.dirX = dir.dirX
            this.dirY = dir.dirY
            this.angulo1 = dir.angulo1
            this.angulo2 = dir.angulo2
            this.direcao = dir
        }
        this.mover = function(){
            if (!this.parar) {
                
                this.posX += this.velocidade * this.dirX
                this.posY += this.velocidade * this.dirX

                // 
                if(this.posX >= jogo.width - this.radius) 
                   this.posX = this.velocidade - this.radius

                if(this.posX <= 0 - this.radius) 
                   this.posX = jogo.width - this.velocidade - this.radius

                if(this.posY >= jogo.height - this.radius) 
                   this.posY = this.velocidade - this.radius

                if(this.posX <= 0 - this.radius) 
                   this.posY = jogo.height - this.velocidade - this.radius
            }
        }
        this.parar = function() {
            this.parar = true
        }
        this.iniciar = function() {
            this.parar = false
        }
    }

    function pacman() {

        this.radius = 15
        this.posX = 0
        this.posY = 6 * 2 * this.radius 
        this.velocidade = 5
        this.angulo1 = 0.25
		this.angulo2 = 1.75
        this.boca = 1
        this.dirX = right.dirX
		this.dirY = right.dirY
        this.vidas = 3
        this.presoX = 0
        this.presoY = 0
        this.congelados = false

        this.congelar = function() {
            this.congelados = true 
        }
        this.descongelar = function() {
            this.congelados = false
        }
        this.getCentroX = function() {
            return this.posX + this.radius
        }

        this.getCentroY = function() {
            return this.posY + this.radius
        }

        this.direcaodeSentinela = new direcaodeSentinela()

        this.direcao = right

        this.modoAnimal = false 
        this.modoAnimalTemporizador = 0

        this.verifiqueColisoes = function() {

            if ((this.presoX == 0) && (this.presoY == 0) && this.congelados == false) {
                
                // Obtém a posição da grade do Pac
                var gradeX = this.getGradePosX()
                var gradeY = this.getGradePosY()
                var gradeACabecalhoX = gradeX
                var gradeACabecalhoY = gradeY

                var campo = jogo.getMapaConteudo(gradeX, gradeY)

                // obtém o campo 1 à frente para verificar colisões de parede
                if((this.dirX == 1) && (gradeACabecalhoX < 17)) gradeACabecalhoX += 1
                if((this.dirY == 1) && (gradeACabecalhoY < 12)) gradeACabecalhoY += 1

                var campoACabecalho = jogo.getMapaConteudo(gradeACabecalhoX, gradeACabecalhoY)

                // Verifique a colisão do comprimido
                if ((campo === "pilula") || (campo === "pilulaPoder")) {
                    
                    if (((this.dirX == 1) && (entre(this.posX, jogo.paraPixelPos(gradeX) + this.radius - 5, jogo.paraPixelPos(gradeX + 1)))) ||
                        ((this.dirX == -1) && (entre(this.posX, jogo.paraPixelPos(gradeX), jogo.paraPixelPos(gradeX) + 5))) ||
                        ((this.dirY == 1) && (entre(this.posY, jogo.paraPixelPos(gradeY), this.radius - 5, jogo.paraPixelPos(gradeY + 1)))) ||
                        ((this.dirY == -1) && (entre(this.posY, jogo.paraPixelPos(gradeY, jogo.paraPixelPos(gradeY) + 5))) ||
                    (campoACabecalho == "muro"))) {
                        
                        var s 

                        if (campo === "pilulaPoder") {
                            
                            s = PONTOS_PILHA_ENERGIA
                            this.habilitarModoAnimal()
                            jogo.iniciarFantasmaAssustado()

                        } else {

                            s= PILULA_PONTOS
                            jogo.pilulaContar--
                        }
                        jogo.map.posY[gradeY].posX[gradeX].type = "null"
                        jogo.pontuacao.add(s)
                    }
                }

                // Verifique a colisão da parede
                if ((campoACabecalho === "muro") || (campoACabecalho === "porta")) {
                    
                    this.presoX = this.dirX
                    this.presoY = this.dirY

                    pacman.parar()

                    // sair da parede
                    if((this.presoX == 1) && ((this.posX % 2 * this.radius) != 0)) this.posX -= 5
                    if((this.presoY == 1) && ((this.posY % 2 * this.radius) != 0)) this.posY -= 5
                    if(this.presoX == -1) this.posX += 5
                    if(this.presoY == -1) this.posY += 5
                }
            }
        }

        this.verifiqueMudancaDirecao = function() {

            if (this.direcaodeSentinela.get() != null) {
                
                console.groupCollapsed('verifiqueMudancaDirecao')

                if ((this.presoX == 1) && this.direcaodeSentinela.get() == right) this.direcaodeSentinela.set(null)
                else {

                    // redefinir eventos preso
                    this.presoX = 0
                    this.presoY = 0

                    // permite apenas mudanças de direção dentro da grade
                    if ((this.naGrade)) {
                        
                        // verifica se é possível mudar de direção sem travar
                        console.debug("x: " + this.getGradePosX() + " + " + this.direcaodeSentinela.get().dirX)
                        console.debug("y: " + this.getGradePosY() + " + " + this.direcaodeSentinela.get().dirY)

                        var x = this.getGradePosX() + this.direcaodeSentinela.get().dirX
                        var y = this.getGradePosY() + this.direcaodeSentinela.get().dirY

                        if(x <= -1) x = jogo.width / (this.radius * 2) - 1 
                        if(x >= jogo.width / (this.radius * 2)) x = 0
                        if(y <= -1) x = jogo.height / (this.radius * 2) - 1
                        if(y >= jogo.height / (this.radius * 2)) y = 0

                        console.debug("x: " + x)
                        console.debug("y: " + y)

                        var proxTitulo = jogo.map.posY[y].posX[x].type 
                        console.debug("verifiqueProxTiulo: " + proxTitulo)

                        if (proxTitulo != "muro") {
                            this.setDirecao(this.direcaodeSentinela.get())
                            this.direcaodeSentinela.set(null)
                        }
                    }
                }
                console.groupEnd()
            }
        }

        this.setDirecao = function(dir) {
            
            if (!this.congelados) {
                
                this.dirX = dir.dirX
                this.dirY = dir.dirY
                this.angulo1 = dir.angulo1
                this.angulo2 = dir.angulo2
                this.direcao = dir
            }
        }

        this.habilitarModoAnimal = function() {
            this.modoAnimal = true
            this.modoAnimalTemporizador = 240
            console.debug("Modo animal ativado")

            inky.deslumbrar()
            pinky.deslumbrar()
            blinky.deslumbrar()
            clyde.deslumbrar()
        }

        this.desabilitarModoAnimal = function() {   

            this.modoAnimal = false

            console.debug("Modo animal desabilitado!")

            inky.undeslumbrar()
            pinky.undeslumbrar()
            blinky.undeslumbrar()
            clyde.undeslumbrar()

        }
        this.mover = function() {
            if (!this.congelados) {
                if (this.modoAnimalTemporizador > 0) {
                    this.modoAnimalTemporizador--
                }
                if((this.modoAnimalTemporizador == 0) && (this.modoAnimal == true)) this.desabilitarModoAnimal()

                this.posX += this.velocidade * this.dirX
                this.posY += this.velocidade * this.dirY

                // Verifica se está fora da tela
                if(this.posX >= jogo.width - this.radius) this.posX = 5 - this.radius
                if(this.posX <= 0 - this.radius) this.posX = jogo.width - 5 - this.radius
                if(this.posY >= jogo.height - this.radius) this.posY = 5 - this.radius 
                if(this.posY <= 0 - this.radius) this.posY = jogo.height - 5 - this.radius
            } else this.matarAnimacao()
        }
        this.redefinir = function() {
            this.descongelar()
            this.posX = 0
            this.posY = 6 * 2 * this.radius
            this.setDirecao(right)
            this.parar()
            this.presoX = 0
            this.presoY = 0
        }

        this.comer = function() {

            if(!this.congelados) {

                if(this.dirX == this.dirY == 0) {
                    this.angulo1 -= this.boca * 0.07
                    this.angulo2 += this.boca * 0.07

                    var limiteMax1 = this.direcao.angulo1
                    var limiteMax2 = this.direcao.angulo2
                    var limiteMin1 = this.direcao.angulo1 - 0.21
                    var limiteMin2 = this.direcao.angulo2 - 0.21

                    if (this.angulo1 < limiteMin1 || this.angulo2 > limiteMin2) {
                        this.boca = -1
                    }

                    if (this.angulo1 >= limiteMax1 || this.angulo2 <= limiteMax2) {
                        this.boca = 1
                    }
                    
                }
            }
        }

        this.matarAnimacao = function() {
            this.angulo1 += 0.05 
            this.angulo2 -= 0.05

            if (this.angulo1 >= this.direcao.angulo1 + 0.7 || this.angulo2 <= this.direcao.angulo2 - 0.7) {
                this.matarFinal()
            }
        }

        this.matar = function() {
            this.congelar()
            this.matarAnimacao()
        }
        this.matarFinal = function() {

            this.redefinir()
            pinky.redefinir()
            inky.redefinir()
            blinky.redefinir()
            clyde.redefinir()

            this.vidas--;

            console.log("pacman morreu, " + this.vidas + " vidas restantes");

            if (this.vidas <= 0) {
                
                jogo.acabou()
                // jogo.exibirPontuacaoMaximaForm
            }
            jogo.desenharCoracoes(this.vidas)
        }
        this.parar = function() {
            this.dirX = 0
            this.dirY = 0
        }
        this.getGradePosX = function() {
            return  (this.posX - (this.posX % 30)) / 30
        }
        this.getGradePosY = function() {
            return (this.posY - (this.posY % 30)) / 30
        }
    }
    pacman.prototype = new Figure()
    var pacman = new pacman();

    
    jogo.construirParedes()

     // A ação começa aqui
     function ocultarBarraEnderecos() {
        $("html").scrollTop(1)
        $("body").scrollTop(1)
    }

    $(document).ready(function() {

        if (!['localhost', '127.0.0.1'].includes(window.location.hostname)) {
			logger.disableLogger();
		}
        ;
		$.ajaxSetup({
			mimeType: "application/json"
		});

		$.ajaxSetup({
			beforeSend: function (xhr) {
				if (xhr.overrideMimeType) {
					xhr.overrideMimeType("application/json");
				}
			}
		});

        // Ocultar barra de endereço
        ocultarBarraEnderecos()

        /* -------------------- EVENT LISTENERS -------------------------- */
        // Controles
        window.addEventListener('keydown', fazerKeyDown, true)

        // pausa
        $('#canvas-container').click(function() {
            if(!(jogo.fimdejogo === true)) jogo.pausaRetomar()
        }); 

        // Hammerjs Touch Events
        Hammer('.container').on("swiperight", function(event) {
            if ($('#jogo-content').is(":visible")) {
                event.gesture.preventDefault()
                pacman.direcaodeSentinela.set(right)
            }
        });

        Hammer('.container').on("swipeleft", function (event) {
            if ($('#jogo-content').is(":visible")) {
                event.gesture.preventDefault()
                pacman.direcaodeSentinela.set(left) 
            }
        });

        Hammer('.container').on("swipeup", function (event) {
            if ($('#jogo-content').is(":visible")) {
                event.gesture.preventDefault()
                pacman.direcaodeSentinela.set(up)
            }
        });

        Hammer('.container').on("swipedown", function (event) {
            if ($('#jogo-content').is(":visible")) {
                event.gesture.preventDefault()
                pacman.direcaodeSentinela.set(down)
            }
        });

        // Botões de controle móvel
        $(document).on('touchend mousedown', '#up', function(event) {
            event.preventDefault()
            pacman.direcaodeSentinela.set(up)
        });

        $(document).on('touchend mousedown', '#down', function(event) {
            event.preventDefault()
            pacman.direcaodeSentinela.set(down)
        });

        $(document).on('touchend mousedown', '#left', function(event) {
            event.preventDefault()
            pacman.direcaodeSentinela.set(left)
        });

        $(document).on('touchend mousedown', '#right', function(event) {
            event.preventDefault()
            pacman.direcaodeSentinela.set(right)
        });

        // Menu
        $(document).on('click', '.button#novoJogo', function(event) {
            jogo.novoJogo()
        });


        canvas = $('#meuCanvas').get(0)
        context = canvas.getContext('2d')

        jogo.init(0)

        renderizarConteudo()

    })

    function renderizarConteudo() {

        jogo.pontuacao.refresh('.pontuacao')

        context.beginPath()
        context.fillStyle = 'White'
        context.strokeStyle = 'White'

        var irParaY
        if (jogo.map && jogo.map.posY && jogo.map.posY.length > 0) {
            
            $.each(jogo.map.posY, (i, row) => {
                irParaY = row.row 
                $.each(row.posX, (j, column) => {
                    if (column.type == "pilula") {
                        context.arc(jogo.paraPixelPos(column.col - 1) + 
                        pacman.radius, jogo.paraPixelPos(irParaY - 1) + 
                        pacman.radius, jogo.pilulaTamanho, 0 * Math.PI, 2 * Math.PI);
                        context.moveTo(jogo.paraPixelPos(column.col - 1), jogo.paraPixelPos(irParaY - 1))

                    } else if(column.type == "pilulaPoder") {
                        context.arc(jogo.paraPixelPos(column.col-1) + 
                        pacman.radius, jogo.paraPixelPos(irParaY - 1) + 
                        pacman.radius, jogo.pilulaPoderTamanhoAtual, 0 * Math.PI, 2 * Math.PI)
                        context.moveTo(jogo.paraPixelPos(column.col - 1), 
                        jogo.paraPixelPos(irParaY - 1))
                    }
                })
            })
        } else {
            console.warn('Mapa não carregado (ainda).')
        }
        context.fill()

        // Paredes
        context.drawImage(canvas_paredes, 0, 0)

        if (jogo.iniciado) {

            // Fantasma
            pinky.draw(context)
            blinky.draw(context)
            inky.draw(context)
            clyde.draw(context)
            
            // Pac Man
            context.beginPath()
            context.fillStyle = "Yellow";
			context.strokeStyle = "Yellow";
            context.arc(pacman.posX + pacman.radius, pacman.posY + pacman.radius,
                pacman.radius, pacman.angulo1 * Math.PI, pacman.angulo2 * Math.PI)
            context.lineTo(pacman.posX + pacman.radius, pacman.posY + pacman.radius)
            context.stroke()
            context.fill()
        }
    }

    function animacaoLoop() {

        canvas.width = canvas.width

        renderizarConteudo()

        if (jogo.pausar !== true) {

            pacman.mover()
            pacman.comer()
            pacman.verifiqueMudancaDirecao()

            // tem que ser o ÚLTIMO método chamado no pacman
            pacman.verifiqueColisoes()


            blinky.mover()
            inky.mover()
            pinky.mover()
            clyde.mover()

            jogo.verifiqueModoFantasma()

            ///// Todos os pontos coletados?
            jogo.verifiqueParaSubirNivel()
        }

        setTimeout(animacaoLoop, jogo.taxaAtualizacao)
    }

    function fazerKeyDown(evt) {

        switch(evt.keyCode) {

            // tecla seta cima pressionada
            case 38: 
               evt.preventDefault()

            // tecla W
            case 87:
                pacman.direcaodeSentinela.set(up)
                break;
            
            // tecla baixo pressionada
            case 40:
               evt.preventDefault()

            //  tecla S pressionada
            case 83:
                pacman.direcaodeSentinela.set(down)
                break;

            // tecla seta esquerda pressionada
            case 37:
                evt.preventDefault()

            // tecla A pressionada
            case 65:
                pacman.direcaodeSentinela.set(left)
                break;

            // tecla direita pressionada
            case 39:
                evt.preventDefault()

            // tecla D pressionada
            case 68:
                pacman.direcaodeSentinela.set(right)
                break;

            // tecla N pressionada
            case 78:
                if (!$('#jogadorNome').is(':focus')) {
                    jogo.pausar = 1
                    jogo.novoJogo()
                }
                break;

            // tecla M pressionada
            case 77:

            // tecla Bacjspace pressionada -> exibir conteudo jogo
            case 8:
            // tecla ESC pressionada -> exibir conteudo jogo
            case 27:
                if (!$('#jogadorNome').is(':focus')) {
                    evt.preventDefault()
                    jogo.exibirconteudo('jogo-content')
                }
                break
            case 32:
                evt.preventDefault()

                if (!(jogo.fimdejogo == true) &&
                   $('#jogo-content').is(':visible')) 
                jogo.pausaRetomar()

                break;
                
        }
    }
}

geral()