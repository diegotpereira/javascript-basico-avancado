let stringEntrada = ['1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5', 'abc'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const h = lerEntrada().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = lerEntrada();

    const resultado = designerPdfViewer(h, word);

    console.log(resultado);
}

principal();

// function designerPdfViewer(h, word) {

//     let caraterMaxAltura = 0;
//     let index = 0;

//     for (let i = 0; i < word.length; i++) {

//         index = word.charCodeAt(i) - 97;

//         if(h[index] > caraterMaxAltura) {

//             caraterMaxAltura = h[index];
//         }
//     }
//     return caraterMaxAltura * word.length;
// }

function designerPdfViewer(h, word) {

    let u = 97; // u = 97
    let c = []; // c = (3) [2, 1, 0]
    let m = 0; // m = 3

    for (let index = word.length; index--> 0;) { // word = 'abc'
        
        let comum = word.charCodeAt(index) - u; //

        if(c.indexOf(comum) == -1) {

            c.push(comum);

            if(h[comum] > m) 


                m = h[comum];
        }
    }
    return m * word.length;
}