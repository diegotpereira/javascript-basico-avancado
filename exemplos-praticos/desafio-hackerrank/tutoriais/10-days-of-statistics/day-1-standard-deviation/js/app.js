let stringEntrada = ['5', '10, 40, 30, 50, 20'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    const valores = lerEntrada().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

    const resultado = stdDev(valores);

    console.log(resultado);
}

principal();

// function stdDev(arr) {

//     let media = arr.reduce((acumulador, atual) => {

//         return acumulador + atual;
//     }, 0) / arr.length;

//     arr = arr.map((k) => {

//         return (k - media) ** 2;
//     });

//     let soma = arr.reduce((acumulador, atual) => acumulador + atual, 0);

//     return (Math.sqrt(soma / arr.length).toFixed(1));
// }

function stdDev(arr) {

    let media = arr.reduce((total, valor) => total + valor / arr.length, 0); // media = 30
    let variancia = arr.reduce((total, valor) => total + Math.pow(media - valor, 2) / arr.length, 0); // variancia = 200
    let desvioPadrao = Math.sqrt(variancia).toFixed(1); // desvioPadrao = "14.1"

    return desvioPadrao;
}