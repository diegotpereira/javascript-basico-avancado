let primeiroNumero = parseInt(Math.random() * 10)
let segundoNumero = parseInt(Math.random() * 10)

// exibir numero no canvas
let primario = document.getElementById('numero-primario')

primario.innerHTML = `<p>${primeiroNumero}</P>`

let secundario = document.getElementById('numero-secundario')
secundario.innerHTML = `<p>${segundoNumero}</p>`

let total = primeiroNumero + segundoNumero

let botao = document.getElementById('btn')

botao.addEventListener('click', function() {

    let tentativa = document.getElementById('tentativa').value 

    tentativa = Number(tentativa)

    if (tentativa === total) {
        
        alert('Correto')
        window.location.reload()
    } else {
        alert('Desculpe, Incorreto. A resposta correta foi ' + total + '.')
        window.location.reload()
    }
})