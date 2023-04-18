let stringEntrada = ['2', '2, 5', '1, 2', '3, 5', '2, 1, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        
        const primeira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const n = parseInt(primeira_multipla_entrada[0], 10);

        const k = parseInt(primeira_multipla_entrada[1], 10);

        const c = lerEntrada().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

        const resultado = pokerNim(k, c);

        console.log(resultado + '\n');
        
    }
}

principal();

// Função que recebe um número k e um array de inteiros c
export function pokerNim(k, c) {

    // Variável que armazenará o XOR dos elementos do array
    let xorSoma = 0;

    // Loop para calcular o XOR dos elementos do array
    for (let index = 0; index < c.length; index++) {

        xorSoma ^= c[index];
        
    }

    // Verifica se o resultado da XOR é diferente de zero e retorna "First"
    if (xorSoma != 0) {
        
        return "First"

    } else {


        // Caso contrário, retorna "Second"
        return "Second"
    }

}

// export function pokerNim(k, c) {

//     // Inicializa a variável xor com o primeiro elemento do array
//     let xor = c[0];

//     // Realiza a operação XOR em todos os elementos do array, a partir do segundo elemento
//     for (let index = 1; index < c.length; index++) {
        
//         xor ^= c[index];
        
//     }


//     // Retorna "First" caso a soma do XOR de todos os elementos seja diferente de 0, caso contrário retorna "Second"
//     return xor != 0 ? "First" : "Second";
// }





