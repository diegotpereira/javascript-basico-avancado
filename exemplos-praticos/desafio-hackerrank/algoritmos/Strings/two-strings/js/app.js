let stringEntrada = ['2', 'hello', 'world', 'hi', 'world'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const s1 = lerEntrada();
        const s2 = lerEntrada();

        const resultado = twoString(s1, s2);

        console.log(resultado);
    }
}

principal();

function twoString(s1, s2) {

    var mapa = {};

    for(let i = 0; i < s1.length; i++) {

        mapa[s1[i]] = true;
    }

    for(let j = 0; j < s2.length; j++) {

        if(mapa[s2[j]])
            return 'SIM';
    }

    return 'NAO';
}

// function twoString(s1, s2) {

//     const resultado = 'NAO';
//     const s1Len = s1.length;
//     const s2Len = s2.length;

//     if(s1Len >= 1 && s1Len <= 100000
//                   && s2Len >= 1
//                   && s2Len <= 100000) {
//                     resultado = (s1.split('').filter((el, key) => s2.indexOf(el) > -1).length > 0) ? 'SIM' : 'NAO';
//                   }

//                   return resultado;
// }