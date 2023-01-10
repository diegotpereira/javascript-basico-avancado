let stringEntrada = ['7, 50', '1, 12, 5, 111, 200, 1000, 10'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaentrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaentrada[0], 10);
    const k = parseInt(primeiraMultiplaentrada[1], 10);
    const precos = lerEntrada().replace(/\s+$/g, '').split(' ').map(precosTemp => parseInt(precosTemp, 10));

    const resultado = maximumToys(precos, k);

    console.log(resultado + '\n');
}

principal();

// function maximumToys(precos, k) {

//     // classificando a matriz por preço de baixo para cima
//     let precosClassificdos = precos.sort((a, b) => a - b);

//     // para salvar o número de brinquedos
//     let contar = 0;

//     // Para ir a cada elemento da matriz de preços
//     precosClassificdos.forEach(preco => {

//         // comparando se meu R$ é maior que cada elemento do array (preço)
//         if (k > preco) {
            
//             // então diminua meu dinheiro $
//             k = k - preco;

//             // incrementos de contador significa outro brinquedo
//             contar++;
//         }
//     });
//     // retornando o número de brinquedos que posso comprar
//     return contar;
// }


function maximumToys(precos, k) {

    precos.sort((a, b) => a - b);
    let soma = 0;
    const somasPrefixo = precos.map(preco => {

        soma += preco;

        return soma;
    });

    let numeroDeBrinquedos;

    for(let index = 0; index < somasPrefixo.length; index += 1) {

        if (somasPrefixo[index] > k) {
            
            numeroDeBrinquedos = index;

            break;
        }
    }

    return numeroDeBrinquedos;
}