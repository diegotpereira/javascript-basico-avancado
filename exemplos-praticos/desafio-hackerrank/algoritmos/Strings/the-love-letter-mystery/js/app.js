let stringEntrada = ['4', 'abc', 'abcba', 'abcd', 'cba'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const s = lerEntrada();

        const resultado = theLoveLetterMystery(s);

        console.log(resultado);
    }
}

principal();

function theLoveLetterMystery(s) {

    let i = 0;
    let j = s.length - 1; 
    let contar = 0;
    // let dif = 0;

    while (i < j) {
        
        if (s.charAt(i) !== s.charAt(j)) { 
                                           
            
            let dif = Math.abs(s.charAt(i).charCodeAt() - s.charAt(j).charCodeAt());
            contar += dif; 
        }
        i++; 
        j--; 
    }

    return contar;
}
