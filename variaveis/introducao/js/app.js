var geval = eval 

function criarEntrada() {

    var entradaDiv = document.createElement('div')
    var entradaParagrafo = document.createElement('p')
    var entradaFormulario = document.createElement('input')

    entradaDiv.setAttribute('class', 'input')
    entradaParagrafo.textContent = '>'
    entradaDiv.appendChild(entradaParagrafo)
    entradaDiv.appendChild(entradaFormulario)

    document.body.appendChild(entradaDiv)

    if (document.querySelectorAll('div').length > 1) {
        
        entradaFormulario.focus()
    }
    entradaFormulario.addEventListener('change', executarCodigo)
}

function executarCodigo(e) {

    try {
        var resultado = geval(e.target.value)
    } catch (e) {
        var resultado = 'erro - ' + e.message
    }

    var saidaDiv = document.createElement('div')
    var saidaParagrafo = document.createElement('p')

    saidaDiv.setAttribute('class', 'output')
    saidaParagrafo.textContent = 'resultado: ' + resultado
    saidaDiv.appendChild(saidaParagrafo)

    document.body.appendChild(saidaDiv)

    e.target.disabled = true 
    e.target.parentNode.style.opacity = '0.5'

    criarEntrada()
}
criarEntrada()