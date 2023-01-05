let stringEntrada = ['5, 1', '1, 2, 3, 4, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);
    const x = lerEntrada().replace(/\s+$/g, '').split(' ').map(xTemp => parseInt(xTemp, 10));

    const resultado = hackerlandRadioTransmitters(n, x, k);

    console.log(resultado + '\n');
}

principal();

function hackerlandRadioTransmitters(n, x, k) {

    var casas = x.map(Number).sort((a, b) => a - b);
    var casa = casas[0];
    var transmissor = casas[0];
    var index = 0;
    var torres = 0;

    while (index < n) {
        
        transmissor = casas[index];
        casa = casas[index];
        torres++;

        while (index < n && (casas[index] - casa) <= k) {
            
            index++;
        }

        transmissor = casas[index - 1];

        while (index < n && casas[index] <= transmissor + k) {
            
            index++;
        }
    }

    return torres;
}