let stringEntrada = ['6, 3', '5, 1', '2, 1', '1, 1', '8, 1', '10, 0','5, 0'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);

    let concursos = Array(n);

    for(let i = 0; i < n; i++) {

        concursos[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(concTemp => parseInt(concTemp, 10));
    }

    const resultado = saldoSorte(k, concursos);

    console.log(resultado);
}

principal();

function saldoSorte(k, concursos) {

    let balanco = 0;
    const perdivel = [];

    for(const[sorte, ehImportante] of concursos) {

        // Se for importante, resolvemos depois
        if(ehImportante) 

            perdivel.push(sorte);
        // Caso contrário, já podemos contar
        else
            
            balanco += sorte;
    }

    // Se podemos perder tudo, não é necessário classificar
    if(k < perdivel.length) 

        perdivel.sort((a, b) => b - a);

    for(const sorte of perdivel) 

        // Enquanto há espaço para perder, faça!
        balanco += k-- > 0 ? sorte : -sorte;

    return balanco;
    
}