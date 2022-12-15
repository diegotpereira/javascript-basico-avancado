let stringEntrada = ['4', '2', '3', '4', '1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    var n = parseInt(lerEntrada());
    var cabecalho = null;
    var minhaLista = new Solucao();

    for(let i = 0; i < n; i++) {

        var dado = parseInt(lerEntrada());
        cabecalho = minhaLista.inserir(cabecalho, dado);
    }
    minhaLista.exibir(cabecalho);
}

principal();

function Node(dado) {

    this.dado = dado;
    this.proximo = null;
}

function Solucao (){

    this.inserir = function(cabecalho, dado) { // cabecalho = null, dado = 2

        var novoNode = new Node(dado); // novoNode = Node { dado: 2, proximo: null}, dado = 2

        if(cabecalho === null || typeof cabecalho === 'undefined') { // cabecalho = null

            cabecalho = novoNode;

        } else if(cabecalho.proximo === null) {

            cabecalho.proximo = novoNode;

        } else {

            var proximo = cabecalho.proximo;

            while(proximo.proximo) {

                proximo = proximo.proximo;
            }

            proximo.proximo = novoNode;
        }

        return cabecalho;
    }
    this.exibir = function(cabecalho) {

        var inicial = cabecalho;

        while (inicial) {
            
            console.log(inicial.dado + " ");
            inicial = inicial.proximo;
        }
    }
}