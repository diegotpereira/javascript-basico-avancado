'use strict'

const FANTASMAS = {
    INKY: 'inky',
	BLINKY: 'blinky',
	PINKY: 'pinky',
	CLYDE: 'clyde'
}

function geral () {

    var canvas
    var context
    var canvas_paredes, context_paredes
    var jogo

    var inky, blinky, clyde, pinky;

    var mapConfig = "data/map.json";

    console.log(mapConfig);

    function construirParede(context, gridX, gridY, width, height) {

        console.log("construirParede...");

        width = width * 2 - 1;
        height = height * 2 -1;
        context.fillRect(
            pacman.radius / 2 + gridX * 2 *
            pacman.radius, pacman.radius / 2 + gridY * 2 *
            pacman.radius, width * pacman.radius, height *
            pacman.radius
        )
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

        this.contagemPilulas

        this.iniciado = false
        this.pausar = true;
        this.fimdejogo = false
        this.map    

        this.canvas = $('#meuCanvas').get(0);
        this.corParede = "Blue"
        this.width = this.canvas.width
        this.height = this.canvas.height

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

        this.forceIniciarLoopAnimacao = function() {

            this.temporizador.iniciar()

            this.pausar = false;
            this.iniciado = true;
            this.fecharMensagem()

            animacaoLoop();
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
        this.pausarEhExibirMensagem = function(titulo, texto) {
            this.temporizador.parar()
            this.pausar = true
            this.exibirMensagem(titulo, texto)

        }
        this.exibirMensagem =  function(titulo, texto) {
            $('#canvas-overlay-container').fadeIn(200)
            if($('.controles').css('display') != 'none') $('.controles').slideToggle(200)
            $('#canvas-overlay-content #titulo').text(titulo)
            $('#canvas-overlay-content #text').html(texto)
        }
        this.fecharMensagem = function() {
            $('#canvas-overlay-container').fadeOut(200)
            $('.controles').slideToggle(200)
        }
        this.getContagemPilulas = () => {

            console.log("contagemPilulas...");
            var temp = 0

            $.each(this.map.posY, function(i, item) {
                $.each(this.posX, function() {

                    if (this.type == "pill") {
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
            this.contagemPilulas = this.getContagemPilulas()

            if (state === 0) {
                
                this.temporizador.redefinir()
                jogo.redefinir()
            }

            console.log(state);

            jogo.desenharCoracoes(pacman.vidas)

            // inicializa Fantasmas, evita inundação de memória
            if(pinky === null || pinky === undefined) {
                pinky = new Fantasma(FANTASMAS.PINKY, 7, 5, 'img/pinky.svg', 2, 2)
                inky = new Fantasma(FANTASMAS.INKY, 8, 5, 'img/inky.svg', 13, 11)
                blinky = new Fantasma(FANTASMAS.BLINKY, 9, 5, 'img/blinky.svg', 13, 0)
                clyde = new Fantasma(FANTASMAS.CLYDE, 10, 5, 'img/clyde.svg', 2, 11)
            }


            console.log("coraççoes");

        }

        this.toPixelPos = function(gridPos) {
            return gridPos * 30
        }
        this.construirParedes = function() {

            canvas_paredes = document.createElement('canvas')
            canvas_paredes.width = jogo.canvas.width
            canvas_paredes.height = jogo.canvas.height
            context_paredes = canvas_paredes.getContext('2d')

            context_paredes.fillStyle = jogo.corParede;
            context_paredes.strokeStyle = jogo.corParede

            //
            construirParede(context_paredes, 0, 0, 18, 1)   
            construirParede(context_paredes, 0, 12, 18, 1)

            construirParede(context_paredes, 0, 0, 0, 6)
            construirParede(context_paredes, 0, 7, 1, 6)
            construirParede(context_paredes, 17, 0, 1, 6);
			construirParede(context_paredes, 17, 7, 1, 6);

            // ghost base
			construirParede(context_paredes, 7, 4, 1, 1);
			construirParede(context_paredes, 6, 5, 1, 2);
			construirParede(context_paredes, 10, 4, 1, 1);
			construirParede(context_paredes, 11, 5, 1, 2);
			construirParede(context_paredes, 6, 6, 6, 1);

			// ghost base door
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


        /* Funções UI */
        this.desenharCoracoes = function (contar) {

            console.log("desenharCoracoes");

            var html = ""

            for(var i = 0; i < contar; i++) {

                // html += "<img src='img/heart.png'>"
                html += " <img src='img/heart.png'>";
            }
        
            $(".vidas").html("Vidas: " + html);
        }

        this.redefinir = function() {
            console.log("redefinir");

        }
        
    }

    function Direcao(nome, angulo1, angulo2, dirX, dirY) {
        this.nome = nome 
        this.angulo1 = angulo1
        this.angulo2 = angulo2
        this.dirX = dirX
        this.dirY = dirY
        this.equals = function(dir) {
            return JSON.stringify(this) === JSON.stringify(dir)
        }
    }
    
    var right = new Direcao("right", 0.25, 1.75, 1, 0)

    jogo = new Jogo()

    function pacman() {

        this.radius = 15
        this.posX = 0
        this.posY = 6 * 2 * this.radius 
        this.velocidade = 5
        this.angulo1 = 0.25
		this.angulo2 = 1.75
        this.mouth = 1
        this.dirX = right.dirX
		this.dirY = right.dirY
        this.vidas = 3

        this.modoAnimal = false 
        this.modoAnimalTemporizador = 0


    }
    var pacman = new pacman();
    jogo.construirParedes()

    $(document).ready(function() {

        if (!['localhost', '127.0.0.1'].includes(window.location.hostname)) {
			logger.disableLogger();
		}
        
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


        canvas = $('#meuCanvas').get(0)
        context = canvas.getContext('2d')

        jogo.init(0)

        renderizarConteudo()

    })

    /* -------------------- EVENT LISTENERS -------------------------- */
    // Controles
    window.addEventListener('keydown', fazerKeyDown, true)

    // pausa
    $('#canvas-container').click(function() {
        if(!(jogo.fimdejogo === true)) jogo.pausaRetomar()
    })

    function renderizarConteudo() {

        console.log("renderizarConteudo");

        context.beginPath()
        context.fillStyle = 'White'
        context.strokeStyle = 'White'

        var irPara

        if (jogo.map && jogo.map.posY && jogo.map.posY.length > 0) {
            
            $.each(jogo.map.posY, (i, row) => {
                irPara = row.row 
                $.each(row.posX, (j, column) => {
                    if (column.type == "pill") {
                        context.arc(jogo.toPixelPos(column.col - 1) + 
                        pacman.radius, jogo.toPixelPos(irPara - 1) + 
                        pacman.radius, jogo.pillSize, 0 * Math.PI, 2 * Math.PI);

                        context.moveTo(jogo.toPixelPos(column.col - 1), jogo.toPixelPos(irPara - 1))

                    } else if(column.type == "powerpill") {
                        
                    }
                })
            })
        }


        context.fill()

        context.drawImage(canvas_paredes, 0 , 0)

        if (jogo.iniciado) {

            // Fantasma
            pinky.draw(context)
            blinky.draw(context)
            inky.draw(context)
            clyde.draw(context)
            
            context.beginPath()
            context.arc(pacman.posX + pacman.radius, pacman.posY, pacman.radius,
                pacman.radius, pacman.angulo1 * Math.PI, pacman.angulo2 * Math.PI)
            context.lineTo(pacman.posX + pacman.radius, pacman.posY + pacman.radius)
            context.stroke()
            context.fill()
        }
    }

    function animacaoLoop() {

        
        canvas.width = canvas.width

        renderizarConteudo()

        setTimeout(animacaoLoop)
    }
    function fazerKeyDown(evt) {

        switch(evt.keyCode) {
            case 38: 
               evt.preventDefault()

            case 40:
               evt.preventDefault()

            case 32:
                evt.preventDefault()

                if (!(jogo.fimdejogo == true) &&
                   $('#jogo-content').is(':visible')) 
                jogo.pausaRetomar()

                break;
                
        }
    }

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
			'"dead" : {' +
			'"left" : "", "up": "", "right" : "", "down": ""}}'
        );

        this.imagem = new Image()
        this.imagem.src = imagem
        this.fantasmaCasa = true 
        this.deslumbrado = true 
        this.morto = false 
        
        this.deslumbrar = function() {
            this.alterarVelocidade(jogo.fantasmaVelocidadeDeslumbrado)

            if(this.posX > 0) this.posX = this.posX - this.posX % this.velocidade
            if(this.posY > 0) this.posY = this.posY -  this.posY % this.velocidade

            this.deslumbrado = true 
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
    }
}

geral()