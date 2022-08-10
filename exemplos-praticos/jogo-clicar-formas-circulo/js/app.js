const mensagem = document.querySelector('.mensagem')
const botao = document.querySelector('button')
const jogoArea = document.querySelector('.jogoArea')
const resultados = document.querySelector('.resultados')
const direcoes = document.querySelector('.direcoes')

let emJogo = false 
let jogarArea = {}
let contar = 0

exibirMensagem('Clique em Iniciar para começar!')

botao.addEventListener('click', function() {

    // iniciar o jogo
    emJogo = true 

    // esconder botao
    botao.style.display = 'none'

    direcoes.style.display = 'none'
    resultados.innerHTML = ''
    contar = 0

    exibirMensagem('Iniciando...')

    exibirCaixa()

})

function exibirMensagem(notificacao) {
    mensagem.innerHTML = `<h3>${notificacao}</h3>`
}

function exibirCaixa() {
    jogarArea.timer = setTimeout(minhaCaixa, aleatorio(4000))
}

function minhaCaixa() {

    // criar um elemento de forma
    let elemento = document.createElement('div')

    elemento.classList.add('caixa')
    elemento.style.top = aleatorio(definirMargemSuperior()) + 'px'
    elemento.style.left = aleatorio(definirMargemEsquerda()) + 'px'
    elemento.style.backgroundColor = getCor()
    elemento.start = new Date().getTime()
    elemento.addEventListener('click', acertar)
    jogoArea.appendChild(elemento)

}
function aleatorio(number) {
    let tempVal = Math.floor(Math.random() * number)

    return tempVal
}

function definirMargemSuperior() {

    let maxAltura = jogoArea.clientHeight

    if (maxAltura <= 100) {
        maxAltura = maxAltura + 200
    } else {
        maxAltura = maxAltura - 200
    }
    return maxAltura
}
function definirMargemEsquerda() {

    let maxLargura = jogoArea.clientWidth

    if (maxLargura <= 100) {
        maxLargura = maxLargura + 200
    } else {
        maxLargura = maxLargura - 200
    }

    return maxLargura
}

// Escolha uma cor hexadecimal aleatória
function getCor() {

    function col() {

        let hex = random(255).toString(16)

        return('0' + String(hex)).substr(-2)
    }
}
function acertar(e) {
    let start = e.target.start
    let final = new Date().getTime()
    let duracao = (final - start) / 1000
    let maxDuracao = 1

    clearTimeout(jogarArea.timer)
    exibirMensagem('Você levou ' + duracao + ' segundos para clicar')

    if (duracao > maxDuracao) {
        
        jogoArea.children[0].remove()
        resultados.innerHTML = `Muito devagar! <span id="perdeu">Você perdeu!</span> Sua pontuação foi ${contar}.<br> Clique no botão iniciar para jogar novamente!`
        redefinirJogo()
    } else {

        jogoArea.children[0].remove()
        jogarArea.timer = setTimeout(minhaCaixa, aleatorio(4000))
        contar++

        if (contar === 15) {
            resultados.innerHTML = `Você conseguiu ${exbirPontuacao(contar)}! <span id="vencedor"> Você venceu!</span> <br> Clique em iniciar para jogar novamente`
            redefinirJogo()
        } else {
            resultados.innerHTML = `Pontuação: ${exbirPontuacao(contar)} de 15`
        }
    }
}
function exbirPontuacao(contar) {
    return contar
}
function redefinirJogo() {
    clearTimeout(jogarArea.timer)
    emJogo = false
    botao.style.display = 'block'
}