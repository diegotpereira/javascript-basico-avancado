
let stringEntrada = ['2', '3', '1', '2', '4', '10', '100'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const n = parseInt(lerEntrada().trim(), 10);
        const a = parseInt(lerEntrada().trim(), 10);
        const b = parseInt(lerEntrada().trim(), 10);

        const resultado = predras(n, a, b);

        console.log(resultado);
    }
}

principal();

function predras(n, a, b) {

    let posicaoValor = new Set([0]);
    let i = 0;

    while(i < n - 1) {

        const proximoValor = new Set;

        for(const valor of posicaoValor) {

            const aValor = valor + a;
            proximoValor.add(aValor);

            const bValor = valor + b;
            proximoValor.add(bValor);
        }

        posicaoValor = proximoValor;
        i++;
    }

    const saida = Array.from(posicaoValor);

    saida.sort((a, b) => a - b);

    return saida;
}