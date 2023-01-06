let stringEntrada = ['3, 3', '2, 5, 6'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const nk = lerEntrada().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const c = lerEntrada().split(' ').map(cTemp => parseInt(cTemp, 10));

    const resultado = getMinimumCost(k, c);

    console.log(resultado + '\n'); // saída: 13
}

principal();

// function getMinimumCost(k, c) {

//     return c.sort((a, b) => b - a).reduce((soma, v, i) => soma + (((i / k) | 0) + 1) * v, 0);
// }


// function getMinimumCost(k, c) {

//     let contar = 0;
//     let len = c.length;
//     let colecao = {};
//     let index = 0;

//     c.sort((a, b)=> a - b);

//     for(let i = len - 1, j = 0; i >= len - k; i-= 1, j +=1) {

//         contar += c[i];
//         colecao[j] = 1;
//     }

//     for(let i = len - k - 1; i >= 0; i -= 1) {

//         contar += (colecao[index] + 1) * c[i];
//         colecao[index]++;
//         index++;

//         if(index >= k) index = 0;
//     }

//     return contar;
// }

function getMinimumCost(k, c) {

    c.sort((a, b) => a > b ? -1 : 1);
    let custoMin = 0;
    let numeroAmigos = k;
    let contar = 0;

    for(let index = 0; index < c.length; index += 1) {

        if (index < k) {
            
            custoMin += c[index];

        } else {

            if (index == numeroAmigos) {
                
                contar++;
                numeroAmigos = index + k;
            }

            let preco = c[index] * (contar + 1);

            custoMin += preco;
        }
    }

    return custoMin;
}