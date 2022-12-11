let entradaString = ['5', '3, 3, 2, 1, 3'];
let entradaAtual = 0;

function lerEntrada() {
    
    return entradaString[entradaAtual++];
    
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = equalizarArray(arr);  

    console.log(resultado);
}

principal();

function equalizarArray(arr) {

    let arrObj ={};
    let contarMaximo = 0;

    for(let num of arr) { // 3 3 2 1 3

        // console.log(arrObj[num] + 1 || 1);

        arrObj[num] = arrObj[num] + 1 || 1; // 1 1 3 - 1 2 1 1 3 2

    }

    for(let valor in arrObj) {

        if (arrObj[valor] > contarMaximo) {
            
            contarMaximo = arrObj[valor]
        }
    }

    return (arr.length - contarMaximo);
}