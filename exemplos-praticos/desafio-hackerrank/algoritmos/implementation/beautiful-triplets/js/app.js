let stringEntrada = ['7, 3', '1, 2, 4, 5, 7, 8, 10'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const d = parseInt(primeiraMultiplaEntrada[1], 10);

    const arr = lerEntrada().replace(/\s+$/g, '').split(' ')
                            .map(arrTemp => parseInt(arrTemp, 10));

    const resultado = beautifulTriplets(d, arr);

    console.log(resultado); // saida = 3
}

principal();

function beautifulTriplets(d, arr) { // d = 3, arr = (7) [1, 2, 4, 5, 7, 8, 10]

    let map = {}; // map = {1: 1, 2: 1, 4: 1, 5: 1, 7: 1, 8: 1, 10: 1}

    for(let i = 0; i < arr.length; i += 1)  {

        const el = arr[i]; // arr = (7) [1, 2, 4, 5, 7, 8, 10], i = 1
        map[el] = map[el] ? map[el] += 1 : 1;

    }

    i = arr[0]; // i = 1, arr = (7) [1, 2, 4, 5, 7, 8, 10]

    const max = arr[arr.length - 1]; // max = 10, arr = (7) [1, 2, 4, 5, 7, 8, 10]
    let lindaContagem = 0;

    while(i <= max) {

        const j = i + d;
        const k = j + d;

        if(map[i] && map[j] && map[k]) {

            lindaContagem += Math.max(map[i], map[j], map[k]);
        }
        i += 1;
    }

    return lindaContagem;
}