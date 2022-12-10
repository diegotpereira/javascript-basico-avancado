

function somaMaxima(arr, n, m) {

    let x = 0;
    let prefixo = 0;
    let maxNum = 0
    let set = new Set();

    set.add(0);

    // Percorrendo a matriz.
    for(let i = 0; i < n; i++) {

        // Encontrando a soma do prefixo.
        prefixo = (prefixo + arr[i]) % m;

        // Encontrando o máximo da soma do prefixo.
        maxNum = Math.max(maxNum, prefixo);

        // Encontrando o iterador apontando para o primeiro
        // elemento que não é menor que o valor
        // "prefixo + 1", ou seja, maior que ou
        // igual a este valor.
        let it = 0;

        for(let j of set.values()) {

            if(j >= prefixo + 1) 

                it = j;
        }

        if(it != 0) {

            maxNum = Math.max(maxNum, prefixo - it + m);
        }

        set.add(prefixo);
    }
    return maxNum;
}

let arr = [3, 3, 9, 9, 5];
let n = 5;
let m = 7;

console.log(somaMaxima(arr, n, m));