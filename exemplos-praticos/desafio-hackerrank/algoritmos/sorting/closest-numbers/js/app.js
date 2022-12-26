let stringEntrada = ['10', '-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854']
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = closestNumbers(arr);

    console.log(resultado);
}

principal();

function closestNumbers(arr) {

    // ordenando array
    arr.sort((a, b) => a - b);

    // resultado da consulta
    let resultado = [];

    // minima diferença entre dois elementos do array
    let minimaDiferenca = arr[1] - arr[0];

    for(let index = 2; index < arr.length; index += 1) {

        // retorna o menor numero entre atual e o anterior
        minimaDiferenca = Math.min(minimaDiferenca, arr[index] - arr[index - 1]);
    }

    for(let index = 1; index < arr.length; index += 1) {

        // se indice do array menos anteior for estritamente igual minima diferenca
        if(arr[index] - arr[index - 1] === minimaDiferenca) {

            resultado.push(arr[index - 1], arr[index]);
        }
    }

    return resultado;
}
