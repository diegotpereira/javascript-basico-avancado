window.onload = function() {

    alfabeto = 
    [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z'
    ]
    var dicas 
    var escolherCategoria
    var getDica 
    var letra

    var getDica = document.getElementById('btnDica')
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

    // Função onClick
    verifique = function() {
        lista.onclick = function() {
            var suposicao = (this.innerHTML)
            this.setAttribute("class", "active")
            this.onclick = null

            for(var index = 0; index.letra.length; index++) {
                if (letra[index] === suposicao) {
                    suposicao[index].innerHTML = suposicao
                    contar += 1
                }
            }
            var j = (letra.indexOf(suposicao))

            if (j === -1) {
                
            }
        }
    }
    jogar = function() {
        categorias = [
            [
                "Palmeiras",
                "Corinthians",
                "Internacional",
                "Athletico-PR",
                "Atlético-MG",
            ],
            [
                "Clube",
                "Gladiador",
                "Alien",
                "Vingadores"
            ],
            [
                "Brasilia",
                "Manaus",
                "Pelotas",
                "Fortaleza",
                "Recife"
            ]
        ]
        escolherCategoria = categorias[Math.floor(Math.random() * categorias.length)]
        letra = escolherCategoria[Math.floor(Math.random() * escolherCategoria.length)]
        letra = letra.replace(/\s/g, "-")
        console.log(letra);
        botoes()
        selecionarCat()
    }
    jogar()

    btnDica.onclick = function() {
        dicas = [
            [
                "futebol", "futebol1", "futebol2", "futebol3", "futebol4"
            ],
            [
                "filme", "filme1", "filme2", "filme3", "filme4"
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
        letras.parentNode.removeChild(letras)
        exibirPista.innerHTML = ""
        // context.clearRect(0, 0, 400, 400)
        jogar()
    }
}