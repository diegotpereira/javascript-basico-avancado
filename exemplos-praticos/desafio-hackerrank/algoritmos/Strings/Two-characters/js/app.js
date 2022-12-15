let stringEntrada = ['10', 'beabeefeab'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const l = parseInt(lerEntrada().trim(), 10); // l = 10
    const s = lerEntrada(); // s = beabeefeab

    const resultado = alternativa(s);

    console.log(resultado);
}

principal();

function alternativa(s) { // s = beabeefeab
    var m = {}; // m = 
    for(let i = 0, len = s.length; i < len; i++) { // s.length = 5

        m[s[i]] ? m[s[i]]++ : m[s[i]] = 1; // m = {b: 3, e: 4, a: 2, f: 1}, s = "beabeefeab"
    }
    const classificado = Object.keys(m).sort((a, b) => m[a] > m[b]); // classificado (4) ['b', 'e', 'a', 'f'], m = {b: 3, e: 4, a: 2, f: 1}
    let pares = [];

    for(let i = 0, len = classificado.length; i < len; i++) { // classificado.length = (4) ['b', 'e', 'a', 'f']

        for(let j = i + 1; j < len; j++) {

            Math.abs(m[classificado[i]] - m[classificado[j]]) <= 1 ? pares.push([classificado[i], classificado[j]]) : null; 
                   // m = {b: 3, e: 4, a: 2, f: 1}, classificado = (4) ['b', 'e', 'a', 'f'], pares = (3) [Array(2), Array(2), Array(2)]
        }
    }

    let maxContar = 0;

    // some() testa se ao menos um dos elementos no array 
    // passa no teste implementado pela função atribuída e retorna um valor true ou false.
    pares.some(par => { // par (2) ['b', 'e']

        let ehPrimeiro = null;
        let contar = 0;

        for(let i = 0, len = s.length; i < len; i++) {

            if(s[i] === par[0]) { // par (2) ['b', 'e']

                if(ehPrimeiro == null || !ehPrimeiro) { // ehPrimeiro = null

                    ehPrimeiro = true; 
                    contar++; // contar = 1 2 3 

                } else {

                    break;
                }
            } else if (s[i] === par[1]) { // par (2) ['b', 'e']
                
                if(ehPrimeiro == null || ehPrimeiro) { // ehPrimeiro = true

                    ehPrimeiro = false; // ehPrimeiro = true
                    contar++; // contar = 1 2 3 4 - 1 4 5

                } else {

                    break;
                }
            }
            if(i === s.length - 1 && contar > maxContar) {

                maxContar = contar;
            }
        }
    });

    return (maxContar);
}