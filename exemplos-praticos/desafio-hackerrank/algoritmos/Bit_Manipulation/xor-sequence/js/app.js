let stringEntrada = ['3', '2, 4', '2, 8', '5, 9'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < q; index++) {

        const lr = lerEntrada().split(' ');

        const l = parseInt(lr[0], 10);
        const r = parseInt(lr[1], 10);

        let resultado = xorSequence(l, r);

        console.log(resultado + '\n');
        
    }
}

principal();

function xorSequence(l, r) {

    const obterNum = i => [i, i, 2, 2, i + 2, i + 2, 0, 0][i % 8];
    
    return BigInt(obterNum(l - 1)) ^ BigInt(obterNum(r));
    
}