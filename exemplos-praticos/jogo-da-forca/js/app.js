window.onload = function() {

    alfabeto = 
    [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z'
    ]
    var categorias
    var escolherCategoria
    var getDica 
    var letra
    var suposicao
    var propostas = []
    var vidas
    var contar 
    var espaco

    var exibirVidas = document.getElementById("minhasVidas")
    getDica = document.getElementById('btnDica')
    var exibirPista = document.getElementById('dica')

    // criar elemento ul
    var botoes = function() {

        meuBotoes =  document.getElementById('botoes')
        letras = document.createElement('ul')

        for(var index = 0; index < alfabeto.length; index++) {
            letras.id = 'alfabeto'

            lista = document.createElement('li')
            lista.id = 'letras'
            lista.innerHTML = alfabeto[index]
            verifique()
            meuBotoes.appendChild(letras)
            letras.appendChild(lista)
        }
    }
    // selecionar categoria
    var selecionarCat = function() {
        if (escolherCategoria === categorias[0]) {
            categoriaNome.innerHTML = "A categoria escolhida são times de futebol da serie A do Brasileirão"
        } else if (escolherCategoria === categorias[1]) {
            categoriaNome.innerHTML = "A categoria escolhida é filmes"
        } else if (escolherCategoria === categorias[2]) {
            categoriaNome.innerHTML = "A categoria escolhida é cidades"
        }
    }

    //criar suposição de palavras ul
    resultado = function() {
        portaPalavras = document.getElementById('conter')
        correto = document.createElement('ul')

        for(var index = 0; index < letra.length; index++) {
            correto.setAttribute('id', 'minhas-palavras')
            suposicao =  document.createElement('li')
            suposicao.setAttribute('class', 'suposicao')

            if (letra[index] === "-") {
                suposicao.innerHTML = "-"
                espaco = 1
            } else {
                suposicao.innerHTML = "_"
            }
            propostas.push(suposicao)
            portaPalavras.appendChild(correto)
            correto.appendChild(suposicao)
        }
    }
    // exibir número de vidas
    comentarios = function() {
        exibirVidas.innerHTML = "Você tem " + vidas + " vidas"

        if (vidas < 1) {
            exibirVidas.innerHTML = "Fim de Jogo"
        }
        for(var index = 0; index < propostas.length; index++) {
            if (contar + espaco === propostas.length) {
                exibirVidas.innerHTML = "Você Venceu!"
            }
        }
    }
    // Animar boneco
    var animacao = function() {
        var desenheMe = vidas 
        desenhoArray[desenheMe] ()
    }

    // Carrasco
    canvas = function() {
        meuBoneco = document.getElementById('boneco')
        context = meuBoneco.getContext('2d')
        context.beginPath()
        context.strokeStyle = '#fff'
        context.lineWidth = 2
    }
    cabeca = function() {
        meuBoneco = document.getElementById('boneco')
        context = meuBoneco.getContext('2d')
        context.beginPath()
        context.arc(60, 25, 10, 0, Math.PI * 2, true)
        context.stroke()
    }

    desenhar = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        context.moveTo($pathFromx, $pathFromy)
        context.lineTo($pathTox, $pathToy)
        context.stroke()
    }
    frame1 = function() {
        desenhar(0, 150, 150, 150)
    }
    frame2 = function() {
        desenhar(10, 0, 10, 600)
    }
    frame3 = function() {
        desenhar(0, 5, 70, 5)
    }
    frame4 = function() {
        desenhar(60, 5, 60, 15)
    }
    tronco = function() {
        desenhar(60, 36, 60, 70)
    }
    bracoDireito = function() {
        desenhar(60, 46, 100, 50)
    }
    bracoEsquerdo = function() {
        desenhar(60, 46, 20, 50)
    }
    pernaDireita = function() {
        desenhar(60, 70, 100, 100)
    }
    pernaEsquerda = function() {
        desenhar(60, 70, 20, 100)
    }

    desenhoArray = [pernaDireita, pernaEsquerda, bracoDireito, bracoEsquerdo, tronco, cabeca, frame4, frame3, frame2, frame1]
    // Função onClick
    verifique = function() {
        lista.onclick = function() {
            var suposicao = (this.innerHTML)
            this.setAttribute("class", "ativo")
            this.onclick = null

            for(var index = 0; index < letra.length; index++) {
                if (letra[index] === suposicao) {   
                    propostas[index].innerHTML = suposicao
                    contar += 1
                }
            }
            var j = (letra.indexOf(suposicao))

            if (j === -1) {
                vidas -= 1
                comentarios()
                animacao()
            } else {
                comentarios()
            }
        }
    }
    jogar = function() {
        categorias = [
            [
                "palmeiras",
                "corinthians",
                "internacional",
                "flamengo",
                "santos",
            ],
            [
                "hereditario",
                "gladiador",
                "alien",
                "vingadores"
            ],
            [
                "brasilia",
                "manaus",
                "pelotas",
                "fortaleza",
                "recife"
            ]
        ]
        escolherCategoria = categorias[Math.floor(Math.random() * categorias.length)]
        letra = escolherCategoria[Math.floor(Math.random() * escolherCategoria.length)]
        letra = letra.replace(/\s/g, "-")
        console.log(letra);
        botoes()
        propostas = []
        vidas = 10
        contar = 0
        espaco = 0
        resultado()
        comentarios()
        selecionarCat()
        canvas()
    }
    jogar()

    btnDica.onclick = function() {
        dicas = [
            [
                "clube paulista verde e branco", "clube paulista do mosqueteiro", "clube gaúcho campeão de tudo", "clube carioca alve-rubro", "clube santista do rei Pelé"
            ],
            [
                "filme de terror/drama do diretor Ari Aster", "filme1", "filme2", "filme3", "filme4"
            ],
            [
                "Cidade", "Cidade1", "Cidade2", "Cidade3", "Cidade4"
            ]
        ]
        var categoriaIndice = categorias.indexOf(escolherCategoria)
        var dicaIndice = escolherCategoria.indexOf(letra)
        exibirPista.innerHTML = "Dica: - " + dicas[categoriaIndice] [dicaIndice]
    }
    document.getElementById('redefinir').onclick = function() {
        correto.parentNode.removeChild(correto)
        letras.parentNode.removeChild(letras)
        exibirPista.innerHTML = ""
        context.clearRect(0, 0, 400, 400)
        jogar()
    }
}