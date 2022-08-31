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
        this.redefinir = function() {

            console.log("REdefinir");
        }
    }

    

    function Jogo() {
        
        this.temporizador = new Timer()

        this.contagemPilulas 

        this.canvas = $('#meuCanvas').get(0)
        this.weigth = this.canvas.weigth
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

    function pacman() {

        this.vidas = 3

    }
    jogo = new Jogo()
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

        context.beginPath()
        context.fillStyle = 'White'
        context.strokeStyle = 'White'


        context.fill()

        // context.drawImage(canvas_paredes, 0 , 0)
    }
}

geral()