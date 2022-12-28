let stringEntrada = ['6', '1, 2, 3, 4, 10, 11'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const arContar = parseInt(lerEntrada().trim(), 10);
    const ar = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = simpleArraySum(ar);

    console.log(resultado);
}

principal();

function simpleArraySum(ar) {

    let soma = 0;

    for(let index = 0; index < ar.length; index += 1) {

        soma = soma + ar[index];
    }

    return soma;
}