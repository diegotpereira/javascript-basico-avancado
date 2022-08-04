'use strict'

// O método Math.trunc() retorna a parte inteira de um 
// número, descartando suas casas decimais.
let numeroSecreto = Math.trunc(Math.random() * 20) + 1
let pontuacao = 20
let pontuacaoMaxima = 0

console.log(numeroSecreto);

function exibirMensagem(msg) {

    document.querySelector('.mensagem').textContent = msg
}


//1 preciso selecionar o botão de verificação -> document.query('.verificar')
//2. eu preciso jogar o jogo quando for clicado
document.querySelector('.novamente').addEventListener('click', function() {

    pontuacao = 20

    document.querySelector('.pontuacao').textContent = 20
    document.querySelector('.pontuacaoMaxima').textContent = 0
    document.querySelector('body').style.backgroundColor = '#000'
    document.querySelector('.numero').textContent = '?'
    document.querySelector('.testar').value = ''

    exibirMensagem('Começa a jogar')

    numeroSecreto = Math.trunc(Math.random() * 20) + 1
})
document.querySelector('.verificar').addEventListener('click', function() {

    const testar = document.querySelector('.testar').value 

    if (testar < 1 || testar > 20) {
        exibirMensagem('entrada inválida')
    } else if(testar == numeroSecreto) {
        exibirMensagem('Número Correto')

        document.querySelector('.numero').textContent = numeroSecreto
        document.body.style.backgroundColor = '#34CC17'

        if (pontuacao > pontuacaoMaxima) {
            
            pontuacaoMaxima = pontuacao
            document.querySelector('.pontuacaoMaxima').textContent = pontuacaoMaxima
        }
    } else if (testar !== numeroSecreto) {
        
        if (pontuacao > 1) {
            
            exibirMensagem(testar > numeroSecreto ? 'Muito Alto' : 'Muito Baixo!')
            pontuacao--

            document.querySelector('.pontuacao').textContent = pontuacao
        } else {

            exibirMensagem('Você perdeu o jogo!')

            document.querySelector('.pontuacao').textContent = 0
        }
    }
})