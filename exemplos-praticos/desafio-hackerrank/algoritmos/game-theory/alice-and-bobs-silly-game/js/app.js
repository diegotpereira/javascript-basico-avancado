// define o input
let stringEntrada = ['3','1','2','5'];

// define o índice de entrada atual como zero
let entradaAtual = 0;

// função para ler a entrada
function lerEntrada () {

    // retorna a entrada atual e incrementa o índice
    return stringEntrada[entradaAtual++];
}

function principal() {

    const g = parseInt(lerEntrada().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = sillyGame(n);

        console.log(resultado + '\n');
    }
}

principal();

export function sillyGame(n) {

    let contar = 0;


    for (let index = 2; index <= n; index++) {
        
        if(ehPrimo(index)) contar++;
        
    }

    return contar % 2 === 0 ? 'Bob' : 'Alice';
}

function ehPrimo(n) {

    if(n < 2) return false;

    for (let index = 2; index <= Math.sqrt(n); index++) {
        
        if(n % index === 0) return false;
        
    }

    return true;
}