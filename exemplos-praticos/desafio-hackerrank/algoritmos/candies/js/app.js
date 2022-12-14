let stringEntrada = ['3', '1', '2', '2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    let arr = [];

    for(let i = 0; i < n; i++) {

        const arrItem = parseInt(lerEntrada().trim(), 10);

        arr.push(arrItem);
    }

    const resultado = doces(n, arr);

    console.log(resultado);
}

principal();

function doces(n, arr) {

    // Cada criança recebe pelo menos 1 doce
    let doces = Array(n).fill(1);

    for(let i = 1; i <= n; i++) {

        // Movendo da esquerda para a direita se o número atual arr[i] > arr[i-1] adiciona 1 a arr[i]   
        if(arr[i] > arr[i - 1]) {

            doces[i] = doces[i - 1] + 1;
        }
    }

    // Podemos mover da direita para a esquerda e
    for(let i = n - 2; i >= 0; i--) {

        // se a contagem de doces em arr[i] > arr[i+1],
        if(arr[i] > arr[i + 1]) {

            // obter o máximo de doces atuais em arr[i] e arr[i] + 1
            doces[i] = Math.max(doces[i], doces[i + 1] + 1);
        }
    }

    return doces.reduce((acc, num) => acc + num, 0);
}