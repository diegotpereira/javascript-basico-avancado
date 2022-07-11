function adicionar(x, y) {
    return x + y
}

let resultado = adicionar(10, 20)

console.log(resultado);

function add(x, y) {
    return x + y
}

let resultado1 = add.call(this, 10, 20)

console.log(resultado1);

var saudacao = 'Olá'

var mensagem = {
    saudacao: 'Oi'
}
function dizer(nome) {
    console.log(this.saudacao + ' ' + nome);
}

dizer.call(this, 'Diego')
dizer.call(mensagem, 'Diego')

// Usando o método JavaScript call() para encadear 
// construtores para um objeto
function Caixa(height, width) {
    this.height = height
    this.width = width
}
function Ferramenta(height, width, cor) {
    Caixa.call(this, height, width)
    this.cor = cor
}
let ferramenta = new Ferramenta('red', 100, 200)

console.log(ferramenta);

// Usando o método JavaScript call() para empréstimo de função
const carro = {
    name: 'carro',
    iniciar() {
        console.log('iniciar o ' + this.nome);
    },
    acelerar() {
        console.log('Acelerando o ' + this.nome);
    },
    parar() {
        console.log('Parar o ' + this.nome);
    }
}

const aeronave = {
    nome: 'aeronave',
    voar() {
        console.log('Voando');
    }
}
carro.iniciar.call(aeronave)
carro.acelerar.call(aeronave)
aeronave.voar()

// filtrando objeto
function ehImpar(number) {
    return number % 2
}
function getNumeroImpar() {
    return Array.prototype.filter.call(arguments, ehImpar)
}

let resultado2 = getNumeroImpar(10, 1, 3, 4, 8, 9)

console.log(resultado2);