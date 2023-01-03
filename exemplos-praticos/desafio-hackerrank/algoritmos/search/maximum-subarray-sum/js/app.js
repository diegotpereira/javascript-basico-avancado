let stringEntrada = ['1', '5, 7', '3, 3, 9, 9, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < q; index += 1) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const n = parseInt(primeiraMultiplaEntrada[0], 10);
        const m = parseInt(primeiraMultiplaEntrada[1], 10);
        const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const resultado = maximumSum(arr, m);

        console.log(resultado);
    }
}

principal();

function maximumSum(arr, m) {

    let somas = [[-1, 0]];
    let somaMaxima = 0;

    for(let index = 0; index < arr.length; index += 1) {

        somas.push([index, (somas[index][1] + arr[index]) % m]);

        // Pode-se sempre calcular a diferença entre 0 e o elemento atual.
        somaMaxima = Math.max(somas[somas.length - 1][1], somaMaxima);
        
    }

    // // Classifica o array pelo valor da soma.
    somas.sort(function(a, b) {

        return a[1] - b[1];
    });

    for(let index = 0; index < somas.length; index += 1) {

        var originalIndex = somas[index][0];
        var somaAtual = somas[index][1];
        
        // Procura o primeiro elemento com maior soma com índice antes dele.
        var compare = index + 1;

        while (compare < somas.length && (somas[compare][0] >= originalIndex || somas[compare][1] === somaAtual)) {
            
            compare++;
        }

        // Se encontrarmos um, calcula a diferença negativa e atualiza max.
        if(compare < somas.length) {

            somaMaxima = Math.max(somaAtual - somas[compare][1] + m, somaMaxima);
        }
    }

    return somaMaxima;
}

// function somaMaxima(arr, n, m) {

//     let x = 0;
//     let prefixo = 0;
//     let maxNum = 0
//     let set = new Set();

//     set.add(0);

//     // Percorrendo a matriz.
//     for(let i = 0; i < n; i++) {

//         // Encontrando a soma do prefixo.
//         prefixo = (prefixo + arr[i]) % m;

//         // Encontrando o máximo da soma do prefixo.
//         maxNum = Math.max(maxNum, prefixo);

//         // Encontrando o iterador apontando para o primeiro
//         // elemento que não é menor que o valor
//         // "prefixo + 1", ou seja, maior que ou
//         // igual a este valor.
//         let it = 0;

//         for(let j of set.values()) {

//             if(j >= prefixo + 1) 

//                 it = j;
//         }

//         if(it != 0) {

//             maxNum = Math.max(maxNum, prefixo - it + m);
//         }

//         set.add(prefixo);
//     }
//     return maxNum;
// }

// let arr = [3, 3, 9, 9, 5];
// let n = 5;
// let m = 7;

// console.log(somaMaxima(arr, n, m));