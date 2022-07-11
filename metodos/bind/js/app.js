let pessoa = {
    nome: 'Diego Pereira',
    getNome: function() {
        console.log(this.nome);
    }
}

// let f = pessoa.getNome

setTimeout(function() {
    pessoa.getNome()
}, 1000)

// Usando bind() para emprestar métodos de um objeto diferente
let corredor = {
    nome: 'Corredor',
    rodar: function(velocidade) {
        console.log(this.nome + ' corre em ' + velocidade + 'km/h.');
    }
}

let aviador = {
    nome: 'Aviador',
    voar: function(velocidade) {
        console.log(this.nome + 'voando em ' + velocidade + 'km/h');
    }
}

let rodar = corredor.rodar.bind(aviador, 20)

rodar()