let entradaString = ['aba', '10'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const s = lerEntrada();
    const n = parseInt(lerEntrada().trim(), 10);

    const resultado = repeteString(s, n);

    console.log(resultado);
}

principal();

function repeteString(s, n) {

    // s = string para repetir
    // n = número de caracteres a considerar    

    let ocorrenciaLetraA = (s.split("a").length - 1);
    // console.log(s); // saída: aba
    // console.log(ocorrenciaLetraA); // saida: 2 vezes

    // console.log(n); // saida: 10
    // console.log(s.length); // 3
    let maxCaracteresAConsiderar = Math.floor(n / s.length);
    // console.log(maxCaracteresAConsiderar); // saída 3

    let totalDeA = ocorrenciaLetraA * maxCaracteresAConsiderar;
    // console.log(totalDeA); // saída 6

    // slice() retorna uma cópia de parte de um array a partir de um 
    // subarray criado entre as posições início e fim
    // console.log(s.slice(0, n % s.length)); // saída: a
    totalDeA += (s.slice(0, n % s.length).split("a").length - 1);
    // console.log(totalDeA); // saída: 7

    return totalDeA;




}