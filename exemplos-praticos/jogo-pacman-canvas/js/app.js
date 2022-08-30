'use strict'



function geral () {

    var canvas
    var context
    var canvas_paredes, context_paredes
    var jogo

    var mapConfig = "data/map.json";

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

    

    function Jogo() {
        

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
                    sucess: (data) => {

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

        this.getContagemPilulas = async () => {

            console.log("contagemPilulas...");
            var temp = 0

            $.each(this.map.posY, function(i, item) {
                $.each(this.posX, function() {

                    if (this.type = "pill") {
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
    }

    function pacman() {

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