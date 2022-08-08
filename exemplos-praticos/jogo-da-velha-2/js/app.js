'use strict'

window.addEventListener('load', app)

let jogoPainel 
let turn = 0
let vencedor = false

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

    construirPainel()
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
    alterarPainelCabecalhoNomes()
}

function alterarPainelCabecalhoNomes() {

}