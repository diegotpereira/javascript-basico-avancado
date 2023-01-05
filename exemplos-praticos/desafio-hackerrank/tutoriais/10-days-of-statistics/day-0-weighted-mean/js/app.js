let stringEntrada = ['5', '10, 40, 30, 50, 20', '1, 2, 3, 4, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const valores = lerEntrada().replace(/\s+$/g,'').split(' ').map(valoresTemp => parseInt(valoresTemp, 10));
    const pesos = lerEntrada().replace(/\s+$/g, '').split(' ').map(pesoTemp => parseInt(pesoTemp, 10));

    const resultado = weightedMean(valores, pesos);

    console.log(resultado);
}

principal();

// function weightedMean(X, W) {

//     let arrSoma = 0;
//     let wSoma = 0;

//     for(let index = 0; index < X.length; index += 1 ) {

//         arrSoma += X[index] * W[index];
//     }

//     for(let e of W) {

//         wSoma += e;
//     }

//     return ((arrSoma / wSoma).toFixed(1));
// }


// function weightedMean(X, W) {

//     return ((X.reduce((a, b, i) => a + b * W[i]) / W.reduce((a, b) => a + b)).toFixed(1));
// }

// function weightedMean(X, W) {

//     var resultado = X.map(function(valor, indice) {

//         var peso = W[indice];
//         var soma = valor * peso;

//         return [soma, peso];

//     }).reduce(function(p, c) {

//         return [p[0] + c[0], p[1] + c[1]];
//     }, [0, 0]);

//     return ((resultado[0] / resultado[1]).toFixed(1));
// }

function weightedMean(X, W) {

    const [soma, pesoSoma] = W.reduce((acumulador, w, i) => {

        acumulador[0] = acumulador[0] + X[i] * w;
        acumulador[1] = acumulador[1] + w;

        return acumulador;
    }, [0, 0]);

    return ((soma / pesoSoma).toFixed(1));
}