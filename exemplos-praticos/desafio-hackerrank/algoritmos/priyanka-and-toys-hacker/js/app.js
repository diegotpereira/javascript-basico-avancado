let stringEntrada = ['8', '1, 2, 3, 21, 7, 12, 14, 21'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
    
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const w = lerEntrada().replace(/\s+$/g, '').split(' ').map(wTemp => parseInt(wTemp, 10));

    const resultado = brinquedo(w);

    console.log(resultado);
}

principal()

function brinquedo(w) { // w = (8) [1, 2, 3, 21, 7, 12, 14, 21]

    // classifica em ordem numerico w
    w.sort((a, b) => a - b); // w = (8) [1, 2, 3, 21, 7, 12, 14, 21]
 
    // peso inicial pelo primeiro item
    let peso = w[0] + 4; // peso 5

    // A empresa de transporte exige que todos os itens carregados em um 
    // contêiner pesem menos ou igual a 4 unidades mais o peso do item de peso mínimo.
    let conteiner = 1; // 1

    for(let i = 1; i < w.length; i++) { // w = (8) [1, 2, 3, 21, 7, 12, 14, 21] tamanho = 8

        // se w posição atual é maior que peso 5
        if(w[i] > peso) { // peso 5 11 16 25

            conteiner++; // saida: 2 3 4
            peso = w[i] + 4; // peso = 25
        }
    }

    // o menor número de contêineres que podem ser contratados para enviar os itens 
    // com base na lista de pesos fornecida
    return conteiner;
}