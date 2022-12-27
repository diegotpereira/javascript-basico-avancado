let stringEntrada = ['20, 3, 6, 80'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s=$/g, '').split(' ');
    const p = parseInt(multiplaEntrada[0], 10);
    const d = parseInt(multiplaEntrada[1], 10);
    const m = parseInt(multiplaEntrada[2], 10);
    const s = parseInt(multiplaEntrada[3], 10);

    const resposta = howManyGames(p, d, m, s);

    console.log(resposta);
}

principal();

function howManyGames(p, d, m, s) {

    let precoJogo = p;
    let descontoPagamento = d;
    let minimoPreco = m;
    let dinheiroTotal = s;
    let jogos = 0;

    while (dinheiroTotal >= 0) {
        
        precoJogo = (precoJogo > minimoPreco) ? precoJogo : minimoPreco;
        dinheiroTotal = dinheiroTotal - precoJogo;

        if((precoJogo - descontoPagamento) < minimoPreco) {

            precoJogo = minimoPreco;

        } else {

            precoJogo = precoJogo - descontoPagamento;
        }
        jogos += 1;
    }

    return jogos - 1;
}