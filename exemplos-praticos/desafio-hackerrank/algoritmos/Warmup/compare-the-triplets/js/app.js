let stringEntrada = ['5, 6, 7', '3, 6, 10'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    const b = lerEntrada().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const resultado = compareTriplets(a, b);

    console.log(resultado.join(' ') + '\n');
}

principal();

function compareTriplets(a, b) {

    let alicePontuacao = 0;
    let bobPontuacao = 0;

    for(let index = 0; index < a.length; index += 1) {

        if(a[index] > b[index]) {

            alicePontuacao++;

        } else if (a[index] < b[index]) {
            
            bobPontuacao++;
        }
    }

    return [alicePontuacao, bobPontuacao];
}