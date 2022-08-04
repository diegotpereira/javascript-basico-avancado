const entrada = document.getElementById('entrada')
const botoes = document.querySelectorAll('#num-btn')
const resultadosDiv = document.getElementById('resultados')
const foneBtn = document.getElementById('fone-botao')

botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {

        let numero 

        if (e.target.tagName == 'SPAN' || e.target.tagName == 'P') {
            numero = e.target.parentElement.attributes.numero.value
        } else {
            numero = e.target.attributes.numero.value 
        }
        entrada.value += numero
        
    })
})

function exibirResultados(entrada) {
    let resposta = movelVerificar(entrada)

    if (resposta) {
        
        resultadosDiv.innerHTML = 'Número de telefone válido! 😃'
    } else {

        resultadosDiv.innerHTML = 'Número de telefone inválido! 😕'
    }
}

entrada.addEventListener('keydown', (e) => {

    if (e.keyCode === 13) {
        exibirResultados(e.target.value)
    }
})

foneBtn.addEventListener('click', () => {
    exibirResultados(entrada.value)
})

function movelVerificar(str) {

    let verificacaoColchetes = /[(]\d{3}[)]/
    let verifiqueInicio = /^([(]\d{3}[)])/
    let verifiqueOutrosCaracter = /^[-]|[^\s-\d)(]/
    let espaco = /[\s-]/g
    let verifiqueCodigoPais = /^1/
    let simple = str.replace(espaco, '')

    if (verifiqueOutrosCaracter.test(str)) {
        
        return false 
    } else {

        if (simple.length === 13
            && verifiqueCodigoPais.test(simple)
                && verificacaoColchetes.test(simple)) {
            
                    return true
        } else if (simple.length === 12
            && verifiqueInicio.test(simple)) {
            
                return true
        } else if (simple.length === 11
            && verifiqueCodigoPais.test(simple)) {
            
                return true
        } else if (simple.length === 10) {
            
            return true
        }
    }
    return false
}