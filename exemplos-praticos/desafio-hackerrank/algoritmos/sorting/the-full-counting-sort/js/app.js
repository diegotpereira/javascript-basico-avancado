let stringEntrada = ['20','0, ab','6, cd','0, ef','6, gh','4, ij','0, ab','6, cd','0, ef','6, gh','0, ij','4, that','3, be','0, to','1, be','5, question','1, or','2, not','4, is','2, to','4, the'];
// let stringEntrada = ['20','0,ab,6,cd,0,ef,6,gh,4,ij,0,ab,6,cd,0,ef,6,gh,0,ij,4,that,3,be,0,to,1,be,5,question, 1,or, 2,not,4,is,2,to,4,the'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
    
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    let arr = Array(n);

    for(let index = 0; index < n; index += 1) {

        arr[index] = lerEntrada().replace(/\s+$/g, '').split(' ');
    }

    const resultado = countSort(arr);

    console.log(resultado);
}

principal();

// function countSort(arr) {

//     let resultado = [];

//     for(let index = 0; index < arr.length; index += 1) {

//         if(index < arr.length / 2) {

//             arr[index].splice(1, 1, "-");   
//             resultado.push(arr[index]);

//         } else {

//             resultado.push(arr[index]);
//         }
//     }

//     let classificado = resultado.sort((a, b) => a[0] - b[0]);

//     return (classificado.map((dado) => dado[1]).join(" "));
// }


// function countSort(arr) {

//     let resultado = '';
//     let metade = (arr.length & 1) ? parseInt(arr.length / 2) + 1 : arr.length / 2;

//     for(let index = 0; index < metade; index += 1) {

//         arr[index][1] = '-';
//     }

//     arr.sort((a, b) => a[0] - b[0]);

//     for(let index = 0; index < arr.length; index += 1) {

//         resultado = resultado.concat(arr[index][1].concat(' '));
//     }
    
//     return resultado;
// }


// function countSort(arr) {

//     return ((arr = arr.map((e, i) => [parseInt(e[0]), i < arr.length / 2 ? '-' : e[1]])
//     .sort((a, b) => (a[0] >= b[0] ? 1 : - 1))
//     .map((e) => e[1])
//     .join(' ')));
// }


// function countSort(arr) {}