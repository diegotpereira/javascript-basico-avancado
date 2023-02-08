let stringEntrada = ['2', '2', '1, 1', '3', '2, 1, 4'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const g = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < g; index += 1) {
        
        const n = parseInt(lerEntrada().trim(), 10);

        const pilha = lerEntrada().replace(/\s+$/g, '')
                                  .split(' ')
                                  .map(pilhaTemp => parseInt(pilhaTemp, 10));

        const resultado = nimGame(pilha);

        console.log(resultado + '\n');
        
    }
}

principal();

// function nimGame(pilha) {

//     let contar = pilha[0];

//     for (let index = 1; index < pilha.length; index += 1) {

//         contar ^= pilha[index];
        
//     }

//     if (contar != 0) {
        
//         return 'Primeira';

//     } else {

//         return 'Segundo';
//     }
// }


function nimGame(pilha) {

    while (pilha > 0) {
        
        --pilha;

        let contar = 0;

        for (let index = 0; index < pilha; index += 1) {
            
            contar ^= pilha[index];
            
        }

        return (x > 0 ? "First" : "Second");

    }
}