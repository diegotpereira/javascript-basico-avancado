let stringEntrada = ['1', '6'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index++) {
        
        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = counterGame(n);

        console.log(resultado + '\n');
        
    }
}

principal();

function counterGame(n) {

    if(n === 1)

        return 'Richard';

    let passos = 0;

    while (n > 1) {
        
        n = Math.log2(n) % 1 === 0 ? n/2 : n - (2 ** parseInt(Math.log2(n)));
        passos += 1;
    }

    return passos % 2 === 0 ? 'Richard' : 'Louise';
}