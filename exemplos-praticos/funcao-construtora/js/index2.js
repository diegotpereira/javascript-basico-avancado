// função construtora para classe pessoa
function Pessoa(primeira, ultima, idade, olho) {
    this.nome = primeira;
    this.sobrenome = ultima;
    this.idade = idade;
    this.corOlhos = olho;

    this.nomes = function() {
        return this.nome + " " + this.sobrenome
    };
    this.mostrarIdade = function() {
        return this.idade
    };
    this.mudarIdade = function(idade) {
        this.idade = idade
    }
}
// criando novos objetos a partir da classe Pessoa
let meuPai = new Pessoa('João', 'Silva', 50, 'castanho')
let minhaIrma = new Pessoa('Laura', 'Costa', 22, 'azul')
let minhaTia = new Pessoa('Carla', 'Dias', 60, 'verde')

// criando a função inicial
function start() {
    // mostrando nomes completos
    document.getElementById('pai').innerHTML =
        'Meu pai é ' + meuPai.nomes() + ' e tem ' + meuPai.mostrarIdade() + ' anos<br/>';
    document.getElementById('irma').innerHTML =
        'Minha irmã é ' + minhaIrma.nomes() + ' e tem ' + minhaIrma.mostrarIdade() + ' anos<br />';

    document.getElementById('tia').innerHTML =
        'Minha tia é ' + minhaTia.nomes() + ' e tem ' + minhaTia.mostrarIdade() + ' anos<br />';
}

// função pega valor digitado
function pegarValor(pessoa) {
    let novaIdade = document.querySelector('#muda').value
    pessoa.mudarIdade(novaIdade)
    start()
}