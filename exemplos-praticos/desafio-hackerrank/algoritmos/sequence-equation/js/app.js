let stringEntrada = ['3', '2, 3, 1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const p = lerEntrada().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

    const resultado = permutacaoEquacao(p);

    console.log(resultado); // saida: [2, 3, 1]
}

principal();

function permutacaoEquacao(p) { // p = (3) [2, 3, 1]

    let rm = p.reduce((a, e, i) => { // rm = {1: 3, 2: 1, 3: 2}, p = (3) [2, 3, 1]

        a[e] = i + 1; // a = {2: 1}, e = 2, i = 0

        return a;

    }, {});
    
    let ret = p.map((e, i) => rm[rm[i + 1]]); // ret = (3) [2, 3, 1], p = (3) [2, 3, 1], rm = {1: 3, 2: 1, 3: 2}

    //  valores de y para todos x na sequência aritmética 1 para n
    return ret;
}