let stringEntrada = ['4, 9, 2', '3, 5, 7', '8, 1, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
    
}

function principal() {

    const s = Array(3);

    for(let indice = 0; indice < 3; indice += 1) {

        s[indice] = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const resultado = formingMagicSquare(s);

    console.log(resultado);
}

principal();

function formingMagicSquare(s) {

    let quadradoMagico = [
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    ];

    let maxValor = Number.MAX_VALUE;

    // iterando sobre array quadrado magico
    for(let index = 0; index < quadradoMagico.length; index += 1) {

        let min = 0;

        // iterando sobre array de linhas do quadrado magico
        for(let linha = 0; linha < s.length; linha += 1) {

            // iterando sobre array de colunas do quadrado magico
            for(let coluna = 0; coluna < s.length; coluna += 1) {

                // recebendo o valor minimo absoluto array de entrada - array quadrado magico
                min += Math.abs(s[linha][coluna] - quadradoMagico[index][linha][coluna]);
            }
        }

        // comparando valor maximo e minimo
        maxValor = Math.min(maxValor, min);
    }

    // retornando valor maximo
    return maxValor;
}

// function formingMagicSquare(s) {

//     let quadradoMagico = 
//     [[[8, 1, 6], [3, 5, 7], [4, 9, 2]], 
//     [[6, 1, 8], [7, 5, 3], [2, 9, 4]], 
//     [[4, 9, 2], [3, 5, 7], [8, 1, 6]], 
//     [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
//     [[8, 3, 4], [1, 5, 9], [6, 7, 2]], 
//     [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
//     [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
//     [[2, 7, 6], [9, 5, 1], [4, 3, 8]]];

//     let min = 10000;

//     for(let indice = 0; indice < 8; indice += 1) {

//         let soma = 0;

//         for(let linha = 0; linha < 3; linha += 1) {

//             for(let coluna = 0; coluna < 3; coluna += 1) {

//                 soma += Math.abs(s[linha][coluna] - quadradoMagico[indice][linha][coluna]);
//             }
//         }

//         if(soma < min) {

//             min = soma;
//         }
//     }

//     return min;
// }

