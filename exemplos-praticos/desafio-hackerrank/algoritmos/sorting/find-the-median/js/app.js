let stringEntrada = ['7', '0, 1, 2, 4, 6, 5, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = findMedian(arr);

    console.log(resultado);
}

principal();

function findMedian(arr) {

    arr.sort((a, b) => a - b);

    return arr[(arr.length / 2).toFixed(0) - 1];
}