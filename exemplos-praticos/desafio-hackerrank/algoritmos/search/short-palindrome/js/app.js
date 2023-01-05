let stringEntrada = ['kkkkkkz'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();

    const resultado = shortPalindrome(s);

    console.log(resultado + '\n');
}

principal();

function shortPalindrome(s) {

    const vistoContagem = Array(26).fill(0); // (26) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const contar = vistoContagem.slice(); // (26) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const contarxy = Array(26 * 26).fill(0); // (26) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    let totalConta = 0;
    const m = 1000000007; // modulo 10^9+7

    for(const k of s) {

        const x = k.charCodeAt(0) - 'a'.charCodeAt(0); // x = 10
        let xy = x; // 10
        totalConta = (totalConta + contar[x]) % m; // totalConta = 0;

        for(let index = 0; index < 26; index += 1) {

            contar[index] = (contar[index] + contarxy[xy]) % m; // contar[index] = 0
            contarxy[xy] = (contarxy[xy] + vistoContagem[index]) % m;
            xy += 26;
        }

        vistoContagem[x]++; 
    }

    return totalConta;
}