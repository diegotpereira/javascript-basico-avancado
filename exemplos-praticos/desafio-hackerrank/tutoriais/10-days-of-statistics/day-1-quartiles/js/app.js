let stringEntrada = ['9', '3, 7, 8, 5, 12, 14, 21, 13, 18'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {


    const n = parseInt(lerEntrada().trim(), 10);
    const data = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resposta = quartiles(data);

    console.log(resposta.join('\n') + '\n');
    // console.log(resposta);
}

principal();

// function quartiles(arr) {

//     let esquerda;
//     let direita;
//     let meio;
//     let metade;
//     let quarter;

//     arr = arr.sort((a, b) => a - b);
//     metade = arr.length / 2;

//     if (Number.isInteger(metade)) {
        
//         meio = (arr[metade - 1] + arr[metade]) / 2;

//     } else {

//         metade = Math.floor(metade);
//         meio = arr.splice(metade, 1);
//     }

//     quarter = metade / 2;

//     if (Number.isInteger(quarter)) {
        
//         esquerda = (arr[quarter - 1] + arr[quarter]) / 2;
//         direita = (arr[metade + quarter - 1] + arr[metade + quarter]) / 2;

//     } else {

//         quarter = Math.floor(quarter);
//         esquerda = arr[quarter];
//         direita = arr[quarter + metade];
//     }

//     return [esquerda, meio, direita];
// }


function quartiles(arr) {

    arr.sort((a, b) => a - b); // arr = (9) [3, 5, 7, 8, 12, 13, 14, 18, 21]
    const comprimento = arr.length; // comprimento = 9
    const posicaoIntermediaria = Math.floor(comprimento / 2); // posicaoIntermediaria = 4
    const resultado = [media(arr, 0, posicaoIntermediaria - 1), media(arr, 0, comprimento - 1)]; // resposta = (2) [6, 12]

    if (comprimento % 2 === 0) {
        
        resultado.push(media(arr, posicaoIntermediaria, comprimento - 1)); // resultado = (2) [6, 12]

    } else {

        resultado.push(media(arr, posicaoIntermediaria + 1, comprimento - 1)); // resultado = (3) [6, 12, 16]
    }

    return resultado;
}

function media(arr, inicial, final) {

    const comprimento = final - inicial + 1;
    const posicao = Math.floor(inicial + comprimento / 2);

    if (comprimento % 2 !== 0) {
        
        return arr[posicao];
    }

    return (arr[posicao - 1] + arr[posicao]) / 2;
}
