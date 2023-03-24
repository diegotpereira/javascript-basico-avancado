let stringEntrada = ['3','5, 2', '5, 3', '8, 8'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index += 1) {
        
        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '')
                                                    .split(' ');

        const posInicialColuna = parseInt(primeiraMultiplaEntrada[0], 10);
        const posIncialLinha = parseInt(primeiraMultiplaEntrada[1], 10);

        const resultado = chessboardGame(posInicialColuna, posIncialLinha);

        console.log(resultado + '\n');
        
    }
}

principal();

// function chessboardGame(posInicialColuna, posIncialLinha) {

//     return !(posInicialColuna % 4 % 3) || !(posIncialLinha % 4 % 3) ? 'Primeiro' : 'Segundo';
// }

function chessboardGame(posInicialColuna, posIncialLinha) {

    let coluna = posInicialColuna % 4;
    let linha = posIncialLinha % 4;

    if (coluna === 0 || linha === 0 || coluna === 3 || linha === 3) {
        
        return 'Primeiro';
    }

    return 'Segundo';
}

// function chessboardGame(posInicialColuna, posIncialLinha) {
//     // Write posIncialLinhaour code here
    
//     return (posInicialColuna - 1) % 4 < 2 && (posIncialLinha - 1) % 4 < 2 ? "Second" : "First";

// }