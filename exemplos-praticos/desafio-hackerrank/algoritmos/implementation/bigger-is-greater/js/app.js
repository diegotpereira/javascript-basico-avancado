let stringEntrada = ['5', 'ab', 'bb', 'hefg', 'dhck', 'dkhc'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < n; i += 1) {

        const w = lerEntrada();

        const resultado = biggerIsGreater(w);

        console.log(resultado); // saída: ba, sem resposta, hegf, dhkc, hcdk
    }
}

principal();

function biggerIsGreater(w) {

    // a verificação começa no penúltimo caractere (w[i]; i=w.length-2) na string.
    // Se qualquer caractere depois disso for maior (w[i] < qualquer um de w[i-1....w.length]), 
    // então inicia o processo de reordenação.

    // array para armazenar o menor caractere e w[i]
    var permanecerChar = [];
    permanecerChar.push(w[w.length - 1]);

    // começa do penúltimo e muda para a esquerda se não houver resultado.
    for(let i = w.length - 2; i >= 0; i--) {

        permanecerChar.push(w[i]);

        // Verifique se algum caractere após w[i] é maior que w[i].
        var adaptarChar;

        for(let j = i + 1; j < w.length; j += 1) {

            if(w[i] < w[j] && (w[j] < adaptarChar || adaptarChar == undefined)) {

                adaptarChar = w[j];
            }
        }
        if(adaptarChar != undefined) {

            // mantenha a ordem no lado direito + substitua o valor + ordem alfabética dos caracteres restantes.
            let resultado = w.substring(0, i) + adaptarChar + permanecerChar.sort().join('').replace(adaptarChar, '');

            return resultado;
        }
    }
    return 'sem resposta';
}