let stringEntrada = ['5, 2', '1, 5, 3, 4, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = pairs(k, arr);

    console.log(resultado + '\n');
}

principal();

// function pairs(k, arr) {

//     let contar = 0;

//     for(let index = 0; index < arr.length; index += 1) {

//         for(let compare = index + 1; compare < arr.length; compare += 1) {

//             if (Math.abs(arr[index] - arr[compare] === k || arr[compare] - arr[index] === k )) {
                
//                 contar++;
//             }
//         }
//     }

//     return contar;
// }


function pairs(k, arr) {

    let diferente = '';
    let novoArray = [];

    for(let index = 0; index < arr.length; index += 1) {

        diferente = arr[index] - k;
        novoArray[index] = diferente;
    }

    let contar = 0;

    for(let index = 0; index < novoArray.length; index += 1) {

        for(let compare = 0; compare < arr.length; compare += 1) {

            if(novoArray[index] === arr[compare]) 

                contar++;
            
        }
    }
    return contar;
}