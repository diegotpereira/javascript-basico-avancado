let stringEntrada = ['5', 'AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const s = lerEntrada();

        const resultado = alternatingCharacters(s);

        console.log(resultado);
    }
}

principal();

function alternatingCharacters(s) {

    let resultado = 0;

    if(s.length >= 1 && s.length <= 100000) {

        // converter a string em uma matriz.
        let arr = s.split('');

        // dado anterior para compará-la com a dado atual
        let passado = arr[0]; // passado = "A"

        // percorrer o array, comparando com passado
        arr = arr.filter((item, chave) => { // item = "A", chave = 0
                                             // item = "A", chave = 1
                                             // item = "A", chave = 2
                                             // item = "A", chave = 3
                                             // item = "B", chave = 0
                                             // item = "B", chave = 1
                                             // item = "B", chave = 2
                                             // item = "B", chave = 3
                                             // item = "B", chave = 4
                                             // item = "A", chave = 0
                                             // item = "B", chave = 1
                                             // item = "A", chave = 2
                                             // item = "B", chave = 3
                                             // item = "A", chave = 4
                                             // item = "B", chave = 5
                                             // item = "A", chave = 6
                                             // item = "B", chave = 7
                                             // item = "B", chave = 0
                                             // item = "A", chave = 1
                                             // item = "B", chave = 2
                                             // item = "A", chave = 3
                                             // item = "B", chave = 4
                                             // item = "A", chave = 5
                                             // item = "A", chave = 0

            if(item !== passado && chave !== 0) {

                // redefinindo passado novamente
                passado = item; // item = "A"
                                // item = "A"
                                // item = "B"
                                // item = "B"
                                // item = "B"
                                // item = "B"
                                // item = "B"
                                // item = "A"
                                // item = "B"
                                
                                

                // reanexar a primeira letra da string original ao 
                // início de nossa matriz filtrada e atualizar o resultado 
                // com o novo valor
                return item; // item = "A"
                             // item = "A"
                             // item = "B"
                             // item = "B"
                             // item = "B"
                             // item = "B"
                             // item = "B"
                             // item = "A"

            }
        });

        // precisamos calcular o número de exclusões que fizemos em comparação 
        // com o número de letras que estavam na string original.
        // fazemos isso apenas subtraindo o comprimento total da string original 
        // pelo comprimento de nosso novo array.
        resultado = s.length - [s.charAt(0), ...arr].length; // resultado = 3, s = "AAAA"
                                                             // resultado = 4, s = "BBBBB"
                                                             // resultado = 0, s = "ABABABAB"
                                                             // resultado = 0, s = "BABABA"
                                                             // resultado = 4, s = "AAABBB"
                                                             // resultado = 4, s = "BBBBB"
                                                             // resultado = 0, s = "BABABA"
    }

    return resultado;
}