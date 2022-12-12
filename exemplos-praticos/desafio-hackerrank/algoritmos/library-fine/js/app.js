

let entradaString = ['9, 6, 2015', '6, 6, 2015'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const d1 = parseInt(multiplaEntrada[0], 10);
    const m1 = parseInt(multiplaEntrada[1], 10);
    const y1 = parseInt(multiplaEntrada[2], 10);

    const segundaMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const d2 = parseInt(segundaMultiplaEntrada[0], 10);
    const m2 = parseInt(segundaMultiplaEntrada[1], 10);
    const y2 = parseInt(segundaMultiplaEntrada[2], 10);

    const resultado = calcAluguel(d1, m1, y1, d2, m2, y2);

    console.log(resultado);
}

principal();

function calcAluguel(d1, m1, y1, d2, m2, y2) {

    if(y1 === y2 && m1 === m2 && d1 > d2) {

        return (15 * (d1 - d2));

    } else if(y1 === y2 && m1 > m2) {

        return 500 * (m1 - m2);

    } else if(y1 > y2) {

        return 10000;

    } else if(y1 <= y2 || m1 <= m2 || d1 <= d2) {

        return 0;
    }
}