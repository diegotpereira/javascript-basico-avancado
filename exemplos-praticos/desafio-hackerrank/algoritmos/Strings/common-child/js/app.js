let stringEntrada = ['HARRY', 'SALLY'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s1 = lerEntrada();
    const s2 = lerEntrada();

    const resultado = commonChild(s1, s2);

    console.log(resultado);
}

principal();

// function commonChild(s1, s2) {

//     const resposta = [];

//     resposta[0] = [...Array(s2.length + 1)].map(() => 0);   // resposta[0] = (1) [Array(6)]
//                                                             // 0:0
//                                                             // 1:0
//                                                             // 2:0
//                                                             // 3:0
//                                                             // 4:0
//                                                             // 5:0

//     for (let index = 1; index <= s1.length; index++) {

//         resposta[index] = [];   // 0:0, 0:0
//                                 // 1:0
//                                 // 2:0
//                                 // 3:0
//                                 // 4:0
//                                 // 5:0

//         resposta[index][0] = 0  // 0:0, 0:0
//                                 // 1:0
//                                 // 2:0
//                                 // 3:0
//                                 // 4:0
//                                 // 5:0

//         for (let compare = 1; compare <= s2.length; compare++) {

//             if (s1.charAt(index - 1) === s2.charAt(compare - 1)) {
                
//                 resposta[index][compare] = resposta[index - 1][compare - 1] + 1;

//             } else {

//                 resposta[index][compare] = Math.max(resposta[index - 1][compare], resposta[index][compare - 1]);
//             }   
//         }
//     }

//     return resposta[s1.length][s2.length]
// }



// function commonChild(s1, s2) {

//     var deposito = [];

//     for (let index = 0; index <= s2.length; index += 1) {
        
//         deposito.push([]);
        
//     }

//     for (let compare = 0; compare <= s1.length; compare += 1) {

//         deposito[0][compare] = 0;
        
//     }

//     for (let index = 0; index <= s2.length; index += 1) {

//         deposito[index][0] = 0;
        
//     }

//     for (let s2Linha = 0; s2Linha <= s2.length; s2Linha++) {
        
//         for (let s1Coluna = 0; s1Coluna <= s1.length; s1Coluna++) {

            
//             if (s2Linha == 0 || s1Coluna == 0) {
                
//                 deposito[s2Linha][s1Coluna] = 0;

//             } else if (s2.charAt(s2Linha -1) == s1.charAt(s1Coluna - 1)) {
                
//                 deposito[s2Linha][s1Coluna] = deposito[s2Linha - 1][s1Coluna - 1] + 1;

//             } else {

//                 deposito[s2Linha][s1Coluna] = Math.max(deposito[s2Linha - 1][s1Coluna], deposito[s2Linha][s1Coluna - 1]);
//             }
//         }
        
//     }

//     return deposito[s2.length][s1.length];
// }


// function commonChild(s1, s2) {

//     let s1Comprimento = s1.length;
//     let s2Comprimento = s2.length;

//     const resposta = Array.from({
//         length: s1Comprimento + 1
//     }).map((_) => Array.from({
//         length: s2Comprimento + 1
//     }).fill(0));    // resposta = (6)
//                     // 0:(6) [0, 0, 0, 0, 0, 0]
//                     // 1:(6) [0, 0, 0, 0, 0, 0]
//                     // 2:(6) [0, 0, 0, 0, 0, 0]
//                     // 3:(6) [0, 0, 0, 0, 0, 0]
//                     // 4:(6) [0, 0, 0, 0, 0, 0]
//                     // 5:(6) [0, 0, 0, 0, 0, 0]

//     for (let index = 1; index <= s1Comprimento; index += 1) 
        
//         for (let compare = 1; compare <= s2Comprimento; compare += 1) {
            
//             if(s1[index - 1] === s2[compare - 1])

//                 resposta[index][compare] = resposta[index - 1][compare - 1] + 1;

//             else 

//                 resposta[index][compare] = Math.max(resposta[index][compare - 1], resposta[index - 1][compare]);
            
//         }
        
//         return resposta[s1Comprimento][s2Comprimento];
    
// }


function commonChild(s1, s2) {

    let anterior = Array(s2.length + 1).fill(0);
    let atual = [...anterior];

    [...s1].forEach(r => {

        [...s2].forEach((v, i) => atual[i + 1] = (r == v) ? anterior[i] + 1 : Math.max(anterior[i + 1], atual[i]));

        [anterior, atual] = [atual, anterior];
    });

    return anterior.pop();
}