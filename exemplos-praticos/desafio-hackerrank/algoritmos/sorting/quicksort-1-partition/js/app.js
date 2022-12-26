let stringEntrada = ['5','4, 5, 3, 7, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const resultado = quickSort(arr);

    console.log(resultado);
}

principal();

function quickSort(arr) {

    const resultado = [[], [], []];

    arr.reduce((rotulo, item, indice) => {

        resultado[(item > arr[0]) +(item >= arr[0])].push(item);

        return rotulo;
    }, []);

    // flat() cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.
    return resultado.flat();
}




// Apresentam resultados diferentes ajustar

// function quickSort(arr) {

//     if(arr.length <= 1) {

//         return arr;
//     }

//     const pivo = arr[arr.length - 1];
//     const arrEsquerdo = [];
//     const arrDireito = [];

//     for(let index = 0; index < arr.length - 1; index += 1) {

//         arr[index] < pivo ? arrEsquerdo.push(arr[index]) : arrDireito.push(arr[index]);
//     }

//     return [...quickSort(arrEsquerdo), pivo, ...quickSort(arrDireito)];
// }


// function quickSort(arr){
//     if(arr.length <= 1){
//       return arr;
//     }
  
//     const pivot = arr[arr.length - 1];
//     const leftarr = [];
//     const rightarr = [];
  
//     for(let i=0; i < arr.length-1;i++){
//       arr[i] < pivot ? leftarr.push(arr[i]) :  rightarr.push(arr[i])
//     }
  
//     return [...quickSort(leftarr) ,pivot,...quickSort(rightarr)];
  
//   }

// function quickSort(arr, start = 0, end = arr.length - 1) {
//     if (start < end) {
//         const index = partition(arr, start, end);
//         quickSort(arr, start, index - 1);
//         quickSort(arr, index, end);
//     }
//     return arr;
// }