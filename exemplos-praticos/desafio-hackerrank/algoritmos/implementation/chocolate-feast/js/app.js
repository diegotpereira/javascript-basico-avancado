let stringEntrada = ['3', '10, 2, 5', '12, 4, 4', '6, 2, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const n = parseInt(primeiraMultiplaEntrada[0], 10);
        const c = parseInt(primeiraMultiplaEntrada[1], 10);
        const m = parseInt(primeiraMultiplaEntrada[2], 10);

        const resultado = chocolateFeast(n, c, m);
        // Quantos chocolates Brenno consegue comer?
        console.log(resultado); // saída: 6 3 5
    }
}

principal();

function chocolateFeast(n, c, m) {

    let contar = 0;
    let dinheiro = n;
    let preco = c;
    let desconto = m;

    let valor = Math.floor(dinheiro / preco); // valor = 5 3 1

    while(true) {

        let focus = valor + (contar % desconto); 

        contar += valor; // contar = 5 3, valor = 5 3 1

        if(focus < desconto) // desconto = 5 4 2

            break;

        valor = Math.floor(focus / desconto); // valor = 1 3
    }

    return contar;
}