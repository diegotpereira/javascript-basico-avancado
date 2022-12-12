let entradaString = ['5', '2, 3, 4, 5, 6'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const b = lerEntrada().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const resultado = raefeicoesJustas(b);

    console.log(resultado);

}

principal();

function raefeicoesJustas(b) {

    let temp = b;
    let paes = 0;
    let i = 0;

    // Cada vez que você dá um pão para alguém i, 
    // você também deve dar um pão para a pessoa 
    // imediatamente à frente ou atrás deles na fila (ou seja, pessoas - 1)
    for(i = 0; i < temp.length - 1; i++) {

        if(temp[i] % 2 != 0) {

            temp[i]++;
            temp[i + 1]++;
            paes++;
        }
    }
    // Depois que todo o pão for distribuído, cada pessoa deve ter um número par de pães.
    if(temp[i] % 2 === 0) {

        return paes * 2;
    }

    temp = [];
    paes =0;
    i = 0;

    

    for(i = temp.length - 1; i > 0; i--) {

        if(temp[i] % 2 != 0) {

            temp[i]++;
            temp[i - 1]++;
        }
    }
    if(temp[i] % 2 === 0) {

        return paes *2;
    }

    // Dado o número de pães já possuído por cada cidadão, 
    // encontre e imprima o número mínimo de pães que você 
    // deve distribuir para satisfazer as duas regras acima.
    // Se n~~ao for possível imprima NÃO.
    return "NÃO";
}