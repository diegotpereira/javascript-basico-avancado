let stringEntrada = ['4', '6', '1, 4, 5, 7, 9, 12'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const V = parseInt(lerEntrada().trim(), 10);
    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = introTutorial(V, arr);

    console.log(resultado);
}

principal();

function introTutorial(V, arr) {

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] === V) {

            return i;
        }
    }
}