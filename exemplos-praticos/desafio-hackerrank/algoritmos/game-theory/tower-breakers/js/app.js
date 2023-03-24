// let stringEntrada = ['2', '2, 2', '1, 4'];
let stringEntrada = ['2', '1, 7', '3, 7;']
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index += 1) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const numeroDeTorres = parseInt(primeiraMultiplaEntrada[0], 10);

        const alturaCadaTorre = parseInt(primeiraMultiplaEntrada[1], 10);

        const resultado = towerBreakers(numeroDeTorres, alturaCadaTorre);

        console.log(resultado + '\n');
    }
}

principal();

// function towerBreakers(numeroDeTorres, alturaCadaTorre) {

//     if(alturaCadaTorre == 1) return 2;

//     return numeroDeTorres % 2 == 1 ? 1 : 2;
// }

function towerBreakers(numeroDeTorres, alturaCadaTorre) {

    if (numeroDeTorres % 2 == 0 || alturaCadaTorre == 1) {
        
        return 2;
    }

    return 1;
}