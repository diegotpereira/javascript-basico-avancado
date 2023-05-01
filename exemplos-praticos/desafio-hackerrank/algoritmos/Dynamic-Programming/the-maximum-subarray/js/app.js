// A tarefa do problema Max Array Subarray é encontrar a 
// soma máxima possível de um subarray contíguo (um subconjunto contíguo de elementos em um array) 
// e a soma máxima possível de uma subsequência não contígua (um subconjunto de elementos em um array, 
// não necessariamente contíguos) em um array de números inteiros. O problema pede para implementar uma 
// função que recebe um array de números inteiros e retorna um array com duas respostas, sendo a primeira 
// a soma máxima do subarray contíguo e a segunda a soma máxima da subsequência não contígua.    
    
     
    // define o input
    // let stringEntrada = ['1, 2, 3, 4'];
    // let stringEntrada = ['4', '1, 2, 3, 4', '6', '2, -1, 2, 3, 4, -5'];
    let stringEntrada = ['2','4','1, 2, 3, 4', '6', '2, -1, 2, 3, 4, -5'];

    // define o índice de entrada atual como zero
    let entradaAtual = 0;

    // função para ler a entrada
    function lerEntrada () {

        // retorna a entrada atual e incrementa o índice
        return stringEntrada[entradaAtual++];
    }

    function principal() {

        const t = parseInt(lerEntrada().trim(), 10);
        

        for (let tItr = 0; tItr < t; tItr++) {
            
            const n = parseInt(lerEntrada().trim(), 10);
            
            const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

            const resultado = maxSubarray(arr);

            console.log(resultado);
            // console.log(resultado.join(' ') + '\n');
            
        }
    }

    principal();

// export function maxSubarray(arr) {

//     let resultado = 0;
//     let subseq_soma = 0;
//     let subarr_soma = 0;

//     // percorre o array de entrada
//     arr.forEach((data) => {

//         subseq_soma += data;

//         // se o elemento atual é positivo, adiciona à soma do subarray
//         if(data > 0)

//             subarr_soma += data;


//         // atualiza o resultado caso a soma atual do subarray seja maior que o resultado atual
//         if(resultado < subseq_soma)

//             resultado = subseq_soma;

//         // se a soma atual do subarray é negativa, zera para começar um novo subarray
//         if(subseq_soma < 0)

//             subseq_soma = 0;
//     });

//     // caso o resultado seja zero, significa que todos os elementos são negativos
//     // e a maior soma será o maior valor absoluto do array
//     if (resultado === 0) {
        
//         return [Math.max(...arr), Math.max(...arr)];
         
//     } else {

//         // caso contrário, retorna o resultado da maior soma de subarray e subsequência
//         return {resultado, subarr_soma}
//     }
// }

// export function maxSubarray(arr) {

//     // Inicialização das variáveis com os valores negativos infinito.
//     let C = Number.NEGATIVE_INFINITY, B = C, M = B, P = 0;

//     // Percorre o array de entrada.
//     arr.forEach(X => {

//         // Armazena o maior valor presente no array.
//         M = Math.max(M, X);

//         // Armazena a maior soma de subarray contíguo.
//         P = Math.max(P, P + X);

//         // Armazena a maior soma de subarray não necessariamente contíguo.
//         B = Math.max(B, C = Math.max(X, C += X));
//     });

//     // Retorna a maior soma de subarray e subsequência.
//     return [B, M < 0 ? M : P];
// }

export function maxSubarray(arr) {

    // variável para armazenar a soma máxima de subarray
    let subarray = 0;

    // variável para armazenar a soma atual
    let soma = 0;

    // variável para armazenar a soma máxima de subsequência
    let subsequencia = 0;

    // array para armazenar as respostas
    let respostas = [];

    // inicializando a variável subarray com o primeiro elemento do array
    subarray = arr[0];

    for (let index = 0; index < arr.length; index++) {
        
        // se o elemento atual for positivo, adiciona ao subsequencia
        arr[index] > 0 ? subsequencia += arr[index] : "";

        // adiciona o elemento atual à soma
        soma += arr[index];

        // se a soma atual for maior que o subarray
        if (soma > subarray) {
            
            // atualiza o valor de subarray
            subarray = soma;
        }

        // se a soma atual for menor que zero
        if (soma < 0) {
            
            // reinicia a variável soma
            soma = 0;
        }
    }

    // se a subsequência for zero, atualiza com o valor de subarray
    subsequencia === 0 ? subsequencia = subarray : ""

    // adiciona as respostas ao array
    respostas.push(subarray, subsequencia)

    // retorna o array com as respostas
    return respostas
}