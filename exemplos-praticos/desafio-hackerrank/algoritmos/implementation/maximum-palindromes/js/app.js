// A tarefa do problema "Maximum Palindromes" no HackerRank é calcular o número máximo de palíndromos 
// únicos que podem ser formados a partir de uma string dada. O problema envolve os seguintes elementos-chave:

// Você recebe uma string S que contém apenas letras minúsculas do alfabeto inglês ('a' a 'z').

// A tarefa é responder a várias consultas. Cada consulta especifica um intervalo [L, R] da string S.

// Para cada consulta, você deve determinar quantos palíndromos únicos podem ser formados usando os 
// caracteres no intervalo [L, R] da string S.

// A resposta deve ser dada em módulo 10^9 + 7.

// Você precisa calcular e retornar a resposta para cada consulta.


// Variáveis para entrada de dados
let stringEntrada = ['week', '2', '1, 4', '2, 3']; // Entrada de teste
let entradaAtual = 0; // Controla a próxima entrada a ser lida

// Variáveis para processamento
let maximum = 26; // O tamanho máximo, que parece estar relacionado ao alfabeto
let arr = []; // Matriz para armazenar contagens de caracteres
let fac = []; // Vetor de fatorial
let mod = []; // Vetor para armazenar valores de módulo
let M = 1000000007; // Valor de módulo

// Função para inicializar as variáveis
function initialize(s) {
    let n = s.length; // Comprimento da string de entrada

    // Inicializa a matriz 'arr' com zeros
    arr = new Array(maximum).fill(0).map(() => new Array(n + 1).fill(0));

    // Preenche a matriz 'arr' com contagens de caracteres
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < maximum; j++) {
            arr[j][i + 1] = arr[j][i] + ((s.charCodeAt(i)) - 97 == j);
        }
    }

    // Inicializa os vetores 'fac' e 'mod' para cálculos posteriores
    fac = new Array(n + 1).fill(1);
    mod = new Array(n + 1).fill(1);

    // Calcula valores de fatorial e módulo
    for (let i = 1; i <= n; i++) {
        fac[i] = (fac[i - 1] * i) % M;
        mod[i] = modPow(fac[i], M - 2, M);
    }
}

// Função para responder consultas
export function answerQuery(l, r) {
    let odd = 0; // Contador para números ímpares
    let even = 0; // Contador para números pares
    let divs = 1; // Divisores

    // Percorre a matriz 'arr' para calcular contagens de caracteres
    for (let i = 0; i < maximum; i++) {
        let value = arr[i][r] - arr[i][l - 1];
        odd += Math.floor(value % 2);
        even += Math.floor(value / 2);
        divs = (divs * mod[Math.floor(value / 2)]) % M;
    }

    // Calcula o resultado com base nos contadores
    let result = (fac[even] * divs) % M;

    if (odd > 0) {
        result = (result * odd) % M;
    }

    return result;
}

// Função para calcular exponenciação modular
function modPow(x, y, p) {
    let res = 1;
    x = x % p;

    while (y > 0) {
        if (y % 2 === 1) {
            res = (res * x) % p;
        }
        y = Math.floor(y / 2);
        x = (x * x) % p;
    }

    return res;
}

// Função para ler entradas
function lerEntrada() {
    return stringEntrada[entradaAtual++];
}

// Função principal
function principal() {
    const s = lerEntrada(); // Lê a string de entrada

    initialize(s); // Inicializa as variáveis

    const q = parseInt(lerEntrada().trim(), 10); // Lê o número de consultas

    // Realiza as consultas e imprime os resultados
    for (let qItr = 0; qItr < q; qItr++) {
        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const l = parseInt(primeiraMultiplaEntrada[0], 10); // Lê o primeiro valor da consulta
        const r = parseInt(primeiraMultiplaEntrada[1], 10); // Lê o segundo valor da consulta
        const resultado = answerQuery(l, r); // Calcula o resultado da consulta
        console.log(resultado); // Imprime o resultado
    }
}

principal(); // Chama a função principal para executar o código
