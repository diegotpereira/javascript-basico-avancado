const pessoa = {
    nome: 'Diego',
    sobrenome: 'Pereira'
}
function saudar(saudando, mensagem) {
    return `${saudando} ${this.nome}. ${mensagem}`
}

let resultado = saudar.apply(pessoa, ['Olá', 'Como vai você?'])

console.log(resultado);

// Função de empréstimo
const computador = {
    nome: 'MacBook',
    estaLigado: false,
    ligar() {
        this.estaLigado = true 

        return `O ${this.nome} está ligado`
    },
    desligar() {
        this.estaLigado = false

        return `O ${this.nome} está desligado`
    }
}
const servidor = {
    nome: 'Dell PowerEdge T30',
    estaLigado: false 
}

let resultado1 = computador.ligar.apply(servidor)

console.log(resultado1);

// usando metodo apply()
let array = [1, 2, 3]
let numeros = [4, 5, 6]

array.push.apply(array, numeros)

console.log(array);