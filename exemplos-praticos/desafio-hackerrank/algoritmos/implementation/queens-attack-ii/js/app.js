let stringEntrada = ['4, 0', '4, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);

    const segundaMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const r_q = parseInt(segundaMultiplaEntrada[0], 10);
    const c_q = parseInt(segundaMultiplaEntrada[1], 10);

    let obstacles = Array(k);

    for(let index = 0; index < k; index++) {

        obstacles[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(obsTemp => parseInt(obsTemp, 10));

    }

    const resultado = queensAttack(n, k, r_q, c_q, obstacles);

    console.log(resultado);
 }

 principal();

 function queensAttack(n, k, r_q, c_q, obstacles) {

    // r_q = linha da posicao da rainha
    // c_q = coluna da poisção da rainha
    // n = numero de colunas e linha do tabuleiro
    let top = n - r_q;
    let bottom = r_q - 1;
    let right = n - c_q;
    let left = c_q - 1;

    let topLeft = Math.min(top, left);
    let topRight = Math.min(top, right);
    let bottomRight = Math.min(bottom, right);
    let bottomLeft = Math.min(bottom, left);

    obstacles.forEach(([line, column]) => {

        // esquerda
        if(line === r_q && column < c_q) {

            left = Math.min(left, (Math.abs(c_q - column) - 1));
        }

        // superior
        if(column === c_q && line > r_q) {

            top = Math.min(top, (Math.abs(line - r_q) - 1));
        }

        // right
        if(line === r_q && column > c_q) {

            right = Math.min(right, (Math.abs(column - c_q) - 1));
        }

        // inferior 
        if(column === c_q && line < r_q) {

            bottom = Math.min(bottom, (Math.abs(r_q - line) - 1));
        }

        // diagonal superior esquerda
        if(line > r_q && column < c_q && (Math.abs(r_q - line) === Math.abs(c_q -column))) {

            topLeft = Math.min(topLeft, (Math.abs(r_q - line) - 1));
        }

        // diagonal superior direita
        if(line > r_q && column > c_q && (Math.abs(line - r_q) === Math.abs(c_q -column))) {

            topRight = Math.min(topRight, (Math.abs(line - r_q) - 1));
        }

        // diagonal inferior direita
        if(line < r_q && column > c_q && (Math.abs(line - r_q) === Math.abs(c_q -column))) {

            bottomRight = Math.min(bottomRight, (Math.abs(line - r_q) - 1));
        }

        // diagonal inferior esquerda 
        if(line < r_q && column < c_q && (Math.abs(r_q - line) === Math.abs(column - c_q))) {

            bottomLeft = Math.min(bottomLeft, (Math.abs(r_q - line) - 1));
        }
    });

    return (top + right + bottom + left + topRight + topLeft + bottomRight + bottomLeft);
 }