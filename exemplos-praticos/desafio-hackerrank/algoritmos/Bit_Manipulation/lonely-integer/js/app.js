// let stringEntrada = ['1', '1'];
// let stringEntrada = ['5', '0, 0, 1, 2, 1']
let stringEntrada = ['3', '1, 1, 7']
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const resultado = lonelyinteger(a);

    console.log(resultado + '\n');
}

principal();

// function lonelyinteger(a) {

//     for (let index = 0; index < a.length; index++) {

//         if (a.filter((x) => x === a[index]).length === 1) {
            
//             return a[index];
//         }
        
//     }
// }

// function lonelyinteger(a) {

//     let mapa = new Map();

//     for (let index = 0; index < a.length; index += 1) {

//         // verifica ocorrencia do elemento
//         mapa.set(a[index], mapa.has(a[index]) ? 2 : 1);
        
//     }

//     for(let elemento of mapa) {

//         if(elemento[1] == 1) return elemento[0];
//     }
// }


// function lonelyinteger(a) {

//     for (let index = 0; index < a.length; index++) {
        
//         if (a.indexOf(a[index]) == a.lastIndexOf(a[index])) {
            
//             return a[index];
//         }
        
//     }
// }


function lonelyinteger(a) {

    // desestruturar o primeiro (e único) elemento, classificar e depois reduzir
    const [sozinho] = a.sort((a, b) => a - b).reduce((acumulador, atual) => {

        // aqui vamos iniciar a redução com um array vazio e verificar
        // se o inteiro atual já estiver no array
        if (!acumulador.includes(atual)) {
            
            // se não, vamos adicioná-lo
            acumulador.push(atual);

        } else {

            // se sim, removeremos o último elemento.
            // Desta forma estaremos removendo todas as duplicatas
            acumulador.pop();
        }

        // retorna o array para a próxima iteração
        return acumulador;
    }, []);

    return sozinho;
}