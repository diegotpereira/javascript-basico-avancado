let stringEntrada = ['2', '3, 9', '17, 24'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const a = parseInt(primeiraMultiplaEntrada[0], 10);
        const b = parseInt(primeiraMultiplaEntrada[1], 10);

        const resultado = quadrados(a, b);

        console.log(resultado);
    }
}

principal();

function quadrados(a, b) { // a = 3, b = 9

    // Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
    // Math.sqrt() retorna a raiz quadrada de um número (x).
    //  valor inicial e final que descreve um intervalo de números inteiros
    let inicial = Math.ceil(Math.sqrt(a)); // inicial = 2, a = 3 / inicial = 5, a = 17
    let final = Math.floor(Math.sqrt(b)); // final = 3, b = 9 / final = 4, b = 24
    // determinar o número de inteiros quadrados dentro desse intervalo.
    let contar = 0;

    for(let i = inicial; i <= final; i++) { // inicial = 2, final 3 / inicial = 5, final = 4

        const ehInteiro = Number.isInteger(i); // true

        if(ehInteiro) // true

            contar++;
        
    }

    return contar; // 0 2
}