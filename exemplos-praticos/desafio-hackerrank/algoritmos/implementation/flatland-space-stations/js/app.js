let stringEntrada = ['5, 2', '0, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const nm = lerEntrada().split(' ');
    const n = parseInt(nm[0], 10);
    const m = parseInt(nm[1], 10);
    const c = lerEntrada().split(' ').map(cTemp => parseInt(cTemp, 10));

    let resultado = flatlandSpaceStations(n, c);

    console.log(resultado); // saída: 2
}

principal();

function flatlandSpaceStations(n, c) { // n = 5, c = (2) [0, 4]

    let maxDistancia = 0;

    c.sort((a, b) => a - b); // c = (2) [0, 4]

    for(let i of Array.from({ length: c.length - 1}, (value, index) => index)) { // c = (2) [0, 4]

        let valor = +Math.ceil((c[i + 1] - c[i] - 1) / 2.0); // c = (2) [0, 4]
        valor > maxDistancia && (maxDistancia =  valor); // maxDistancia = 2
    }
    c[0] - 0 > maxDistancia && (maxDistancia = c[0] - 0); // c = (2) [0, 4], maxDisntancia = 2  

    n - 1 - c[c.length - 1] > maxDistancia && (maxDistancia = n - 1 - c[c.length - 1]); // n = 5, c = (2) [0, 4], maxdistancia = 2

    return maxDistancia;
}