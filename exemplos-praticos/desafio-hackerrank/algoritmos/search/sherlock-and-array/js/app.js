let stringEntrada = ['2', '3', '1, 2, 3', '4', '1, 2, 3, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);
        const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const resultado = balancedSums(arr);

        console.log(resultado + '\n');
    }
}

principal();

// function balancedSums(arr) {

//     let somaTotal = 0
//     let somaAtual = 0;

//     for(let index = 0; index < arr.length; index += 1) {

//         somaTotal += arr[index];
//     }

//     for(let index = 0; index < arr.length; index += 1) {

//         somaTotal -= arr[index];

//         if(somaAtual == somaTotal) 

//             return 'YES';

//         somaAtual += arr[index];
//     }

//     return 'NO';
// }


function balancedSums(arr) {

    let arr1 = [];
    arr1[0] = arr[0];
    let arr2 = [];
    arr2[arr.length - 1] = arr[arr.length - 1];

    for(let index = 1; index < arr.length; index += 1) {

        arr1[index] = arr1[index - 1] + arr[index];
    }

    for(let index = arr.length - 2; index >= 0; index -= 1) {

        arr2[index] = arr[index] + arr2[index + 1];
    }

    for(let index = 0; index < arr.length; index += 1) {

        if(arr1[index] === arr2[index]) {

            return 'YES';
        }
    }

    return 'NO';
}