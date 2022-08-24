const estudante = {

    nome: 'Joao',
    idade: 20,
    passatempo: ['ler', 'jogos', 'programacao'],
    comprimentar: function() {

        console.log('Olá pessoal.');
    },
    pontuacao: {
        matematica: 90,
        ciencia: 80
    }
}
console.log(estudante);

// deletando propriedade de um objeto

delete estudante.comprimentar
delete estudante['pontuacao']

console.log(estudante);