let adicionar = function(x, y) {
    return x + y
}
console.log(adicionar(10, 20));

let adicionar1 = (x, y) => x + y

console.log(adicionar1(10, 20));

let adicionar2 = (x, y) => {
    return x = y
}

console.log(typeof adicionar2);
console.log(adicionar2 instanceof Function);

// numeros
let numeros  = [4, 2, 6]

numeros.sort(function(a, b) {
    return b - a 
})
console.log(numeros);

let numeros1 = [4, 2, 6]

numeros1.sort((a, b) => b - a)

console.log(numeros1);

// com parametros
let nomes = ['Bob', 'Bunny', 'Peter']
let tamanhos = nomes.map(nome => nome.length)

console.log(tamanhos);

// com objeto literal
let setCor = function(cor) {
    return {
        value: cor
    }
}
let corDeFundo = setCor('Vermelho')

console.log(corDeFundo.value);

// com valor this
function Carro() {
    this.velocidade = 0

    this.acelerar = function(velocidade) {
        this.velocidade = velocidade

        setTimeout(() => {
            console.log(this.velocidade);
        }, 1000);
    }
}
let carro = new Carro()
carro.acelerar(50)