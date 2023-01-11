let stringEntrada = ['2', '3, 3, 2, 1', '1, 2', '3, 1', '2 3', '6, 6, 2, 5', '1, 3', '3, 4', '2, 4', '1, 2', '2, 3', '5, 6'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < q; index += 1) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const n = parseInt(primeiraMultiplaEntrada[0], 10);
        const m = parseInt(primeiraMultiplaEntrada[1], 10);
        const c_lib = parseInt(primeiraMultiplaEntrada[2], 10);
        const c_road = parseInt(primeiraMultiplaEntrada[3], 10);

        let cidades = Array(m);

        for (let index = 0; index < m; index += 1) {
            
            cidades[index] = lerEntrada().replace(/\s+$/g, '').split(' ')
                                                              .map(cidadesTemp => parseInt(cidadesTemp, 10));
            
        }

        const resultado = roadsAndLibraries(n, c_lib, c_road, cidades);

        console.log(resultado + '\n');
        
    }
}

principal();

function roadsAndLibraries(n, c_lib, c_road, cidades) {

    let uf = new UniaoEncontrar(n);

    for (let index = 0, cLen = cidades.length; index <cLen; index += 1) {
        
        let cidade = cidades[index];
        uf.union(cidade[0] - 1, cidade[1] - 1);
        
    }

    let grupos = uf.obterGrupos();
    let custo1 = n * c_lib;
    let custo2 = grupos.length * c_lib;

    for(let grupo of grupos) {

        let numEstradas = uf.obterNumEmGrupo(grupo) - 1;
        custo2 += c_road * numEstradas;
    }

    return (custo1 < custo2 ? custo1 : custo2);
}

class UniaoEncontrar {

    constructor(numNodes) {

        this.parentes = new Array(numNodes);
        this.tamanho = new Array(numNodes);

        for (let index = 0; index < numNodes; index += 1) {
            
            this.parentes[index] = index;
            this.tamanho[index] = 1;
            
        }
    }

    obterRoot(node) {

        while (this.parentes[node] != node) {
            
            node = this.parentes[node];
        }

        return node;
    }

    uniao(node1, node2) {

        let root1 = this.obterRoot(node1);
        let root2 = this.obterRoot(node2);

        if (root1 != root2) {
            
            if (this.tamanho[root1] < this.tamanho[root2]) {
                
                this.parentes[root1] = root2;
                this.tamanho[root2] += this.tamanho[root1];

            } else {

                this.parentes[root2] = root1;
                this.tamanho[root1] += this.tamanho[root2];
            }
        }
    }
    encontrar(node1, node2) {

        return (this.obterRoot(node1) == this.obterRoot(node2));
    }

    obterGrupos() {

        let grupos = this.parentes.filter(function(elemento, indice) {

            return elemento == indice;
        });

        return grupos;
    }

    obterNumEmGrupo(grupo) {

        return this.tamanho[grupo];
    }
}