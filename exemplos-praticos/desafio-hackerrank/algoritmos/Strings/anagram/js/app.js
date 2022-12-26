let stringEntrada = ['6', 'aaabbb', 'ab', 'abc', 'mnop', 'xyyx', 'xaxbbbxx'];
let entradaAtual = 0;

function  lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < q; index += 1) {

        const s = lerEntrada();

        const resultado = anagram(s);

        console.log(resultado);
    }
}

principal();

function anagram(s) {

    // ponto meio string
    let meioString = Math.floor(s.length / 2);

    // primeira string
    let str1  = s.substring(0, meioString);

    // segunda string
    let str2 = s.substring(meioString);

    // rsto string
    if(s.length % 2 !== 0) {

        return - 1;
    }

    for(let index = 0; index < str1.length; index += 1) {

        str2.inclues(str1[index]) ? str2 = str2.replace(str1[index], "") : contar += 1;
    }

    return contar;
}