var header = document.querySelector('header')
var section = document.querySelector('section')

// recuperando em uma variável.
var requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

// solicitação para criar uma nova instância de objeto
var request = new XMLHttpRequest()

// abrir uma nova solicitação usando o método open()
request.open('GET', requestUrl)

// para que o XHR saiba que o servidor retornará o JSON
request.responseType = 'json'

// enviando solicitação com o método send():
request.send()

// aguardando a resposta retornar do servidor
request.onload = function() {
    var superHerois = request.response
    popularHeader(superHerois)
    exibirHerois(superHerois)
}

// preenchendo cabeçalho
function popularHeader(jsonObj) {
    var meuH1 = document.createElement('h1')
    meuH1.textContent = jsonObj['squadName']
    header.appendChild(meuH1)

    var meuPara = document.createElement('p')
    meuPara.textContent = 'Cidade Natal: ' + jsonObj['homeTown'] + ' - Formado em: ' + jsonObj['formed']
    header.appendChild(meuPara)
}
// cartões de informações do héroi
function exibirHerois(jsonObj) {
    var herois = jsonObj['members']

    for (var index = 0; index < herois.length; index++) {
        var meuArtigo = document.createElement('article')
        var meuH2 = document.createElement('h2')
        var meuPara1 = document.createElement('p')
        var meuPara2 = document.createElement('p')
        var meuPara3 = document.createElement('p')
        var minhaLista = document.createElement('ul')

        meuH2.textContent = herois[index].name
        meuPara1.textContent = 'Identidade Secreta: ' + herois[index].secretIdentity
        meuPara2.textContent = 'Idade: ' + herois[index].age
        meuPara3.textContent = 'SuperPoderes: '

        var superPoderes = herois[index].powers

        for (var j = 0; j < superPoderes.length; j++) {
            var listaItem = document.createElement('li')

            listaItem.textContent = superPoderes[j]
            minhaLista.appendChild(listaItem)
        }
        meuArtigo.appendChild(meuH2)
        meuArtigo.appendChild(meuPara1)
        meuArtigo.appendChild(meuPara2)
        meuArtigo.appendChild(meuPara3)
        meuArtigo.appendChild(minhaLista)

        section.appendChild(meuArtigo)
    }
}