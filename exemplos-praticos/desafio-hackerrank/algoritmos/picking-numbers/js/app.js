let stringEntrada = ['6', '4, 6, 5, 3, 3, 1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const resultado = pegarNumeros(a);

    console.log(resultado);
}

principal();

function pegarNumeros(a) { // a = (6) [4, 6, 5, 3, 3, 1]

    a = a.map(Number); // a = (6) [4, 6, 5, 3, 3, 1]

    var classificar = a.sort(function(a, b) { // classificar = (6) [1, 2, 3, 4, 5, 6], a = (6) [1, 2, 3, 4, 5, 6]

        return a - b; // a = (6)[1, 3, 3, 4, 5, 6]
    });

    var i = 0;
    var j = 1;

    while(i < classificar.length && j < classificar.length ) {

        // diferença absoluta entre quaisquer dois elementos é menor ou igual a 1
        if(Math.abs(classificar[i] - classificar[j]) > 1) { // i = 0, classificar = (6) [1, 3, 3, 4, 5, 6], j = 1
                                                                                                           // j = 2

            i++; // 1 3
            j++; // 2 6

        } else {

            j++; // 6
        }
    }
    return (Math.abs(i - j)); // saída: 3
}