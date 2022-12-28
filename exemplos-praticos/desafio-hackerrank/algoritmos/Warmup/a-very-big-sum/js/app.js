let stringEntrada = ['5', '1000000001, 1000000002, 1000000003, 1000000004, 1000000005'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const arrContar = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = aVeryBigSum(arr);

    console.log(resultado);
}

principal();

function aVeryBigSum(arr) {

    let soma = 0;

    for(let index = 0; index < arr.length; index += 1) {

        soma = soma + arr[index];
    }

    return soma;
}