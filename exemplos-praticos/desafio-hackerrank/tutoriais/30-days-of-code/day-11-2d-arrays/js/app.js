

let stringEntrada = ['1, 1, 1, 0, 0, 0', '0, 1, 0, 0, 0, 0', '1, 1, 1, 0, 0, 0', '0, 0, 2, 4, 4, 0', '0, 0, 0, 2, 0, 0', '0, 0, 1, 2, 4, 0'];
// let stringEntrada = [['1, 1, 1, 0, 0, 0, , , , , '], ['0, 1, 0, 0, 0, 0, , , , '], ['1, 1, 1, 0, 0, 0, , , '], ['0, 0, 2, 4, 4, 0, , '], ['0, 0, 0, 2, 0, 0, '],  ['0, 0, 1, 2, 4, 0']];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
    
}

function principal() {

    let arr = Array[6];
    let maxSoma;

    for(let i = 0; i < 6; i++) {

        arr[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        console.log(arr[i]);
    
    }

    const obterMax = (n, m) => {

        let soma = 0;

        for(let i = 0; i < 3; i++) {

            for(let j = 0; j < 3; j++) {

                soma += !(i === 1 && (j === 0 || j ===2 )) && arr[n + i][m + j];
            }
        }
        return soma;
    }

    const obter = () => {

        let soma;

        for(let i = 0; i < 4; i++) {

            for(let j = 0; j < 4; j++) {

                soma = obterMax(i, j);

                (i === 0 && j === 0) && (maxSoma = soma);

                maxSoma < soma && (maxSoma = soma);
            }
        }
    }
    obter();

    console.log(maxSoma);
}

principal();