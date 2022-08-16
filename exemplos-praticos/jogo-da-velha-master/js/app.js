var N_TAMANHO = 3,
    VAZIO = '&nbsp;',
    caixas = [],
    virar = 'X',
    pontuacao,
    movimentos

function iniciar() {

    var quadro = document.createElement('table')
    quadro.setAttribute('border', 1)
    quadro.setAttribute('cellspacing', 0)

    var identificador = 1

    for(var i = 0; i < N_TAMANHO; i++) {

        var linha = document.createElement('tr')
        quadro.appendChild(linha)

        for(var j = 0; j < N_TAMANHO; j++) {

            var celula = document.createElement('td')
            celula.setAttribute('height', 120)
            celula.setAttribute('width', 120)
            celula.setAttribute('align', 'center')
            celula.setAttribute('valign', 'center')
            celula.classList.add('col' + j, 'linha' + i)

            if (i == j) {
                celula.classList.add('diagonal0')
            }
            if (j == N_TAMANHO - i - 1) {
                celula.classList.add('diagonal1')
            }
            celula.identificador = identificador
            celula.addEventListener('click', definir)
            linha.appendChild(celula)
            caixas.push(celula)
            identificador += identificador
        }
    }
    document.getElementById('jogodavelha').appendChild(quadro)
    iniciarNovoJogo()
}

function iniciarNovoJogo() {

    pontuacao = {
        'X': 0,
        'O': 0
    }
    movimentos = 0
    virar = 'X'

    caixas.forEach(function(quadro) {

        quadro.innerHTML = VAZIO
    })
}

function vencer(clicado) {

    // Obter todas as classes de células
    var membroDe = clicado.className.split(/\s+/)

    for(var i = 0; i < membroDe.length; i++) {

        var testeClasse = '.' + membroDe[i]

        var itens = contains('#jogodavelha ' + testeClasse, virar)

        // // condição vencedora: virar == N_TAMANHO
        if (itens.length == N_TAMANHO) {
            return true
        }
    }
    return false
}
function contains(seletor, texto) {

    var elementos = document.querySelectorAll(seletor)

    return [].filter.call(elementos, function(elemento) {

        return RegExp(texto).test(elemento.textContent)
    })
}
function definir() {

    if (this.innerHTML !== VAZIO) {
        return
    }
    this.innerHTML = virar
    movimentos += 1

    pontuacao[virar] += this.identificador

    if (vencer(this)) {
        
        alert('Vencedor: Jogador ' + virar)
        iniciarNovoJogo()

    } else if (movimentos === N_TAMANHO * N_TAMANHO) {
        alert('Desenhar')
        iniciarNovoJogo()

    } else {
        virar = virar === 'X' ? 'O' : 'X'
        document.getElementById('virar').textContent = 'Jogador ' + virar
    }
}

iniciar()