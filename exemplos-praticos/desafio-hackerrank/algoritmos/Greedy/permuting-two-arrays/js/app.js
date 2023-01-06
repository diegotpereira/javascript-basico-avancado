let stringEntrada = ['2', '3, 10', '2, 1, 3', '7, 8, 9', '4, 5', '1, 2, 2, 1', '3, 3, 3, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < q; index += 1) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const n = parseInt(primeiraMultiplaEntrada[0], 10);
        const k = parseInt(primeiraMultiplaEntrada[1], 10);
        const A = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
        const B = lerEntrada().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

        const resultado = twoArrays(k, A, B);

        console.log(resultado + '\n');
    }
}

principal();

// function twoArrays(k, A, B) {

//     A.sort((a, b) => a -b);
//     B.sort((a, b) => b - a);

       // some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
//     if(A.some((v, i) => v + B[i] < k)) return 'NAO';

//     return 'SIM';
// }

function twoArrays(k, A, B) {

    let str;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
    A.every((v, i) => v + B[i] >= k) ? str = 'YES' : str = 'NO';

    return str;
}