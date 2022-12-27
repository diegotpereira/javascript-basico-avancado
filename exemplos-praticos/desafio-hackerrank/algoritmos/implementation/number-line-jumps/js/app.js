let stringEntrada = ['0, 3, 4, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(multiplaEntrada[0], 10);
    const v1 = parseInt(multiplaEntrada[1], 10);
    const x2 = parseInt(multiplaEntrada[2], 10);
    const v2 = parseInt(multiplaEntrada[3], 10);

    const resultado = kangaroo(x1, v1, x2, v2);

    console.log(resultado);
}

principal();

// function kangaroo(x1, v1, x2, v2) {

//     let resultado = 'NAO';

//     if(v1 <= v2)
//        return resultado;

//     while (x1 <= x2) {
        
//         x1 += v1;
//         x2 += v2;

//         if (x1 === x2) {
            
//             resultado = 'SIM';

//             break;
//         }
//     }
    

//     return resultado;
// }

// const resultado = kangaroo(x1, v1, x2, v2);


// console.log(resultado); // saída: SIM


function kangaroo(x1, v1, x2, v2) {

    let pulo1 = x1;
    let pulo2 = x2;
    let simNao = 'NAO';

    for(indice = 0; indice < 10000; indice += 1) {

        pulo1 +=  v1;
        pulo2 += v2;

        if(pulo1 === pulo2) {

            simNao = 'SIM';
        }
    }
    return simNao;
}