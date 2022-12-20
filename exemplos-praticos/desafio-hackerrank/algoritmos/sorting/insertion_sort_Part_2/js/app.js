let stringEntrada = ['6', '1, 4, 3, 5, 6, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}

principal();

function insertionSort2(n, arr) {

    for(let index = 1; index < arr.length; index += 1) {

        // Primeiro, escolha o elemento no índice 1
        let atual = arr[index];
        
        let compare;
        // Loop da direita para a esquerda, começando do índice 1 ao índice 0
        for(compare = index - 1; compare >= 0 && 
            arr[compare] > atual; compare -= 1) {

                // // desde que arr[compare] seja maior que o atual
                // move arr[compare] para a direita em arr[compare + 1]
                arr[compare + 1] = arr[compare];
            }

        // Coloca o elemento atual no índice 0
        // ou ao lado do elemento menor
        arr[compare + 1] = atual;

        console.log(...arr);
    }

    return arr;
}