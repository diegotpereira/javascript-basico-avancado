let stringEntrada = ['3', '1, 2, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const caloria = lerEntrada().replace(/\s+$/g, '').split(' ').map(calTemp => parseInt(calTemp, 10));

    const resultado = marcsCaminhadaBolo(caloria);

    console.log(resultado);
}

principal();

function marcsCaminhadaBolo(caloria) {

    let milhas = 0;
    
    caloria.sort(function(a, b) {

        return b - a;
    });

    for(let i = 0; i < caloria.length; i++) {

        // depois de comer um cupcake com (c) calorias ele deve caminhar pelo menos  2 potencia j X c
        milhas = milhas + ((2 ** i) * caloria[i]);
    }

    return milhas;
}