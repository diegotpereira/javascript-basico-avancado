let stringEntrada = ['4, 3', '1, 7, 2, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);
    const s = lerEntrada().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const resultado = nonDivisibleSubset(k, s);

    console.log(resultado);
}

principal();

function nonDivisibleSubset(k, s) {

    if(k === 1) { // k = 3

        return 1;
    }

    let maxSubsetComprimento = 0;

    if(s.find((value) => value % k === 0) != undefined) { // s = (4) [1, 7, 2, 4], k = 3

        maxSubsetComprimento++;
    }
    if(k % 2 === 0) { // k = 3

        maxSubsetComprimento = s.find((value) => value % k === k / 2) != undefined ? maxSubsetComprimento + 1 : maxSubsetComprimento; // maxSubsetComprimento = 0

    }

    for(let i = 1; i < k / 2; i++) { // k = 3

        maxSubsetComprimento += Math.max(s.filter((value) => value % k === i).length, 
                                         s.filter((value) => value % k === k - i).length); // maxSubsetComprimento = 3, s = (4) [1, 7, 2, 4], k = 3 
    }

    return maxSubsetComprimento;
}