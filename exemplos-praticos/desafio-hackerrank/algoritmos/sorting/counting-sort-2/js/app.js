let stringEntrada = ['100', '63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33']
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ')
                            .map(arrTemp => parseInt(arrTemp, 10));

    const resultado = countingSort(arr);

    console.log(resultado.join(' ')+ '\n');
}

principal();

// function countingSort(arr) {

//     var max = Math.max.apply(Math, arr); // max = 99
//     var min = Math.min.apply(Math, arr); // min = 1
//     var range = max - min + 1; // range = 99
//     var contar = Array.from({ length: range }, (_, index) => 0); // contar = Array(100)
//     var saida = Array.from({ length: arr.length}, (_, index) => 0); // saída = Array(100)

//     for(let index = 0; index < arr.length; index += 1) {

//         contar[arr[index] - min]++; // contar = Array(99), arr = Array(100), min = 1
//     }

//     for(let index = 1; index < contar.length; index += 1) {

//         contar[index] += contar[index - 1]; // contar = Array(99)
//     }

//     for(let index = arr.length - 1; index >= 0; index -= 1) {

//         saida[contar[arr[index] - min] - 1] = arr[index]; // saida = Array(100), contar = Array(99), min = 1
//         contar[arr[index] - min]--; // contar = (99) [0, 2, 2, 4, 4, 4, 5, 5, 6, 8, 9, 9, 10, 11, 11, 11, 13, 13, 14, 14, 15, 17, 18, 19, 20, 23, 23, 25, 25, 25, 27, 27, 30, 33, 34, 34, 34, 34, 34, 36, 38, 39, 40, 41, 43, 43, 45, 45, 46, 46, 47, 47, 47, 48, 48, 48, 50, 51, 51, 52, 53, 54, 54, 55, 55, 56, 56, 58, 59, 62, 64, 64, 64, 66, 67, 69, 70, 70, 72, 74, 75, 77, 78, 80, 81, 82, 84, 86, 86, 89, 91, 92, 93, 93, 94, 95, 96, 96, 98]
//                                     // index = 0
//                                     // min = 1  
//     }

//     for(let index = 0; index < arr.length; index += 1) { // arr = Array(100)

//         arr[index] = saida[index]; // arr = Array(100), saida = Array(100)
//     }

//     return (saida);
// }

// function countingSort(arr) {

//     const c = Array(100).fill(0), res = [];
//     arr.forEach(e => c[e]++);
//     c.forEach((e, i) => res.push(...Array(e).fill(i)));

//     return res;
// }

// function countingSort(arr) {

//     let ans = new Array(100).fill(0); // fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
//     arr.map(x => ans[x]++);

//     let classificar = [];

//     for(let index = 0; index < ans.length; index += 1) {

//         while (ans[index] > 0 && ans[index] != 0) {
//             classificar.push(index);
//             ans[index] --;
//         }
//     }

//     return classificar;
// }

// function countingSort(arr) {

//     let temp = Array(Math.max(...arr) + 1).fill(0);
//     let ans = [];

//     for(let index = 0; index < temp.length; index += 1) {

//         temp[index] = arr.filter((data) => data === index).length;

//         if(temp[index] > 0) {

//             Array(temp[index]).fill(0).map(() => {

//                 ans.push(index);
//             })
//         }
//     }

//     return ans;
// }

// function countingSort(arr) {

//     let ans = Array(100).fill(0);

//     for(let index = 0; index < arr.length; index += 1) 

//         ans[arr[index]]++;

//     let index = 0;
//     let saida = [];

//     while (index < 100) {
        
//         if(ans[index] === 0) {

//             index++;

//         } else {

//             ans[index]--;
//             saida.push(index);
//         }
//     }
//     return saida;
// }


// function countingSort(arr) {
    
//     let ans = {};
//     let extraAns = [];

//     for(let index = 0; index < arr.length; index += 1) {

//         if(!ans[arr[index]]) ans[arr[index]] = [];
        
//         ans[arr[index]].push(arr[index]);
//     }

//     for(let v of Object.values(ans))

//         extraAns.push(...v);

//     return extraAns;
// }


// function countingSort(arr) {

//     return arr.reduce((arr2, num) => {

//         return arr2[num] = (arr2[num] || 0) + 1, arr2;
//     }, []).reduce((resultado, contar, num) => {

//         return resultado.concat(new Array(contar).fill(num));
//     }, []);
// }


function countingSort(arr) {

    const contarArr = Array(100).fill(0);

    arr.forEach(index => contarArr[index]++);

    return contarArr.reduce((acumulador, atual, index) => {

        if(atual) {

            while(atual--) {

                acumulador.push(index);
            }
        }

        return acumulador;
    }, []);
}