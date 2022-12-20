let stringEntrada = ['6', '7, 1, 3, 4, 1, 7'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const a = lerEntrada().replace(/\s+$/g, '').split(' ')
                          .map(aTemp => parseInt(aTemp, 10));

    const resultado = minimumDistances(a);

    console.log(resultado);
}

principal();

function minimumDistances(a) {

    let resultado = 0;

    for(let i of Array.from({ length: a.length}, (value, index) => index)) { // a = (6) [7, 1, 3, 4, 1, 7]

        for(let j of Array.from({ length: a.length}, (value, index) => index + i + 1)) { // a = (6) [7, 1, 3, 4, 1, 7]

            ((a[i] === a[j] && !resultado) || (a[i] === a[j] && Math.abs(i - j) < resultado)) && (resultado = Math.abs(i - j)); // a =(6) [7, 1, 3, 4, 1, 7], resultado  = 3
        }
    }
    return !resultado ? - 1 : resultado;
}