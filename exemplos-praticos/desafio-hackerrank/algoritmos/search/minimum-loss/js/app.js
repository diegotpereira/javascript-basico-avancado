let stringEntrada = ['3', '5, 10, 3'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    const price = lerEntrada().replace(/\s+$/g, '').split(' ').map(priceTemp => parseInt(priceTemp, 10));

    const resultado = minimumLoss(price);

    console.log(resultado + '\n');
}

principal()

// export function minimumLoss(preco) {

//     // Cria um objeto que mapeia cada preço ao seu índice no array
//     const preco_indice = {};

//     for (let index = 0; index < preco.length; index++) {

//         preco_indice[preco[index]] = index;
        
//     }

//     // Ordena o array de preços em ordem decrescente
//     preco.sort((a, b) => b - a);

//     // Inicializa a perda mínima como infinito para garantir que qualquer perda seja menor do que ela
//     let perda_minima = Infinity;

//     // Compara cada par de preços, procurando o menor par em que o preço mais alto vem antes do preço mais baixo
//     for (let index = 0; index < preco.length - 1; index++) {

//         const ano_atual = preco_indice[preco[index]]
//         const proximo_ano = preco_indice[preco[index + 1]]

//         if (ano_atual < proximo_ano && preco[index] - preco[index + 1] < perda_minima) {
            
//             perda_minima = preco[index] - preco[index + 1];
//         }
        
//     }

//     // Retorna a perda mínima encontrada
//     return perda_minima;
// }



// // Função que recebe um array de preços de uma casa em diferentes anos e retorna a mínima perda possível na venda da casa.
// export function minimumLoss(preco) {

//     // Caso haja apenas dois anos, calcula e retorna a diferença entre os dois preços, que é a mínima perda possível.
//     if(preco.length === 2) return preco[1] - preco[0];

//     // Faz a ordenação rápida dos preços em ordem crescente e armazena em um array temporário.
//     const tmp = ordenacaoRapida(preco);

//     // Cria um Map para armazenar os preços e seus respectivos índices no array de preços.
//     const hasMap = new Map();

//     // Itera sobre o array de preços e adiciona cada preço e seu índice ao Map.
//     preco.forEach((value, index) => {

//         hasMap.set(value, index);
//     });

//     // Inicializa a variável que armazenará a mínima perda possível com o maior valor possível.
//     let min = Number.MAX_SAFE_INTEGER;

//     // Itera sobre o array temporário de preços, comparando cada preço com seu antecessor.
//     for (let index = 1; index < tmp.length; index++) {
        
//         // Calcula a diferença financeira entre o preço atual e o anterior.
//         let finance = tmp[index] - tmp[index - 1];

//         // Verifica se o preço anterior tem um índice maior do que o atual no Map e se a diferença financeira é menor do que a atual mínima perda.
//         if(hasMap.get(tmp[index]) < hasMap.get(tmp[index - 1]) && finance < min) {

//             // Atualiza a mínima perda possível com a nova diferença financeira.
//             min = finance
//         }
//     }

//     // Retorna a mínima perda possível.
//     return min;
// }

// // Função de ordenação rápida.
// function ordenacaoRapida(arr) {

//     // Caso o array tenha tamanho menor que 2, retorna o array.
//     if(arr.length < 2) {

//         return arr;
//     }

//     // Seleciona um elemento aleatório do array como pivô
//     const pivo =  arr[Math.floor(Math.random() * arr.length)];

//     // Inicializa arrays para armazenar valores menores, iguais e maiores do que o pivô.
//     let left = []
//     let right = []
//     let equal = []

//     // Itera sobre o array, adicionando cada valor em um dos arrays de acordo com sua relação com o pivô.
//     for (let val of arr) {

//         if (val < pivo) {

//             left.push(val);
             
//         } else if(val > pivo) {

//             right.push(val)

//         } else {

//             equal.push(val);
//         }
//     }

//     // Retorna o resultado da chamada recursiva da função para os valores menores e maiores do que o pivô, 
//     // concatenando com os valores iguais ao pivô.
//     return [...ordenacaoRapida(left), ...equal, ...ordenacaoRapida(right)]
// }

// export function minimumLoss(preco) {

//     // Inicializa a variável "min" com o valor "Infinity"
//     let min = Infinity;

//     // Mapeia o array "preco" em um array de arrays, onde cada subarray é da forma [valor, índice]
//     let p = preco.map((v, i) => [+v, +i]).sort((a, b) => a[0] - b[0]);

//     // Itera sobre os elementos do array "p"
//     for (let index = 0; index < p.length - 1; index++) 

//         // Se o índice do próximo elemento for menor que o índice do elemento atual,
//         // então eles estão fora de ordem e representam uma perda potencial
//         if(p[index + 1][1] < p[index][1]) 
            
//             // Atualiza o valor de "min" para o mínimo entre o valor da perda atual e o valor de "min"
//             min = Math.min(p[index + 1][0] - p[index][0], min)


//     return min;

// }

