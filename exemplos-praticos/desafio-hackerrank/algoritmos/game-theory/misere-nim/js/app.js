let stringEntrada = ['3','2', '1, 1', '3', '2, 1, 3', '6','9, 8, 4, 4, 4, 7'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index += 1) {
        
        const n = parseInt(lerEntrada().trim(), 10);

        const s = lerEntrada().replace(/\s+$/g, '')
                              .split(' ')
                              .map(stemp => parseInt(stemp, 10));

                            
        const resultado = misereNim(s);

        console.log(resultado + '\n');
        
    }
}

principal();

function misereNim(s) {

    // retorna um valor true ou false
    // resultando num único valor de retorno. // verdadeiro ou falso
    return ['First', 'Second'][s.some(v => v != 1) ? + !s.reduce((a, v) => a ^ v) : s.length % 2];
}