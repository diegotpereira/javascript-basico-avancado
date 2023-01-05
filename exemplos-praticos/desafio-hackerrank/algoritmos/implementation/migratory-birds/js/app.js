let stringEntrada = ['6', '1, 4, 4, 4, 5, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const arrContar = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = migratoryBirds(arr);

    console.log(resultado + '\n');
}


principal();

// function migratoryBirds(arr) {
    
//     let contados = {};

//     arr.forEach((contar) => {

//         contados[contar] = (contados[contar] || 0) + 1;
//     });

//     let maximoValor = Math.max(...Object.values(contados));

//     let num = Object.keys(contados).find((chave) => contados[chave] === maximoValor);

//     return num;
// }


// function migratoryBirds(arr) {

//     let maior = 1;
//     let contar = maior;
//     let tipo = 0;

//     arr.sort();

//     // console.log(arr);

//     for(let i = 0; i < arr.length; i++) {

//         // Escolha o menor dos dois tipos vistos duas vezes
//         maior = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;

//         // Se mais de 1 tipo foi detectado nessa quantidade máxima
//         if(maior > contar) {

//             contar = maior;

//             // retorne o menor de seus ids
//             tipo = arr[i];
//         }
//     }

//     return tipo;    
// }


function migratoryBirds(arr) {

    let novoArray = {};
    const unicoValor = [...new Set(arr)]; // unicoValor = (4) [1, 4, 5, 3]

    unicoValor.forEach(elemento => {

        const filtarValor = arr.filter(valor => valor == elemento);
        const totalValor = filtarValor.length;

        novoArray[elemento] = totalValor;
    });

    let resultado = Object.entries(novoArray).sort(([, a], [, b]) => b - a); // 0: (2) ['4', 3]
                                                                                     // 1: (2) ['1', 1]
                                                                                     // 2: (2) ['3', 1]
                                                                                     // 3: (2) ['5', 1]
    let final = resultado[0][0]; // final 4
    
    return final;
}