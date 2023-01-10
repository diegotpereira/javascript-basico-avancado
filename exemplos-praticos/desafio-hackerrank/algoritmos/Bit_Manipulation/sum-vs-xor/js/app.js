let stringEntrada = ['5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    const resultado = sumXor(n);

    console.log(resultado + '\n'); // saída: 2
}

principal();

// function sumXor(n) {

//     let contarZeros = 0;

//     //  conversão em uma string binária
//     let biStr = n.toString(2);

//     for(let index = 0; index < biStr.length; index += 1) {

//         if(biStr[index] === '0') {

//             contarZeros++;
//         }
//     }

//     if (n === 0) {
        
//         contarZeros = 0;

//     }

//     return Math.pow(2, contarZeros);
// }


function sumXor(n) {

    if (n === 0) {
        
        return 1;
    }

    const binario = (BigInt(n)).toString(2); // binario = 101, n = 5

    // match() retorna uma correspondência entre uma string com uma expressão regular.
    const contar = (binario.match(/0/g) || []).length; // contar = 1;

    return Math.pow(2, contar);
}


// function sumXor(n) {

//     let numZeros = 0;

//     while (n != 0) {
        
//         if(n % 2 == 0) {

//             numZeros += 1;
//         }

//         n = n / 2;
//     }

//     return Math.pow(2, numZeros);
// }