function alterarCor(obj) {

    if (obj.style.color == 'orange') {
        obj.style.color = 'black'

    } else {
        obj.style.color = 'orange'
    }
}

function alterarCorDeFundo(obj, corNome) {
    obj.style.backgroundColor = corNome
}

function alterarTexto(obj, texto) {
    obj.innerText = texto
}

function aumentarEscala(obj, tamanho) {
    obj.style.fontSize = tamanho
}

function mostrarSeis() {

    var elemento = document.getElementById('seis')

    if (elemento.style.visibility == 'hidden') {
        
        elemento.style.visibility = 'visible'

    } else {
        elemento.style.visibility = 'hidden'
    }
}