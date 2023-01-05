let stringEntrada = ['4, 1', '3943'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const n = parseInt(primeiraMultiplaEntrada[0], 10);
    const k = parseInt(primeiraMultiplaEntrada[1], 10);
    const s = lerEntrada();

    const resultado = highestValuePalindrome(s, n, k);

    console.log(resultado + '\n');
}

principal();

// function highestValuePalindrome(s, n, k) {

//     if(n === 1) return k == 1 ? '9' : '-1';
    
//     let arr = [...s];
//     let contar = Array(n).fill(0);
//     let x = Math.floor(n / 2) + (n & 1);
    
//     for(let index = 0; index < x; index += 1) {
        
//         if(arr[index] !== arr[n - 1 - index]) {

//             arr[index] = arr[n - 1 - index] = Math.max(arr[index], arr[n - 1 - index]);
//             contar[index]++;
//             k--;
//         }

//         if(k < 0) return '-1';
//     }

//     for(let index = 0; index < x; index += 1) {

//         if (arr[index] != '9') {
            
//             let custo = contar[index] === 1 || index === (n - 1 - index) ? 1 : 2;

//             if (k >= custo) {
                
//                 arr[index] = arr[n - 1 - index] = '9';
//                 k -= custo;
//             }
//         }
//     }

//     return arr.join('');
// }

function highestValuePalindrome(s, n, k) {

    const arr = Array.from(s);

    for(let index = 0, compare = n - 1; index < compare; index += 1, compare -= 1) {

        if (arr[index] !== arr[compare]) {
            
            if(k < 1) return '-1';

            const atualMax = arr[index] > arr[compare] ? arr[index] : arr[compare];

            arr[arr[index] === atualMax ? compare : index] = atualMax, k--;
        }
    }

    for(let index = 0, compare = n - 1; index <= compare && k > 0; index += 1, j -= 1) {

        if (arr[index] !== '9') {
            
            if (s[index] !== s[compare]) arr[index] = '9', arr[compare] = '9', k--;
            else if(index === compare) arr[index] = '9';
            else if(k > 1) arr[index] = '9', arr[compare] = '9', k -= 2;
        }
    }

    return arr.join('');
}