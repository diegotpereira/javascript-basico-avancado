

let stringEntrada = ['8, 2', '0, 0, 1, 0, 0, 1, 1, 0'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaPrimeiraEntrada = lerEntrada().split(' ');
    const n = parseInt(multiplaPrimeiraEntrada[0], 10);
    const k = parseInt(multiplaPrimeiraEntrada[1], 10);
    const c = lerEntrada().split(' ').map(cTemp => parseInt(cTemp, 10));

    const resultado = saltandoNasNuvens(c, k);

    console.log(resultado); // saída = 92
}

principal();

function saltandoNasNuvens(c, k) { // c = (8) [0, 0, 1, 0, 0, 1, 1, 0], k = [2] número de nuvens e a distância do salto.

    // energia nível = 100
    let energia = 100;

    // personagem comeca contar do zero
    let contar = 0;


    let indice; // indice = 2

    while (indice !== 0 && energia >= 0) { // indice = 2, energia = 100
                                           // indice = 2, energia = 97
                                           // indice = 4, energia = 96
                                           // indice = 6, energia = 93
                                           // indice = 0, energia = 92
        
        contar === 0 && (indice = 0); // contar 0, indice = 2 
                                      // contar = 1, indice = 4
                                      // contar = 2, indice = 6
                                      // contar = 3, indice = 0
                                      // contar = 4, indice = 0
                                      
        // usa 1 unidade de energia para fazer um salto de tamanho k para nuvem. c[i + k] % n.
        indice = (indice + k) % c.length; // indice = 2, k = 2, c = (8) [0, 0, 1, 0, 0, 1, 1, 0] 
                                          // indice = 4, k = 2, c = (8) [0, 0, 1, 0, 0, 1, 1, 0]
                                          // indice = 6, k = 2, c = (8) [0, 0, 1, 0, 0, 1, 1, 0]
                                          // indice = 0, k = 2, c = (8) [0, 0, 1, 0, 0, 1, 1, 0]

        // 
        energia = c[indice] > 0 ? energia - 3 : energia - 1; // energia = 97, c = (8) [0, 0, 1, 0, 0, 1, 1, 0], indice = 2; 
                                                             // energia = 96, c = (8) [0, 0, 1, 0, 0, 1, 1, 0], indice = 4
                                                             // energia = 93, c = (8) [0, 0, 1, 0, 0, 1, 1, 0], indice = 6
                                                             // energia = 92, c = (8) [0, 0, 1, 0, 0, 1, 1, 0], indice = 0
                                                             // energia = 92, c = (8) [0, 0, 1, 0, 0, 1, 1, 0], indice = 0
        contar++; // contar = 4
    }

    return energia;
}
