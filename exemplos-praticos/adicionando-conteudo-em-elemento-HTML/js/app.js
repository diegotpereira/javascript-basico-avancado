function adicionar() {
    var ing = document.querySelector('#ingrediente').value
    var lista = document.querySelector('#lista').innerHTML

    lista = lista + "<li>" + ing + "</li>"

    document.querySelector('#lista').innerHTML = lista
}

function preparar() {
    var prep = document.querySelector('#preparo').value
    var paragrafo = document.querySelector('#paragrafo').innerHTML

    paragrafo = paragrafo + "<p>" + prep + "</p>"

    document.querySelector('#paragrafo').innerHTML = paragrafo
}