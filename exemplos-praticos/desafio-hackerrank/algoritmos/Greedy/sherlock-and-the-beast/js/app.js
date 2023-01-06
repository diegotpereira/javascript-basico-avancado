let stringEntrada = ['4', '1', '3', '5', '11'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = decentNumber(n);

        console.log(resultado);
    }
}

principal();

// function decentNumber(n) {

//     let numCincos = n;

//     while (numCincos % 3 !== 0) {
        
//         numCincos = numCincos - 5;
//     }

//     if (numCincos < 0) {
        
//         return ('-1');

//     } else {

//         return ('5'.repeat(numCincos) + '3'.repeat(n - numCincos));
//     }
// }


// function decentNumber(n) {

//     let r = '-1';
//     let a = (3 - n % 3) * 5;

//     if(n >= 3) if(n % 3 == 0) r = '5'.repeat(n)
//     else if(n - a >= 0) r = '5'.repeat(n - a) + '3'.repeat(a);

//     return r;
// }


function decentNumber(n) {

    for(let index = 0; index <= n; index += 1) {

        if (((5 * (n - index)) % 3 == 0) && ((3 * index) % 5) === 0) {
            
            return (Array(n - index).fill(5).concat(Array(index).fill(3)).join(''));

            // return;
        }
    }

    return ('-1');
}