let stringEntrada = ['5, 3', '4, 2, 6, 1, 10'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = workbook(n, k, arr);

    // número de problemas especiais na pasta de trabalho
    console.log(resultado); // saída: 4
}

principal();

function workbook(n, k, arr) { // n = 5, k = 3, arr = (5) [4, 2, 6, 1, 10]

    let resultado = 0;
    let pagina = 1;

    for(let i of Array.from({ length: n}, (value, index) => index)) { // n = 5

        const problemas = arr[i]; // problemas = 4, arr = (5) [4, 2, 6, 1, 10]

        for(let j of Array.from({ length: problemas}, (value, index) => index + 1)) {

            j === pagina && resultado++; // pagina = 1, resultado = 1
            j !== problemas && !(j % k) && pagina++;
        }
        pagina++;
    }
    return resultado;
}