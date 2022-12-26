let stringEntrada = ['5', '2, 1, 3, 1, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = runningTime(arr);

    console.log(resultado);
}

principal();

// function runningTime(arr) {

//     let contar = 0;

//     for(let index = 0, iTotal = arr.length - 1; index < iTotal; index += 1) {

//         if (arr[index] > arr[index + 1]) {
            
//             let valor = arr[index];

//             arr[index] = arr[index + 1];
//             arr[index + 1] = valor;
//             contar += 1;
//             index = -1;
//         }
//     }
//     return contar;
// }


// function runningTime(arr) {

//     let contar = 0;
    
//     for(let index = 1; index < arr.length; index += 1) {

//         let atualValor = arr[index];

//         let j;

//         for(j = index - 1; j >= 0 && arr[j] > atualValor; j -= 1) {

//             arr[j + 1] = arr[j];
//             contar += 1;
//         }

//         arr[j + 1] = atualValor;
//     }

//     return contar;
// }


// function runningTime(arr) {
//     let n = arr.length;
//     let contar = 0;

//         for (let i = 1; i < n; i++) {
//             // Choosing the first element in our unsorted subarray
//             let current = arr[i];
//             // The last element of our sorted subarray
//             let j = i-1; 
//             while ((j > -1) && (current < arr[j])) {
//                 arr[j+1] = arr[j];
//                 j--;
//                 contar += 1;
//             }
//             arr[j+1] = current;
//         }
//     return contar;
// }

function runningTime(arr) {

    let contar = 0;

    for (let index = 1; index < arr.length; index += 1) {

        const element = arr[index];
        let j = index - 1;

        while (j >= 0 && arr[j] > element) {
            
            arr[j + 1] = arr[j];
            j = j - 1;
            contar += 1;
        }
        arr[j + 1] = element;
    }

    return contar;
}