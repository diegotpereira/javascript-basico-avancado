let stringEntrada = ['3', 'aaab', 'baa', 'aaa'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i += 1) {

        const s = lerEntrada();

        const resultado = palindromeIndex(s);

        console.log(resultado);
    }
}

principal();

function palindromeIndex(s) {

    let resultado = - 1;
    const sLen = s.length;
    
    // consideração se a string por si só invertida não precisa de nenhum caractere removido para torná-la um palíndromo.
    if(sLen >= 1 && sLen <= 100005 & s !=  s.split('').reverse().join('')) { // sLen = 4, s = "aaab"
                                                                                  // sLen = 3, s = "baa"

        // loop for para percorrer os caracteres
        for(let index = 0; index < sLen; index += 1) { // sLen = 4
                                                       // sLen = 3

            if(s.charAt(index) != s.charAt(sLen - 1 - index)) { // s = "aaab", sLen = 4
                                                                   // s = "baa", sLen = 3
                // nova string
                let s1 = s.substring(0, index) + s.substring((index + 1)); // s = "aaab"
                                                                           // s = "baa"

                // reverso dessa string
                let s2 = s.substring(0, (sLen - 1 - index)) + s.substring((sLen - 1 - index) + 1); // sLen = 4;
                                                                                                     // sLen = 3

                if(s1 === s1.split('').reverse().join('')) {

                    resultado = index; // resultado = 3;
                                      // resultado = 0;
                                      /// resultado = - 1;

                } else if(s2 === s2.split('').reverse().join('')) {

                    resultado = sLen - 1 - index; // resultado = 3, sLen = 4
                                                  // resultado = 0, sLen = 3
                                                  // resultado = -1, sLen = 3
                }
                break;
            }
        }
    }
    return resultado;
}