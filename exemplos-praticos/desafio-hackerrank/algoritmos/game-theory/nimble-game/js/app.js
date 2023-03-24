let stringEntrada = ['2', '5', '0, 2, 3, 0, 6', '4', '0, 0, 0, 0'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index += 1) {
        
        const n = parseInt(lerEntrada().trim(), 10);
        const s = lerEntrada().replace(/\s+$/g, '')
                              .split(' ').map(sTemp => parseInt(sTemp, 10));

        const resultado = nimbleGame(s);

        console.log(resultado + '\n');
        
    }
}

principal();

function nimbleGame(s) {

    let contar = 0;

    for (let index = 0; index < s.length; index += 1) {

        if(s[index] % 2 == 1) { // 3 = 1, 

            contar ^= index;
        }
    }

    if (contar == 0) {
        
        return 'Segundo';

    } else {

        return 'Primeiro';
    }
}