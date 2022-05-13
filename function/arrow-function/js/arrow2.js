let cliente = {
    nome: 'Pedro',
    sobrenome: 'Filho',
    mostrar: function() {
        document.querySelector('#aqui').innerHTML = `Nome do Cliente: ${this.nome} ${this.sobrenome}`
    },
    arrow: () => {
        // Usando a estrutura arrow function como método, this.nome e this.sobrenome retornam undefined. 
        // Isto ocorre porque arrow functions não possuem o próprio "this".
        document.querySelector('#aqui').innerHTML = `Nome do Cliente: ${this.nome} ${this.sobrenome}`
    }
}