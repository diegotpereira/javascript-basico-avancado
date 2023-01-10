let stringEntrada = ['2','2', '10'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];

}

function principal() {

    const q = parseInt(lerEntrada(). trim(), 10);

    for (let index = 0; index < q; index++) {
        
        const x = parseInt(lerEntrada().trim(), 10);

        const resultado = theGreatXor(x);

        console.log(resultado + '\n');
        
    }
}

principal();

// function theGreatXor(x) {

//     let src = x.toString(2);
//     let rotulo = '';

//     for( const c of src) 

//         rotulo += c === '1' ? '0' : '1';
    
//         return parseInt(rotulo, 2);
// }


// function theGreatXor(x) {

//     return parseInt([...x.toString(2)].map(c => '10'[c]).join(''), 2);
// }


function theGreatXor(x) {

    for(var resposta = 0, index = 0; x > 0; x = Math.floor(x / 2), index += 1) {

        if(x % 2 === 0) 

            resposta += Math.pow(2, index);
    }

    return resposta;
}