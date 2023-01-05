let stringEntrada = ['6', '6, 12, 8, 10, 20, 16', '5, 4, 3, 2, 1, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const valor = lerEntrada().replace(/\s+$/g, '').split(' ').map(valorTemp => parseInt(valorTemp, 10));
    const freq = lerEntrada().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

    const resultado = interQuartile(valor, freq);

    console.log(resultado);
}

principal();

function interQuartile(valor, freq) {

    let S = [];

    for (let index = 0; index < valor.length; index++) {
        
        let contar = freq[index];

        while (contar > 0) {
            
            S.push(valor[index]);
            contar--;
        }
    }
    inserirClassificado(S);

    let meio = parseInt(S.length / 2);
    let esquerda = parseInt(meio / 2);
    let direito = parseInt(meio + (meio / 2) + 1);

    let q1 = 0;
    let q3 = 0;

    if (meio % 2 !== 0) {
        
        q1 = S[esquerda];
        q3 = S[direito];

    } else {

        q1 = (S[esquerda - 1] + S[esquerda]) / 2;
        q3 = (S[direito] + S[direito - 1]) / 2;

    }

    return ((q3 - q1).toFixed(1));
}

function inserirClassificado(arr) {

    for (let index = 0; index < arr.length; index++) {

        let j = index - 1;
        let item = arr[index];

        while (j >= 0 && arr[j] > item) {
            
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j  + 1] = item;
    }
}












// function getTwoArrays(input) {
//     const n1Pos = input.indexOf("\n");
//     const n2Pos = input.lastIndexOf("\n");

//     const elements = input.substring(n1Pos + 1, n2Pos);
//     const frecuencies = input.substring(n2Pos + 1);

//     return {
//         "elements": elements.split(" ").map(Number),
//         "frecuencies": frecuencies.split(" ").map(Number)
//     }
// }

// function getMedian(arr) {
//     const half = Math.floor(arr.length / 2);
//     const left = arr.slice(0, half); 

//     if (arr.length % 2 !== 0) {
//         return {
//             "left": left,
//             "right": arr.slice(half + 1),
//             "median": arr[half]
//         }
//     }
    
//     const right = arr.slice(half); 

//     return {
//         "left": left,
//         "right": right,
//         "median": (left[left.length - 1] + right[0]) / 2
//     }
// }

// function buildDataSet(elementsAndFrecuency) {
//     const elements = elementsAndFrecuency.elements;
//     const frecuencies = elementsAndFrecuency.frecuencies;

//     let dataSet = [];

//     for (let i = 0; i < elements.length; i++) {
//         dataSet = dataSet.concat(Array(frecuencies[i]).fill(elements[i]));
//     }

//     return dataSet;
// }


// function processData(input) {
//     const elementsAndFrecuency = getTwoArrays(input);
//     const dataSet = buildDataSet(elementsAndFrecuency);
//     dataSet.sort((a, b) => a - b);

//     const q2 = getMedian(dataSet);
//     const q1  = getMedian(q2.left);
//     const q3 = getMedian(q2.right);

//     console.log((q3.median - q1.median).toFixed(1));
// }