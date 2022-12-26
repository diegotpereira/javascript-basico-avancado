let stringEntrada = ['6', '4, 1, 3, 5, 6, 2'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    // const ar = lerEntrada().split(' '); 
    const ar = lerEntrada().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    

    let resultado = insertionSort(ar);

    console.log(resultado);
    
}

principal();


function insertionSort (ar) {

    for(i = 1; i < ar.length; i++){
        var value = ar[i];
        var j = i - 1;
        while(j >= 0 && ar[j] > value){
          ar[j + 1] = ar[j];
          j = j - 1;
        }
        ar[j + 1] = value;
      }
      return ar;
    }