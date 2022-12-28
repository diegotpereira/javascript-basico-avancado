let stringEntrada = ['3','3', '3, 1, 2', '4', '1, 3, 4, 2', '5', '1, 2, 3, 5, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);
        const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        
        const resultado = larrysArray(arr);

        console.log(resultado.split('') + '\n');
    }
}

principal();

// function larrysArray(arr) {

//     let podeSerClassificado = 0;

//     for(let index = 0; index < arr.length - 1; index += 1) {

//         for(let compare = index + 1; compare < arr.length; compare += 1) {

//             if(arr[index] > arr[compare]) {

//                 podeSerClassificado++;
//             }

//         }
//     }

//     return ((podeSerClassificado % 2 === 0) ? 'SIM' : 'NAO');
// }


function larrysArray(arr) {

    return arr.reduce((trocas, a, i) => trocas += arr.slice(i + 1).reduce((contar, b) => a > b ? contar += 1 : contar, 0), 0) % 2 ? 'NAO' : 'SIM';
}