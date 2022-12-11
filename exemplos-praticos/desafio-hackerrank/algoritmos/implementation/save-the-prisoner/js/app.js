

let entradaString = ['2', '5, 2, 1', '5, 2, 2'];
let entradaAtual = 0;

// console.log(entradaString);

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const primeiraEntradaMultipla = lerEntrada().replace(/\s+$/g, '').split(' ');

        const n = parseInt(primeiraEntradaMultipla[0], 10);
        const m = parseInt(primeiraEntradaMultipla[1], 10);
        const s = parseInt(primeiraEntradaMultipla[2], 10);

        const resultado = salvaPrisioneiro(n, m, s);

        console.log(resultado);
    }
}

principal();

function salvaPrisioneiro(n, m, s) {

    // n = número de prisioneiros
    // m = número de doces
    // s = número da cadeira para começar a distribuir guloseimas

    // console.log(n); // saída 5 5
    // console.log(m); // saída 2 2
    // console.log(s); // saída 1 2
    // console.log((m - 1)); // saida: 1 1
    // console.log(s+(m - 1)); // saída 2 3
    

    var numeroCadeira = (s+(m - 1)) % n; // saida 2 3

    return numeroCadeira == 0 ? n : numeroCadeira;
}