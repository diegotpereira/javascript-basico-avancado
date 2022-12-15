let stringEntrada = ['5', '10, 10', '1, 1, 1', '5, 9', '2, 3, 4', '3, 6', '9, 1, 1', '7, 7', '4, 2, 1', '3, 3', '1, 9, 2'];
let entradaAtual = 0; 

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const casosTeste = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < casosTeste; i++) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const preto = parseInt(primeiraMultiplaEntrada[0], 10);
        const branco = parseInt(primeiraMultiplaEntrada[1], 10);

        const segundaMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const custoPresentePreto = parseInt(segundaMultiplaEntrada[0], 10);
        const custoPresenteBranco = parseInt(segundaMultiplaEntrada[1], 10);

        const custoConverterPresenteOutraCor = parseInt(segundaMultiplaEntrada[2], 10);

        const resultado = aniversarioTaum(preto, branco, custoPresentePreto, custoPresenteBranco, custoConverterPresenteOutraCor);

        console.log(resultado);
    }
}

principal();

function aniversarioTaum(preto, branco, custoPresentePreto, custoPresenteBranco, custoConverterPresenteOutraCor) {

    const somasPresentes = (preto) + (branco); // somasPresentes = 

    const presentesBrancos = somasPresentes * (custoPresenteBranco) + ((preto) * (custoConverterPresenteOutraCor));
    const presentesPretos = somasPresentes * (custoPresentePreto) + ((branco) * (custoConverterPresenteOutraCor));

    let min = (preto) * (custoPresentePreto) + (branco) * (custoPresenteBranco);

    (presentesPretos < min) && (min = presentesPretos);
    (presentesBrancos < min) && (min = presentesBrancos);

    return min;
}