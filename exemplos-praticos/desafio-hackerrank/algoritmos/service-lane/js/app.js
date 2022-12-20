let stringEntrada = ['8, 5', '2, 3, 1, 2, 3, 2, 3, 3','0, 3', '4, 6', '6, 7', '3, 5', '0, 7'];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
    
}

function principal() {

    // const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    // const n = parseInt(primeiraMultiplaEntrada[0], 10);
    // const t = parseInt(primeiraMultiplaEntrada[1], 10);
    // const largura = lerEntrada().replace(/\s+$/g, '').split(' ').map(wTemp => parseInt(wTemp, 10));

    // let casos = Array(t);

    // for(let i = 0; i < t; i++) {

    //     casos[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(casosTemp => parseInt(casosTemp, 10));
    // }

    // const resultado = serviceLane(n, largura, casos);

    // console.log(resultado);

    const firstMultipleInput = lerEntrada().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const width = lerEntrada().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10));

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = lerEntrada().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    const result = serviceLane(n, width, cases);

    console.log(result); // saída = (5) [1, 2, 3, 2, 1]
}

principal();

function serviceLane(n, largura, casos) {

    if(!largura)

        return [];

    let resultado = [];

    for(let i = 0; i < casos.length; i++) {

        let atualMin = Infinity;

        for(let j = (casos[i][0]); j <= (casos[i][1]); j++) {

            atualMin = largura[j] < atualMin ? largura[j] : atualMin;
        }

        if(atualMin != Infinity) {

            resultado.push(atualMin);
        }
    }
    return resultado;
}

// function serviceLane(n, largura, casos) {

//     let resultados = [];

//     casos.reduce((target, items) => {

//         let min = largura[items[0]];

//         for(let i = items[0]; i <= items[1]; i++) {

//             largura[i] < min  && (min = largura[i]);
//         }

//         resultados.push(min);
//     }, []);

//     return resultados;
// }


// function serviceLane(n, t, largura, casos) {

//     largurasCortadas = [];

//     for(let i = 0; i < t; i++) {

//         let unidade = casos[i];
//         let larguraSlice = largura.slice(unidade[0], unidade[1] + 1);
//         largurasCortadas.push(larguraSlice);
        
//     }

//     let maxLarguraVeiculo = [];

//     for(let i = 0; i < largurasCortadas.length; i++) {

//         maxLarguraVeiculo.push(Math.min(...largurasCortadas[i]));
//     }

//     return maxLarguraVeiculo;
// }