let stringEntrada = ['2', 'acxz', 'bcxz'];
let entradaAtual = 0;

function lerEntrada () {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const s = lerEntrada();

        const resultado = funnyString(s);

        console.log(resultado);
    }
}

principal();

function funnyString(s) {

    let n = s.split('') // n = (4) ['a', 'c', 'x', 'z'], s = 'acxz

    // método slice(). Ele cria uma cópia do array "n" e, em seguida, 
    // o método reverse() o modifica.
    let r = n.slice().reverse(); // r = (4) ['z', 'x', 'c', 'a']
    let j = 1;

    // loop no array "n" para verificar o elemento atual com o anterior, 
    // começando pelo elemento com o índice “1”:
    for(let i = 1; i < n.length; i++) {

        // Math.abs(x) retorna o valor absoluto de um número "x"
        // charCodeAt() retorna um número inteiro entre 0 e 65535 que representa a unidade de código UTF-16 no índice fornecido. 
        // n = (4) ['a', 'c', 'x', 'z'],
        // r = (4) ['z', 'x', 'c', 'a']
        // comparar a diferença absoluta nos valores ASCII dos caracteres, com o método Math.abs()
        if(Math.abs(n[i].charCodeAt() - n[i-1].charCodeAt()) === Math.abs(r[i].charCodeAt() - r[i-1].charCodeAt())) {
            

            // Se a diferença absoluta dos valores ASCII de n elementos for igual a r elementos, 
            // vamos incrementar "j", que é atribuído a "1" para nossa conveniência.
            j++;
        }
    }

    // j = 4, n = 4 = Funny / j = 2, n = 4 = Not Funny
    // E então a função retorna "Funny" no caso de todas as 
    // condições serem verdadeiras e j foi incrementado toda vez 
    // que eu verifiquei se a diferença de valores ASCII dos elementos é a mesma, 
    // outras maneiras de a função retornar Not Funny;
    return j === n.length ? 'Funny' : 'Not Funny';
}
