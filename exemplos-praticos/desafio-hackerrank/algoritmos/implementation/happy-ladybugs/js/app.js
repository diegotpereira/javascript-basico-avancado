let stringEntrada = ['4', '7', 'RBY_YBR', '6', 'X_Y__X', '2', '__', '6', 'B_RRBR'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const g = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < g; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);
        const b = lerEntrada();

        const resultado = happyLadybugs(b);

        console.log(resultado + '\n');
    }
}

principal();

// function happyLadybugs(b) {

//     var re = /_/;

//     if(b.search(re) != -1) {

//         var f = obterFrequencia(b); // f = {R: 2, B: 2, Y: 2, _: 1}
//         var soma = 0;

//         for(let chave in f) {
            
//             if (chave != '_' && f[chave] === 1) {
//                 soma++;
//             }
//         }

//         if(soma > 0) {

//             return 'NO';

//         }else {

//             return 'YES';
//         }

//     } else {

//         var re2 = /[A-Z]/;

//         if (b.search(re2) != -1) {
            
//             var arr = b.split('');
//             var soma2 = 0;

//             for(let index = 0; index < arr.length; index += 1) {

//                 if (arr[index] !== arr[index + 1] && arr[index] !== arr[index - 1]) {
                    
//                     soma2++;
//                 }
//             }

//             if(soma2 > 9) {

//                 return 'NO';

//             } else {

//                 return 'YES';
//             }

//         } else {

//             return 'NO';
//         }
//     }
// }

function obterFrequencia(str) {

    var freq = {};

    for(let index = 0; index < str.length; index += 1) {

        var caracter = str.charAt(index);

        if(freq[caracter]) {

            freq[caracter]++;

        } else {

            freq[caracter] = 1;
        }
    }
    return freq; // freq = {R: 2, B: 2, Y: 2, _: 1}
}

// function happyLadybugs(b) {
    
//     const joaninhas = b.split(''); // joaninhas = (7) ['R', 'B', 'Y', '_', 'Y', 'B', 'R']
//     const joaninhasSet = [...new Set(joaninhas)]; // joaninhasSet = (4) ['R', 'B', 'Y', '_']

//     if(!joaninhasSet.includes('_')) {

//         for(let index = 0; index < joaninhas.length; index += 1) {

//             if(joaninhas[index - 1] !== joaninhas[index] && joaninhas[index] !== joaninhas[index + 1]) 

//                 return 'NO';

//         }

//         return 'YES';

//     } else {

//         for(const joaninha of joaninhasSet) {

//             if(joaninha !== '_') {

//                 if(joaninhas.filter((cor) => cor === joaninha).length === 1)

//                     return 'NO';
//             }
//         }
//         return 'YES';
//     }
// }

// function happyLadybugs(b) {

//     for(let index = 0; index < b.length; index += 1) {

//         if(b[index] !== '_' && b.indexOf(b[index]) === b.lastIndexOf(b[index]))

//             return 'NO';

//         if(b.indexOf('_') === - 1 && !(b[index] === b[index - 1] || b[index] === b[index + 1]))

//             return 'NO'
//     }

//     return 'YES';
// }


function happyLadybugs(b) {

    let hash = {};

    for(let index = 0; index < b.length; index += 1) {

        let atualElemento = b[index];

        if(hash[atualElemento]) {

            hash[atualElemento]++;

        } else {

            hash[atualElemento] = 1;
        }
    }
    if(!hash['_']) {

        for(let index = 0; index < b.length; index += 1) {

            let atualElemento = b[index];

            if(atualElemento !== b[index - 1] && atualElemento !== b[index + 1]) {

                return 'NO';
            }
        }
    }

    for(let index = 0; index < b.length; index += 1) {

        let atualElemento = b[index];

        if(atualElemento === '_') {

            continue;

        } else if(hash[atualElemento] === 1) {

            return 'NO'
        }
    }

    return 'YES'
}