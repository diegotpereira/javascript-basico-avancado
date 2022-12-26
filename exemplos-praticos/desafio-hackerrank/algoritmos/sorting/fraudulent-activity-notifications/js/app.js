let stringEntrada = ['9, 5','2, 3, 4, 2, 3, 6, 8, 4, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraEntradaMultipla = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraEntradaMultipla[0], 10);
    const d = parseInt(primeiraEntradaMultipla[1], 10);

    const despesa = lerEntrada().replace(/\s+$/g, '').split(' ')
                                .map(despesaTemp => parseInt(despesaTemp, 10));

    const resultado = activityNotifications(despesa, d);

    console.log(resultado);
}

principal();

function activityNotifications(despesa, d) {

    let notificacoes = 0;
    let freq = [];

    for(let index = 0; index < 201; index += 1)

        freq[index] = 0;

    let max = Number.MIN_SAFE_INTEGER; // max = -9007199254740991
    let min = Number.MAX_SAFE_INTEGER; // min = 9007199254740991

    for(let index = 0; index < d; index += 1) {

        if(despesa[index] < min)

            min = despesa[index]; // min = 2, 

        if(despesa[index] > max)

            max = despesa[index]; // max = 2
                                  // max = 3
                                  // max = 4


        freq[despesa[index]] = freq[despesa[index]] + 1; // freq = Array(201), despesa = (9) [2, 3, 4, 2, 3, 6, 8, 4, 5]
    }

    for(let index = 0; index < despesa.length; index += 1) { // despesa = (9) [2, 3, 4, 2, 3, 6, 8, 4, 5];

        let dia = despesa[index + d]; // d = 5, dia = 6
                                      // d = 5, dia = 8

        if(dia > max) max = dia; // max = 6
                                   // max = 8
        if(dia < min) min = dia; // min = 2
                                // min = 2

        let mediaDia = obterMedia([...freq], min, max, d); //
                                                          // dia = 6

                                                            // freq = Array(201), min = 2, max = 8, d = 5

        if(mediaDia * 2 <= dia)

            notificacoes++; // notificacoes = 1
                            // notificacoes = 2

        freq[despesa[index]] = freq[despesa[index]] > 0 ? freq[despesa[index]] - 1 : 0; //  
        freq[despesa[d + index]] = freq[despesa[d + index]] + 1; // 
    }

    return notificacoes;
}

function obterMedia(freq, min, max, number) { // freq = Array(201), min = 2, max = 6, number = 5
                                              // freq = Array(201), min = 2, max = 8, number = 5
    let media = Math.ceil(number /  2);
                                      // media = 8;

    if(number % 2 !== 0) {

        let soma = 0;
        let index = min;

        while (soma < media) {
            
            soma += freq[index];
            index++;
        }

        return index - 1;
    }

    let soma = 0;
    let index = min;

    while (soma < media) { 
        
        soma += freq[index];
        index++;
    }

    let primeiro = index - 1;

    while (soma < media + 1) {
        
        soma += freq[index];
        index++;
    }

    let segundo = index;

    return (primeiro + segundo - 1) / 2;
}