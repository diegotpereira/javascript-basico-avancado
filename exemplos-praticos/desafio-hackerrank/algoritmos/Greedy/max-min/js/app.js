let stringEntrada = ['7', '3', '10', '100', '300', '200', '1000', '20', '30'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const  k = parseInt(lerEntrada().trim(), 10);

    let arr = [];

    for(let index = 0; index < n; index += 1) {

        const arrItem = parseInt(lerEntrada().trim(), 10);
        arr.push(arrItem);
    }

    const resultado = maxMin(k, arr);

    console.log(resultado + '\n'); // saída: 20
}

principal();

// function maxMin(k, arr) {

//     let min = Infinity;
//     arr.sort((a, b) => a - b); // arr = (7) [10, 20, 30, 100, 200, 300, 1000]

//     for(let index = 0; index < arr.length - k + 1; index += 1) // k = 3

//         min = Math.min(min, Math.abs(arr[index] - arr[index + k - 1]));

//     return min;
// }

function maxMin(k, arr) {

    const s = arr.sort((a, b) => a - b);
    let min = Number.MAX_VALUE;

    for(let index = 0; index < s.length - k + 1; ++index) {

        min = Math.min(min, s[index + k - 1] - s[index]);

    }

    return min;
}