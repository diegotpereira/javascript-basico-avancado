// programa para implementar a estrutura de dados da pilha
class Pilha {
    constructor() {
        this.itens = []
    }
    // adiciona o elemento na pilha
    adicionar(elemento) {
        return this.itens.push(elemento)
    }
    // remover elemento da pilha
    remover() {
        // se contem itens na pilha
        if (this.itens.length > 0) {
            return this.itens.pop()
        }
    }
    // visualiza o ultimo elemento
    espiar() {
        return this.itens[this.itens.length - 1]
    }
    // verifica se a pilha está vazia
    estahVazia() {
        return this.itens.length == 0
    }
    // verifica o tamanho da pilha
    tamanho() {
        return this.itens.length
    }
    // esvazia a pilha
    limpar() {
        this.itens = []
    }
}
let pilha = new Pilha()
pilha.adicionar(1)
pilha.adicionar(2)
pilha.adicionar(4)
pilha.adicionar(8)

console.log(pilha.itens);

pilha.remover()
console.log(pilha.itens);

console.log(pilha.espiar());

console.log(pilha.estahVazia());

console.log(pilha.tamanho());

pilha.limpar()

console.log(pilha.itens);