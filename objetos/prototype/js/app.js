function Pessoa(nome, sobrenome, idade, genero, interesses) {
    // propriedades e metodos
    this.nome = nome 
    this.sobrenome = sobrenome
    this.idade = idade
    this.genero = genero
    this.interesses = interesses
}

var pessoa1 = new Pessoa('Bob', 'Marley', 32, 'masculino', ['musica', 'futebol'])

pessoa1.valueOf()

// console.log(pessoa1);