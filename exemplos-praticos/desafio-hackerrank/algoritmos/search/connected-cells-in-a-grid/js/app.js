let stringEntrada = ['5', '5', '1, 1, 0, 0, 0', '0, 1, 1, 0, 0', '0, 0, 1, 0, 1', '1, 0, 0, 0, 1', '0, 1, 0, 1, 1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const m = parseInt(lerEntrada().trim(), 10);

    let matriz = Array(n);

    for(let index = 0; index < n; index += 1) {

        matriz[index] = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const resultado = connectedCell(matriz);

    console.log(resultado + '\n');
}

principal();

function connectedCell(matriz) {

    const r = (a, b) => Array(b - a).fill(a).map((x, y) => x + y);

    const max = Math.max;
    const min = Math.min;
    const m = matriz;
    const mComprimento = m.length;
    const mPosicao = m[0].length;
    let media = 0;

    function x(i, j) {

        if(m[i][j] == 1) {

            m[i][j] = -1;
            let s = 1;

            for(const a of r(max(0, i - 1), min(i + 2, mComprimento)))
            for(const b of r(max(0, j - 1), min(j + 2, mPosicao)))

                s += x(a, b);

            return s;
        }

        return 0;
    }

    for(const i of r(0, mComprimento))
    for(const j of r(0, mPosicao))

        media = max(media, x(i, j));

        return media;
}