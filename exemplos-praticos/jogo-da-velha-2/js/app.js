'use strict'

window.addEventListener('load', app)

let jogoPainel = ['', '', '', '', '', '', '', '', '']
let turn = 0
let vencedor = false

// criar jogador
const jogador = (nome) => {
    nome = nome 

    return {nome}
}

let jogadorX = jogador("")
let jogadorY = jogador("")

// inicializar o app
function app() {

    let addJogadorForm = document.getElementById('jogador-form')
    addJogadorForm.addEventListener('submit', addJogadores)
}

// addJogadores
function addJogadores(e) {

    e.preventDefault();
    
    if (this.jogador1.value === '' || this.jogador2.value === '') {
        alert('Você deve inserir um nome para cada campo')

        return 
    }
    const jogadorFormContainer = document.querySelector('.entre-jogadores')
    const painelPrincipal = document.querySelector('.painel__main')
    jogadorFormContainer.classList.add('hide-container')
    painelPrincipal.classList.remove('hide-container')

    jogadorX.nome = this.jogador1.value 
    jogadorY.nome = this.jogador2.value

    construirPainel()
}

// VOLTAR JOGADOR ATUAL
function atualJogador() {

    return turn % 2 === 0 ? 'X' : 'O'
}

window.addEventListener('resize', emRedimensionar)

function emRedimensionar() {
    let todasCelulas = document.querySelectorAll('.painel__celula')
    let celulaAltura = todasCelulas[0].offsetWidth

    todasCelulas.forEach(cell => {
        cell.getElementsByClassName.height = `${celulaAltura}px`
    })
}

function construirPainel() {

    emRedimensionar()
    addCelulaCliqueOuvinte()
    alterarPainelCabecalhoNomes()
}

// EVENTO DE CLIQUE DE CÉLULA PARA O JOGADOR TENTAR FAZER MOVIMENTO
function facaMovimento(e) {
    console.log(turn);

    let atualCelula = parseInt(e.currentTarget.firstElementChild.dataset.id)
    let celulaParaAddToken = document.querySelector(`[data-id='${atualCelula}']`)

    if (celulaParaAddToken.innerHTML !== '') {
        console.log('Esta célula já está ocupada.');

        return;
    } else {
        if (atualJogador() === 'X') {
            celulaParaAddToken.textContent = atualJogador()
            jogoPainel[atualCelula] = 'X'
        } else {
            celulaParaAddToken.textContent = atualJogador()
            jogoPainel[atualCelula] = 'O'
        }
    }
    // VERIFIQUE SE TEMOS UM VENCEDOR
    ehVencedor()
    // Atualize a contagem de turnos para que o próximo jogador possa escolher
    turn++

    // MUDAR INFORMAÇÕES DO CABEÇALHO DO QUADRO
    alterarPainelCabecalhoNomes()
}

function verifiqueSeEmpate() {
    if (turn > 7) {
        alert('jogo deu empate')
    }
}

function ehVencedor() {

    const sequenciasVencedoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    sequenciasVencedoras.forEach(vencedorCombos => {

        let celula1 = vencedorCombos[0]
        let celula2 = vencedorCombos[1]
        let celula3 = vencedorCombos[2]

        if (
            jogoPainel[celula1] === atualJogador() &&
            jogoPainel[celula2] === atualJogador() &&
            jogoPainel[celula3] === atualJogador() 
        ) {
            const celulas = document.querySelectorAll('.painel__celula')
            const cartaId1 = document.querySelector(`[data-id='${celula1}']`)
            const cartaId2 = document.querySelector(`[data-id='${celula2}']`)
            const cartaId3 = document.querySelector(`[data-id='${celula3}']`)

            celulas.forEach(celula => {
                let celulaId = celula.firstElementChild.dataset.id 

                if (celulaId == celula1 || celulaId == celula2 || celulaId == celula3) {
                    celula.classList.add('painel__celula--vencedor')
                }
            })
            let atualJogadorTexto = document.querySelector('.painel__jogador-turn')

            if (atualJogador() === 'X') {
                atualJogadorTexto.innerHTML = `
                <div class="parabens">Parabéns ${jogadorX.nome}</div>
                <div class="u-r-vencedor">Você é o nosso vencedor!</div>`

                vencedor = true 
                removerCelularCliqueOuvinte()

                return true 
            } else {
                atualJogadorTexto.innerHTML = `
                <div class="parabens">Parabéns ${jogadorY.nome}</div>
                <div class="u-r-vencedor">Você é o nosso vencedor!</div>`

                vencedor = true 
                removerCelularCliqueOuvinte()

                return true 
            }
        }
    })
    if (!vencedor) {
        verifiqueSeEmpate()
    }
    return false
}

function alterarPainelCabecalhoNomes() {

    if (!vencedor) {
        
        let atualJogadorTexto = document.querySelector('.painel__jogador-turn')

        if (atualJogador() === 'X') {
            
            atualJogadorTexto.innerHTML = `
            <span class="nome--stilo"> ${jogadorX.nome}
            </span>, você está acima!
            <div class="u-r-vencendor"</div>`
        } else {
            atualJogadorTexto.innerHTML = `
            <span class="nome--estilo"> ${jogadorY.nome}
            </span>, você está acima.
            <div class="u-r-vencedor"><div>`
        }
    }
}

function addCelulaCliqueOuvinte() {

    const celulas = document.querySelectorAll('.painel__celula')

    celulas.forEach(celula => {
        celula.addEventListener('click', facaMovimento)
    })
}
function removerCelularCliqueOuvinte() {

    let todasCelulas = document.querySelectorAll('.painel__celula')

    todasCelulas.forEach(celula => {
        celula.removeEventListener('click', facaMovimento)
    })
}