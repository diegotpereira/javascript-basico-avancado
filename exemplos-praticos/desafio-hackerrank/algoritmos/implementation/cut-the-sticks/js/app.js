let entradaString = ['6', '5, 4, 4, 2, 2, 8'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}


function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = cortarVaras(arr);

    console.log(resultado);
}

principal();

function cortarVaras(arr) {

    // arr Você recebe vários bastões de comprimentos variados

    let saida = [];

    while(arr.length != 0) {

        // Você cortará iterativamente os palitos em palitos menores
        // descartando os pedaços mais curtos até não sobrar nenhum.
        let minimoValor = Math.min(...arr);

        saida.push(arr.length);

        // Em cada iteração, você determinará o comprimento do bastão mais curto restante,
        for(let i = 0; i < arr.length; i++) {

            let sub = arr[i] - minimoValor;

            // Quando todos os bastões restantes tiverem o mesmo comprimento
            if(sub === 0) {

                // cortará esse comprimento de cada um dos bastões mais longos  
                // splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
                // descartará todos os pedaços desse menor comprimento.
                arr.splice(i, 1);

                // O menor comprimento de bastão é 1
                i -= 1;

            } else {

                arr[i] = sub;
            }
        }
    }

    return saida;
}