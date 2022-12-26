let stringEntrada = ['cde', 'abc'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s1 = lerEntrada();
    const s2 = lerEntrada();

    const resultado = makingAnagrams(s1, s2);

    console.log(resultado);
}

principal();

function makingAnagrams(s1, s2) {

    let resultado = null;
    let index = 0;
    let contar = 0;

    while (index < s1.length) { // index = 0, s1 = "cde"
                                 // index = 0, s1 = "cde"
        
        contar = 0; // contar = 1
                    // contar = 2

        while (contar < s2.length) { // contar = 0, s2 = "abc"
                                     // contar = 1, s2 = 
                                     // contar = 2, s2 = "abc"
            
            if(s1[index] === s2[contar]) {

                s1 = s1.replace(s1[index], ''); // s1 = "cde", index = 0
                                                // s1 = "cde", index = 0
                                                // s1 = "de", index = 0


                s2 = s2.replace(s2[contar], ''); // s2 = "abc", contar = 0
                                                 // s2 = "abc", contar 1
                                                 // s2 = "ab", contar = 2
                contar = 0;
            }
            contar += 1;
        }
        index += 1;
    }

    resultado = s1.length + s2.length;

    return resultado;
}