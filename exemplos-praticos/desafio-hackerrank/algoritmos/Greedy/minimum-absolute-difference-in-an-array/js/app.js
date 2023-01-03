let stringEntrada = ['3', '3, -7, 0'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = minimumAbsoluteDifference(arr);

    console.log(resultado + '\n');
}

principal();

// function minimumAbsoluteDifference(arr) {

//     arr = arr.sort((a, b) => a - b); // arr = (3) [-7, 0, 3]
//     let diferenca = Math.abs(arr[0] - arr[1]); // diferenca = 7

//     return arr.reduce((a, c, i) => { // a = 7, c = -7, i = 0

//         const proximo = arr[i + 1];
//         const anterior = Math.abs(c - proximo);

//         if(anterior < a) 

//             a = anterior;

//         return a;
//     }, diferenca);
// }

// function minimumAbsoluteDifference(arr) {

//     let tmp = [...arr.sort((a,b) => a - b)];
//     let min = Math.abs(arr[0] - arr[1]);

//     for(let index = 1; index < tmp.length; index += 1) {

//         if (Math.abs(tmp[index] - tmp[index + 1]) < min) {
            
//             min = Math.abs(tmp[index] -  tmp[index + 1]);
//         }
//     }

//     return min;
// }


function minimumAbsoluteDifference(arr) {

    arr.sort((a, b) => a - b);
    let total = Infinity;

    for(let index = 1; index < arr.length; index += 1) 

        total = Math.min(total, Math.abs(arr[index - 1] - arr[index]));

    return total;
        
}