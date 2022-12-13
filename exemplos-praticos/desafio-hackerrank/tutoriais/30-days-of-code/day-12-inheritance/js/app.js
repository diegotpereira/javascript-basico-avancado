let stringEntrada = ['Heraldo','Memelli', '8135627', '2', '100, 80'];
let entradaAtual = 0;

function lerEntrada(){

    return stringEntrada[entradaAtual++];
}

class Pessoa {

    constructor(nome, sobrenome, identificacao) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idNumero = identificacao;
    }

    exibirPessoa() {

        console.log("nome: " + this.nome + ", " + "sobrenome: " + this.sobrenome + "\nID: " + this.idNumero);

    }
}

class Estudante extends Pessoa {

    constructor(nome, sobrenome, id, pontuacao) {

        super(nome, sobrenome, id);
        this.pontuacao = pontuacao;
    }

    // método char calcular() calcula a média de um objeto Aluno 
    // e retorna o caractere de nota representativo de sua média calculada:
    calcular() {

        var soma  = this.pontuacao.reduce((acc, num) => {

            acc += num;

            return acc;
        });

        var media = soma / this.pontuacao.length;

        if(media >= 90) {

            return 'O';

        } else if(media >= 80) {

            return 'E';

        } else if(media >= 70) {

            return 'A';

        } else if(media >= 55) {

            return 'P';

        } else if(media >= 40) {

            return 'D';

        } else {

            return 'T';
        }
    }
}


function principal() {

    let nome = lerEntrada();
    let sobrenome = lerEntrada();
    let id = +lerEntrada();
    let numPontuacao = +lerEntrada();
    let testePontuacao = new Array(numPontuacao);

    for(var i = 0;  i < numPontuacao; i++) {

        testePontuacao[i] = +lerEntrada();
    }


    let s = new Estudante(nome, sobrenome, id, testePontuacao);

    s.exibirPessoa();
    s.calcular();

    console.log('Avaliar: ' + s.calcular());
}

principal();