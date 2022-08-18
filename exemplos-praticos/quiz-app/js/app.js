const botaoIniciar = document.getElementById('iniciar-btn')
const questaoContainerElemento = document.getElementById('questao-container')
const questaoElemento = document.getElementById('questao')
const respostaBotoesElemento = document.getElementById('resposta-botoes')
const proximoBotao = document.getElementById('proximo-btn')

let perguntasEmbaralhadas
let atualIndiceQuestao

botaoIniciar.addEventListener('click', iniciarJogo)

proximoBotao.addEventListener('click', () => {
    atualIndiceQuestao++
    definirProximaPergunta()
})

function iniciarJogo() {

    botaoIniciar.classList.add('ocultar')
    perguntasEmbaralhadas = questoes.sort(() => Math.random() - .5)
    atualIndiceQuestao = 0
    questaoContainerElemento.classList.remove('ocultar')
    definirProximaPergunta()
}

function definirProximaPergunta() {

    redefinirEstado()
    mostrarQuestao(perguntasEmbaralhadas[atualIndiceQuestao])
}

function mostrarQuestao(questao) {
    questaoElemento.innerText = questao.questao
    questao.respostas.forEach(resposta => {

        const botao = document.createElement('button')
        botao.innerText = resposta.texto
        botao.classList.add('btn')

        if (resposta.correto) {
            botao.dataset.correto = resposta.correto
        }
        botao.addEventListener('click', selecioneResponder)
        respostaBotoesElemento.appendChild(botao)
    })
}

function redefinirEstado() {

    proximoBotao.classList.add('ocultar')

    while(respostaBotoesElemento.firstChild) {
        respostaBotoesElemento.removeChild(respostaBotoesElemento.firstChild)
    }
}

function selecioneResponder(e) {

    const botaoSelecionado = e.target
    const correto = botaoSelecionado.dataset.correto

    definirClasseStatus(document.body, correto)

    Array.from(respostaBotoesElemento.children).forEach(botao => {
        definirClasseStatus(botao, botao.dataset.correto)
    })

    if (perguntasEmbaralhadas.length > atualIndiceQuestao + 1) {
        proximoBotao.classList.remove('ocultar')

    } else {
        botaoIniciar.innerText = 'Reiniciar'
        botaoIniciar.classList.remove('ocultar')
    }
}

function definirClasseStatus(elemento, correto) {
    limparClasseStatus(elemento)

    if (correto) {
        elemento.classList.add('correto')
         
    } else {
        elemento.classList.add('errado')
    }
}

function limparClasseStatus(elemento) {
    elemento.classList.remove('correto')
    elemento.classList.remove('errado')
}

const questoes = [
    {
        questao: 'Quanto é 2 + 2?',
        respostas: [
            {
                texto: '4', correto: true
            },
            {
                texto: '22', correto: false
            }
        ]
    },
    {
        questao: 'Quem é o melhor YouTuber?',
        respostas: [
            {
                texto: 'DevMedia', correto: true
            },
            {
                texto: 'Programador BR', correto: true
            },
            {
                texto: 'Curso em Vídeo', correto: true 
            },
            {
                texto: 'Universo programado', correto: true
            }
        ]
    },
    {
        questao: 'O desenvolvimento web é divertido?',
        respostas: [
            {
                texto: 'Tipo', correto: true 
            },
            {
                texto: 'SIM!!!', correto: true 
            },
            {
                texto: 'Não', correto: false
            },
            {
                texto: 'EU NÃO SEI', correto: false
            }
        ]
    },
    {
        questao: 'Quanto é 4 * 2?',
        respostas: [
            {
                texto: '6', correto: false
            },
            {
                texto: '8', correto: true
            }
        ]
    }
]