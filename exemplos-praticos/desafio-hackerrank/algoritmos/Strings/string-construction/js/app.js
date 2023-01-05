let stringEntrada = ['2', 'abcd', 'abab'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < q; index += 1) {

        const s = lerEntrada();

        const resultado = stringConstruction(s);

        console.log(resultado + '\n');
    }
}

principal();

// function stringConstruction(s) {

//     let arr = [];

//     for(let caracter of s) {

//         if(!arr.includes(caracter)) {

//             arr.push(caracter);
//         }
//     }

//     return arr.length;
// }


// function stringConstruction(s) {

//     let obj = {};
//     let arr = [];

//     for(let caracter of s) {

//         if(!obj[caracter]) {

//             obj[caracter] = 1;
//             arr.push(caracter);
//         }
//     }

//     return arr.length;
// }


function stringConstruction(s) {

    let p = "";

    for(let index = 0; index < s.length; index += 1) {

        if (!p.includes(s.substring(index, index + 1))) {
            
            p = p.concat(s.substring(index, index + 1));

        }
    }

    return p.length;
}