'use strict'



function geral () {

    var canvas
    var context
    var canvas_paredes, context_paredes
    var jogo

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

        this.tempo_iniciar

        this.iniciar = function() {
            this.tempo_iniciar = new Date().getTime()
        }
        this.redefinir = function() {

            console.log("REdefinir");
        }
    }

    

    function Jogo() {
        
        this.temporizador = new Timer()

        this.contagemPilulas

        this.iniciado = false
        this.pausar = true;
        this.map    

        this.canvas = $('#meuCanvas').get(0);
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

            animacaoLoop();
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

    function renderizarConteudo() {

        console.log("renderizarConteudo");

        context.beginPath()
        context.fillStyle = 'White'
        context.strokeStyle = 'White'

        var irPara

        if (jogo.map && jogo.map.posY && jogo.map.posY.length > 0) {
            
            $each(jogo.map.posY, (i, row) => {
                irPara = row.row 
                $each(row.posX, (j, column) => {
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
}

geral()