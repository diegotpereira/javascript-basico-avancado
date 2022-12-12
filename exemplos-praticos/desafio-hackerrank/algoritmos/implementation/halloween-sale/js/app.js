let stringEntrada = ['20, 3, 6, 80'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
    
}

function principal() {

    const entradaMultipla = lerEntrada().replace(/\s+$/g, '').split(' ');
    const p = parseInt(entradaMultipla[0], 10);
    const d = parseInt(entradaMultipla[1], 10);
    const m = parseInt(entradaMultipla[2], 10);
    const s = parseInt(entradaMultipla[3], 10);

    const resposta = quantosjogos(p, d, m, s);

    console.log(resposta);
}

principal();

function quantosjogos(p, d, m, s) {

    let precoPrimeiroJogo = p;
    let descontoJogoAnterior = d;
    let custoMinimoJogo = m;
    let orcamentoIncial = s // 80 R$

    let iterar = 0;

    // enquanto orçamento inicial é igual a zero
    while(orcamentoIncial >= 0) {

        // precoPrimeiroJogo recebe = se precoPrimeiroJogo > custoMinimoJogo então recebe = precoPrimeiroJogo se não recebe = custoMinimoJogo
        precoPrimeiroJogo = precoPrimeiroJogo > custoMinimoJogo ? precoPrimeiroJogo : custoMinimoJogo;
        orcamentoIncial = orcamentoIncial - precoPrimeiroJogo; // primeiro custa 20 sobra = 60
                                                                                         // 43
                                                                                         // 29
                                                                                         // 18
                                                                                         // 10
                                                                                         // 4
                                                                                          
        console.log(orcamentoIncial);

        if(precoPrimeiroJogo - descontoJogoAnterior < custoMinimoJogo) {

            precoPrimeiroJogo = custoMinimoJogo;

        } else {

            precoPrimeiroJogo = precoPrimeiroJogo - descontoJogoAnterior;
        }

        iterar++;
    }

    return iterar - 1;
}