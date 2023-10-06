// Array de strings contendo a entrada  
let entradaString = ['10101', '00101'];

// Variável para controlar a linha atual da entrada
let atualLinha = 0;

// Função para ler a próxima linha da entrada
function lerEntrada() {

    return entradaString[atualLinha++];
}

function principal() {

    // Lê o primeiro valor da entrada e converte para inteiro
    var a = lerEntrada().trim();

    // Lê o segundo valor da entrada e converte para inteiro
    var b = lerEntrada().trim();

    // Chama a função countArray para obter o resultado
    var resultado = stringsXOR(a, b)

    // Imprime o resultado
    console.log(resultado + '\n');
}

// Executa a função principal
principal();

// Função para realizar a operação XOR entre duas strings 'a' e 'b'
function stringsXOR(a, b) {

    // Inicializa uma string vazia para armazenar o resultado da operação XOR
    var res = "";

    // Percorre cada posição das strings 'a' e 'b'
    for (var i = 0; i < a.length; i++) {

        // Verifica se o caractere em 'a' na posição 'i' é diferente do caractere em 'b' na mesma posição
        if (a[i] !== b[i]) {

            // Se forem diferentes, concatena '1' ao resultado 'res'
            res += "1";

        } else {

            // Se forem iguais, concatena '0' ao resultado 'res'
            res += "0";
        }
    }

    // Retorna a string resultante após a operação XOR bit a bit
    return res;
}