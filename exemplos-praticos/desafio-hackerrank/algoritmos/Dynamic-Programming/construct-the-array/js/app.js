// A tarefa do problema "Construct the Array" no HackerRank é determinar o número 
// de maneiras únicas de construir um array de tamanho n com determinadas restrições.

// A tarefa requer a implementação de uma função chamada "countArray" que recebe os seguintes parâmetros:

// n: um inteiro que representa o tamanho do array.
// k: um inteiro que representa o limite superior para os valores do array.
// x: um inteiro que representa o valor restrito que não pode aparecer em sequência repetida.
// A função deve retornar um número inteiro que representa o número de maneiras únicas de construir o 
// array de tamanho n com as seguintes restrições:

// O array consiste em números inteiros positivos.
// Cada elemento do array deve ser um valor inteiro entre 1 e k, inclusive.
// Não pode haver dois elementos consecutivos iguais ao valor de x.
// O objetivo é contar o número de maneiras possíveis de construir o array obedecendo a essas restrições. 
// O cálculo pode ser feito por meio de programação dinâmica, onde é necessário encontrar uma fórmula 
// recursiva para contar as maneiras únicas de construir o array.






// Array de strings contendo a entrada  
let entradaString = ['4, 3, 2'];

// Variável para controlar a linha atual da entrada
let atualLinha = 0;

// Função para ler a próxima linha da entrada
function lerEntrada() {

    return entradaString[atualLinha++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    // Lê o primeiro valor da entrada e converte para inteiro
    const n = parseInt(primeiraMultiplaEntrada[0], 10);

    // Lê o segundo valor da entrada e converte para inteiro
    const k = parseInt(primeiraMultiplaEntrada[1], 10);

    // Lê o terceiro valor da entrada e converte para inteiro
    const x = parseInt(primeiraMultiplaEntrada[2], 10);

    // Chama a função countArray para obter o resultado
    const resultado = countArray(n, k, x);

    // Imprime o resultado
    console.log(resultado + '\n');
}

// Executa a função principal
principal();

// export function countArray(tamanhoArrayParaConstruido, valorMaximoPermitidoElemento, elementoEspecialRepetido) {

//     // Valor de módulo para calcular o resultado
//     const mod = Math.pow(10, 9) + 7;

//     // Array para armazenar os valores finais em X
//     const finalEmX = new Array(valorMaximoPermitidoElemento + 1).fill(0);

//     // Array para armazenar os valores não finais em X
//     const naoFinalEmX = new Array(valorMaximoPermitidoElemento + 1).fill(0);

//     // Define o valor inicial de finalEmX[1] baseado na condição
//     finalEmX[1] = elementoEspecialRepetido == 1 ? 1 : 0;

//     // Define o valor inicial de naoFinalEmX[1] baseado na condição
//     naoFinalEmX[1] =  elementoEspecialRepetido == 1 ? 0 : 1;


//     for (let index = 2; index <= tamanhoArrayParaConstruido; index++) {
        
//         // Calcula o valor de finalEmX[index]
//         finalEmX[index] = naoFinalEmX[index - 1] % mod;

//         // Calcula o valor de naoFinalEmX[index]
//         naoFinalEmX[index] = (finalEmX[index - 1] * (valorMaximoPermitidoElemento - 1) + 
//         naoFinalEmX[index - 1] * (valorMaximoPermitidoElemento - 2)) % mod;
//     }

//     // Retorna o valor final em X correspondente a n
//     return finalEmX[tamanhoArrayParaConstruido];
// }


// export function countArray(tamanhoArrayParaConstruido, valorMaximoPermitidoElemento, elementoEspecialRepetido) {

//     let contarTotal = [1];
//     let contarPorElemento = [1];

//     for (let index = 2; index <= valorMaximoPermitidoElemento; index++) {
        
//         contarPorElemento[index - 1] = 0;
        
//     }

//     for (let index = 1; index < tamanhoArrayParaConstruido - 1; index++) {
        
//         let contar = 0;

//         const ultimaContaTotal = contar[index - 1];

//         for (let compare = 1; compare <= contarPorElemento; compare++) {
            
//             const ultimoElementoContar = contarPorElemento[compare - 1];
//             const elemetoContar = ultimaContaTotal - ultimoElementoContar;

//             contarPorElemento[compare - 1] = elemetoContar;
//             contarTotal += elemetoContar;
            
//         }

//         contarTotal.push(contar);
        
//     }

//     const resultadoContarTotal = contarTotal.pop();
//     const resultadoContarElemento = contarPorElemento[valorMaximoPermitidoElemento - 1];

//     return resultadoContarTotal - resultadoContarElemento;
// }



// export function countArray(n, k, x) {
//     // Return the number of ways to fill in the array.
//     let totalCounts = [ 1 ] ;
//     const countByElement = [ 1 ];
    
//     for(let i = 2; i <= k; i++){
//         countByElement[i - 1] = 0;
//     }
    
//     for(let i = 1; i < n - 1; i++){
//         let totalCount = 0;
//         const lastTotalCount = totalCounts[i - 1];
                    
//         for(let j = 1; j <= countByElement.length; j++){
//             const lastElementCount = countByElement[j - 1];            
//             const elementCount = lastTotalCount - lastElementCount;
//             countByElement[j - 1] = elementCount;
//             totalCount += elementCount;
//         }

//         totalCounts.push(totalCount);
//     }
    
//     const resultTotalCount = totalCounts.pop();
    
//     const resultElementCount = countByElement[k - 1];
    
//     return resultTotalCount - resultElementCount;
// }


// n: um inteiro que representa o tamanho do array.
// k: um inteiro que representa o limite superior para os valores do array.
// x: um inteiro que representa o valor restrito que não pode aparecer em sequência repetida.


// Função para contar elementos em um array com restrição de valor limite
export function countArray(array, valorLimite, valorRestrito) {

    // Módulo utilizado para evitar estouro numérico
    const mod = Math.pow(10, 9) + 7;

    // Valor inicial de a
    let a = 1;

    // Valor inicial de b
    let b = 0;

    // Loop para calcular os valores de a e b
    for(let i = 2; i <= array; i++) {

        // Valor intermediário para atualizar a
        const aa = b * (valorLimite - 1);

        // Valor intermediário para atualizar b
        const bb = a + b * (valorLimite - 2);

        // Atualiza o valor de a com o módulo
        a = aa % mod;

        // Atualiza o valor de b com o módulo
        b = bb % mod;
    }

    // Retorna o valor de b se valorRestrito for maior que 1, caso contrário retorna o valor de a
    return valorRestrito > 1 ? b : a ;
}