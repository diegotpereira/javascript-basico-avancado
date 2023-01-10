let entradaString = ['2','abba', 'abcd'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];

}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < q; index += 1) {

        const s = lerEntrada();

        const resultado = sherlockAndAnagrams(s);

        console.log(resultado + '\n');
    }
}

principal();



function sherlockAndAnagrams(s) {

    const soma  = (acumulador, proximo) => acumulador + proximo;
    const partidas = (valor, index, arr) => {

        let contar = 0;

        // obter permutações de substring   
        for (++index; index < arr.length; index++) {

            if(valor == arr[index]) 

                contar++;
            
        }

        return contar;
    };

    let strs = [];

    for (let index = 1; index < s.length; index++) {

        
        let temp = [];

        // faça uma matriz de substrings index classificadas
        for (let compare = 0; compare <= s.length - index; compare++) {

            temp.push(s.substr(compare, index).split('').sort().join(''));
            
        }

        // contar pares
        temp = temp.map(partidas);
        // adicionar total
        strs.push(temp.reduce(soma));
    }

    return strs.reduce(soma);
}


// function sherlockAndAnagrams(s) {
//     // Write your code here
//     const contarDuplicados = s.split('')
//                               .filter((v, index) => s.indexOf(v) !== index).length;
                              
//     if(!contarDuplicados) return 0;
    
//     let contarAnagramas = 0;
//     const arr = obterTodosAnagramas(s);
    
//     for(let index = 0; index < arr.length; index += 1) {
        
//         contarAnagramas += anagramasContar(index, arr);
//     }
    
//     return contarAnagramas;

// }


// function obterTodosAnagramas(str) {
    
//     let resultado = [];
    
//     for(let index = 0; index < str.length; index += 1) {
        
//         for(let compare = index + 1; compare < str.length + 1; compare += 1) {
            
//             resultado.push(str.slice(index, compare));
//         }
//     }
    
//     return resultado;
// }

// function anagramasContar(atualIndice, arr) {
    
//     const atualElemento = arr[atualIndice];
//     const arrRest = arr.slice(atualIndice + 1);
//     let contador = 0;
    
//     for(let index = 0; index < arrRest.length; index += 1) {
        
//         if(atualElemento.length === arrRest[index].length && ehAnagrama(atualElemento, arrRest[index])) {
            
//             contador++;
//         }
//     }
    
//     return contador;
// }

// function ehAnagrama(str1, str2) {
    
//     const hist = {};
    
//     for(let index = 0; index < str1.length; index += 1) {
        
//         const caracter = str1[index];
        
//         if(hist[caracter]) {
            
//             hist[caracter]++;
            
//         } else {
            
//             hist[caracter] = 1;
//         }
//     }
    
//     for(let compare = 0; compare < str2.length; compare += 1) {
        
//         const caracter = str2[compare];
        
//         if(hist[caracter]) {
            
//             hist[caracter]--;
            
//         } else {
            
//             return false;
//         }
//     }
    
//     return true;
// }