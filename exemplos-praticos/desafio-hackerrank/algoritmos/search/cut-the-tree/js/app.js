// Variáveis para entrada de dados
let stringEntrada = ['week', '2', '1, 4', '2, 3']; // Entrada de teste
let entradaAtual = 0; // Controla a próxima entrada a ser lida


// Função para ler entradas
function lerEntrada() {
    return stringEntrada[entradaAtual++];
}

// Função principal
function principal() {

    const n = parseInt(lerEntrada().trim(), 10); // Lê a string de entrada

    const data = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    let arestas = Array(n - 1);

    for (let index = 0; index < n - 1; index++) {
        
        arestas[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
        
    }

    const resultado = cutTheTree(data, arestas);

    console.log(resultado + '\n');
}

principal(); // Chama a função principal para executar o código

function cutTheTree(data, arestas) {

    let len = data.len();

    
}