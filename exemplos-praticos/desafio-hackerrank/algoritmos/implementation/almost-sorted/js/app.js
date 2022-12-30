let stringEntrada = ['2', '4, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    almostSorted(arr);

}

principal();

function almostSorted(arr) {

    let x = [];
    let podeSerClassificado = [...arr].sort((a, b) => a - b); // podeSerClassificado = (2) [2, 4]

    arr.forEach((v, i) => v != podeSerClassificado[i] && x.push(i)); // arr = (2) [4, 2], podeSerClassificado = (2) [2, 4], x = (2) [0, 1]

    if (!x.length) {
        
        console.log('sim');

    } else if (x.length === 2) {
        
        console.log('sim'),
        console.log('swap', x[0] + 1, x[1] + 1);

    } else {

        let a = x[0];
        let b = x.pop();

        for(let index = a; index <= b; index += 1) 

            if(arr[index] !== podeSerClassificado[b - index + a]);

                console.log('no');

        console.log('sim'),
        console.log('reverse', a + 1, b + 1);
    }
}