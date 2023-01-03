let stringEntrada = ['10', '203, 204, 205, 206, 207, 208, 203, 204, 205, 206', '13', '203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '')
                            .split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(lerEntrada().trim(), 10);
    const brr = lerEntrada().replace(/\s+$/g, '')
                            .split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const resultado = missingNumbers(arr, brr);

    // console.log(resultado);

    console.log(resultado.join(' ') + '\n');
}

principal();

// function missingNumbers(arr, brr) {

//     let novoArray = {};
//     let ausente = [];

//     brr.forEach(e => {

//         if(!novoArray[e]) 

//             novoArray[e] = 0;
//             novoArray[e]++;
        
//     });

//     arr.forEach(e => {

//         novoArray[e]--;
//     });

//     for(let k in novoArray) {

//         if (novoArray[k] > 0) 
            
//             ausente.push(parseInt(k));
        
//     }

//     return ausente.sort((a, b) => a < b);
// }


function missingNumbers(arr, brr) {

    let mapear = {};

    for(let index = 0; index < brr.length; index += 1) {

        let chave = brr[index]; 
        mapear[chave] = 0; // mapear = {203: 2, 204: 3, 205: 3, 206: 3, 207: 1, 208: 1}
    }

    for(let index = 0; index < brr.length; index += 1) {

        let chave = brr[index];
        mapear[chave] += 1; // mapear = {203: 2, 204: 3, 205: 3, 206: 3, 207: 1, 208: 1}
    }

    for(let index = 0; index < arr.length; index += 1) {

        let chave = arr[index];
        mapear[chave] -= 1;
    }

    let saida = [];

    for(let e in mapear) {

        if(mapear[e] > 0) {

            saida.push(e);
        }
    }

    return saida;
}