let stringEntrada = ['2', '0', '1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = arvoreUtopica(n);

        console.log(resultado);
    }
}

principal();

function arvoreUtopica(n) {

    let alturaInicial = 1;

    for(let i = 0; i < n; i++) {

        if(i % 2 == 0) {

            alturaInicial *= 2;
             
        } else {

            alturaInicial += 1;
        }
    }

    return alturaInicial;
}