let stringEntrada = ['aabbcd'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();

    const resultado = isValid(s);

    console.log(resultado + '\n');
}

principal();

// function isValid(s) {

//     let mapa = {};
//     let string = s.replace(/[^\w]/g, '').toLowerCase();
//     let arr = [];

//     for(let index = 0; index < s.length; index += 1) {

//         !mapa[string[index]] ? (mapa[string[index]] = 1) : (mapa[string[index]] = mapa[string[index]] + 1);
//     }

//     for(let chave in mapa) {

//         arr.push(mapa[chave]);
//     }

//     arr.sort();

//     let ultimo = arr[arr.length - 1];

//     if(arr[0] === arr[arr.length - 1]);
//     if(arr[0] === 1 && arr[1] === arr[arr.length - 1]) return 'SIM';
//     if(arr[0] === arr[1] && arr[1] === arr[arr.length - 2] && arr[arr.length - 2] === ultimo - 1) return 'SIM';

//     return 'NO';
// }


// function isValid(s) {

//     const sArr = [...s];
//     const sMapa = {};
//     let contar = 0;

//     sArr.forEach((s) => {

//         if (sMapa[s]) {
            
//             sMapa[s]++;

//         } else {

//             sMapa[s] = 1;
//             contar++;
//         }
//     });

//     const m = new Map();
//     Object.entries(sMapa).forEach(([k, v]) => {

//         if(!m.has(v)) {

//             m.set(v, 1);

//         } else {

//             m.set(v, m.get(v) + 1);
//         }
//     });

//     if(m.size > 2) return 'NAO';
//     if(m.size === 1) return 'SIM';
    
//     const p = Math.floor(sArr.length / contar);

//     if((m.has(1) && m.get(1) === 1) || (m.has(p) && m.has(p + 1) && m.get(p + 1) === 1)) {

//         return 'SIM';

//     } else {

//         return 'NO';
//     }
// }


function isValid(s) {

    // obter frequência de caracteres de s no mapa
    const mapa = new Map();

    for(let frequencia of s) {

        mapa.set(frequencia, mapa.get(frequencia) + 1 || 1);

    }

    // verifique o comprimento dos valores
    // - se menor que 2, retorna sim
    if(mapa.size < 2) {

        return 'SIM';
    }

    // encontre o menor e o maior int de valores
    const min = Math.min(...mapa.values());
    const max = Math.max(...mapa.values());

    // contagem de ocorrência de frequência de caracteres
    const contar = new Map();

    for(let ocorrencias of mapa.values()) {

        contar.set(ocorrencias, contar.get(ocorrencias) + 1 || 1); 
    }

    // casos base
    // - verifica a diferença min e max é igual a 1 e max não ocorre mais de uma vez, retorna sim
    if (Math.abs(min - max) === 1 && contar.get(max) === 1) {
        

        return 'SIM';
    }

    // verifique min é menor que 2 e não ocorre mais de uma vez, retorna sim
    if (min < 2 && contar.get(min) === 1 && contar.size === 2) {
        
        return 'SIM';
    }

    // verifique os valores de igualdade, retorne sim se todos forem iguais
    if (min === max) {
        
        return 'SIM';
    }

    // caso contrário, não devolva
    return 'NAO';
}


// function isValid (s) {
//     let hash = {};
//     let max, min;
//     let minCount = 0;
//     let maxCount = 0;
//     ///Get the frequencies of each characters
//     for (let i = 0; i < s.length; i++) {
//       let key = s[i];
//       if (hash[key]) {
//         hash[key]++;
//       } else {
//         hash[key] = 1;
//       }
//     }
//     //Push all strings in to an array
//     let frequencies = [];
//     for (let key in hash) {
//       frequencies.push (hash[key]);
//     }
//     //Sort the array and get the max and min frequency
//     frequencies.sort ();
//     min = frequencies[0];
//     max = frequencies[frequencies.length - 1];
//     //Get the no of max count and min count for the frequency
//     for (let i = 0; i < frequencies.length; i++) {
//       if (frequencies[i] === max) {
//         maxCount++;
//       }
//       if (frequencies[i] === min) {
//         minCount++;
//       }
//     }
//     ///Make our validation check
//     if (min === max) {
//       return 'YES';
//     }
//     if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
//       return 'YES';
//     }
//     if (max - min !== 1) {
//       return 'NO';
//     }
//     if (maxCount === minCount) {
//       return 'NO';
//     }
//     if (maxCount === 1 || minCount === 1) {
//       return 'YES';
//     }
  
//     return 'NO';
//   }