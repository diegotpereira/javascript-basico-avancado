

let entradaString = ['4'];
let entradaAtual = 0;


function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const t = parseFloat(lerEntrada().trim(), 10);

    const resultado = contadorEstranho(t);

    console.log(resultado);
}

principal();


function contadorEstranho(t) {

    // No primeiro segundo, exibe o número 3
    let valor = 3;

    while(t > valor) {

        t = t - valor;

        // No segundo seguinte, o cronômetro é redefinido para 2
        valor *= 2;
    }

    // valor exibido no momento t
    return (valor - t + 1);
}