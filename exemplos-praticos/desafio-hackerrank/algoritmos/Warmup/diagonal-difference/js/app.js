let stringEntrada = ['3', '11, 2, 4', '4, 5, 6', '10, 8, -12'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    let arr = Array(n);

    for(let index = 0; index < n; index += 1) {

        arr[index] = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const resultado = diagonalDifference(arr);

    console.log(resultado);
}

principal();

function diagonalDifference(arr) {

    let n = arr.length;
    let dado1 = 0;
    let dado2 = 0;

    for(let index = 0; index < n; index += 1) {

        for(let compare = 0; compare < n; compare += 1) {

            if(index === compare) {

                dado1 += arr[index][compare];
            }

            if (index + compare === n - 1) {
                
                dado2 += arr[index][compare];
            }
        }
    }

    return Math.abs(dado1 - dado2);
}