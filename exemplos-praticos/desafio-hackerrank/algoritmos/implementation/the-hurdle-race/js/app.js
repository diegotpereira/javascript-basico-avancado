



let entradaString = ['5, 4', '1, 6, 3, 5, 2']
let atualLinha = 0;

function lerEntrada() {

    return entradaString[atualLinha++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, ' ').split(' ');

    // console.log(multiplaEntrada); // saída "5", ",", " ", "4"
    const n = parseInt(multiplaEntrada[0], 10);
    // console.log(n); // saída: 5

    const alturaNormal = parseInt(multiplaEntrada[1], 10);
    // console.log(alturaNormal); // saída: 4

    const alturaBarreira = lerEntrada().replace(/\s+$/g, ' ').split(' ').map(heightTemp => parseInt(heightTemp, 10));
    // console.log(alturaBarreira); // saída: [1, 6, 3, 5, 2]

    const resultado = corridaBarreira(alturaNormal, alturaBarreira);

    console.log(resultado); // saída: 2
}

principal();


function corridaBarreira(alturaNormal, alturaBarreira) {

    // console.log(alturaNormal); // saída: 4
    // console.log(alturaBarreira); // saída:  [1, 6, 3, 5, 2]

    var contar = 0;

    // iterar até 5
    for(let i = 0; i < alturaBarreira.length; i++) {

        // 5 > 4
        if(alturaBarreira[i] > alturaNormal) {

            let dif = alturaBarreira[i] - alturaNormal;
            console.log(dif); //  2 1

            if(dif > contar) {

                contar = dif
            }
        }
    }

    if(contar === 0) {

        return 0;
    }

    return contar;
}