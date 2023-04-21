// A estratégia ótima para vencer o jogo é deixar um número múltiplo de 7 
// de pedras restantes para o jogador adversário, pois não importa quantas pedras 
// ele retire, sempre será possível deixar um múltiplo de 7 para o próximo jogador. 
// Caso o número de pedras restantes seja um múltiplo de 7 ou um número que difere 
// do múltiplo de 7 em 1, o segundo jogador (que joga por último) sempre ganhará, 
// porque ele pode sempre deixar um múltiplo de 7 para o primeiro jogador. Caso contrário, 
// o primeiro jogador sempre ganhará, pois ele pode sempre deixar um número de pedras que 
// não é múltiplo de 7 e não é um número que difere do múltiplo de 7 em 1, forçando o segundo 
// jogador a deixar um múltiplo de 7 para ele.


let stringEntrada = ['8', '1', '2', '3', '4', '5', '6', '7', '10'];

let entradaAtual = 0;

function  lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let tItr = 0; tItr < t; tItr += 1) {

        const n = lerEntrada();

        const resultado = gameOfStones(n);

        console.log(resultado + '\n');
    }
}

principal();

// function gameOfStones(n) {

//     if (n % 7 == 0 || n % 7 == 1) {
        
//         return "Second";

//     } else {

//         return "First";
//     }


// }

// function gameOfStones(n) {

//     var ar = Array(n);

//     ar[1] = 0,
//     ar[2] = 1,
//     ar[3] = 1, 
//     ar[4] = 1,
//     ar[5] = 1,
//     ar[6] = 1;


//     for (let index = 7; index <= n; index += 1) {
        
//         if (ar[index - 2] && ar[index - 3] && ar[index - 5] ) ar[index] = 0;
//         else ar[index] = 1;
        
//     }

//     return ar[n] ? 'First' : 'Second'
// }


// function gameOfStones(n) {

//     // Se o resto da divisão de n por 7 for menor do que 2, ou seja, 0 ou 1, o segundo jogador ganha,
//     // caso contrário, o primeiro jogador ganha
//     return (n % 7 < 2) ? "Second" : "First";
// }

function gameOfStones(n) {


    // se o número de pedras for múltiplo de 7, o segundo jogador ganha
    if (n % 7 === 0) {

        return "Second"

    // se a quantidade de pedras menos 1 for múltiplo de 7, o segundo jogador ganha
    } else if ((n - 1) % 7 === 0) {
        
        return "Second"
    }

    // caso contrário, o primeiro jogador ganha
    return "First"
}