let stringEntrada = ['5, 6', 'GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(multiplaEntrada[0], 10);
    const m = parseInt(multiplaEntrada[1], 10);

    let grade = [];

    for(let index = 0; index < n; index += 1) {

        const gradeItem = lerEntrada();
        grade.push(gradeItem);
    }

    const resultado = twoPluses(grade);

    console.log(resultado + '\n');
}
principal();

function twoPluses(grade) { // grade = (5) ['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG']

    const B = grade.map(e => e.split('').map(v => v == 'G')); // B = 0:(6) [true, true, true, true, true, true]
                                                                            // 1:(6) [true, false, false, false, true, false]
                                                                            // 2:(6) [true, true, true, true, true, true]
                                                                            // 3:(6) [true, true, false, false, true, false]
                                                                            // 4:(6) [true, true, true, true, true, true]
    const n = B.length; // n = 5;
    const m = B[0].length; // m = 6
    let maxProduto = 1;
    let W = null;

    const getL = (i, j, original) => {

        const b = original ? B : W, r = [1];
        let max = Math.min(i, j, n - i - 1, m - j - 1);

        for(let l = 1; l <= max; l += 1) 

            if(b[i - l][j] & b[i + l][j] & b[i][j - l] & b[i][j + l])

                r.push(2 * l + 1);

            else 
            
                return original ? r : r[r.length - 1];

        return original ? r : r[r.length - 1];
    }

    for(let i = 0; i < n; i+= 1) for(let j = 0; j < m; j += 1) {

        let L = getL(i, j, true); // i = 0, j = 0, true, L = (1) 0:[1] 

        for(let k = 0; k < L.length; k += 1) {

            W = B.map(r => r.slice());  // W = 0:(6) [0, true, true, true, true, true]
                                            // 1:(6) [true, false, false, false, true, false]
                                            // 2:(6) [true, true, true, true, true, true]
                                            // 3:(6) [true, true, false, false, true, false]
                                            // 4:(6) [true, true, true, true, true, true]
            W[i][j] = 0;

            for(let l = 1; l <= (L[k] - 1) / 2; l += 1)

                W[i + l][j] = W[i - l] = W[i][j + l] = W[i][j - l] = 0;

            for(let i = 0; i < n; i += 1) for(let j = 0; j < m; j += 1)

                maxProduto = Math.max(maxProduto, (2 * L[k] - 1) * (2 * getL(i, j) - 1));
        }
    }
    return maxProduto;
}