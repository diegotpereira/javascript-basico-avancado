let stringEntrada = ['3, 2, 3', '1, 2, 3', '0', '1', '2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraEntrada[0], 10);
    const k = parseInt(primeiraEntrada[1], 10);
    const q = parseInt(primeiraEntrada[2], 10);

    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    let queries = [];

    for(let i = 0; i < q; i++) {

        const qItem = parseInt(lerEntrada().trim(), 10);

        queries.push(qItem);
    }

    const resultado = rotacaoMatrizCircular(a, k, queries);

    console.log(resultado);
}

principal();

function rotacaoMatrizCircular(a, k, queries) { // a = (3) [1, 2, 3], k = 2, queries = (3) [0, 1, 2]

    for(let i = 0; i < k; i++) { // k = 2

        a.unshift(a.pop()); // a = (3) [2, 3, 1]
    }

    let ar = []; // ar (3) [2, 3, 1]

    for(let i = 0; i < queries.length; i++) { // (3) [0, 1, 2]

        ar.push(a[queries[i]]); // ar = (3) [2, 3, 1], a = (3) [2, 3, 1], queries = (3) [0, 1, 2];
    }

    return ar;
}