let stringEntrada = ['aaabbbb']
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();

    const resultado = gameOfThrones(s);

    console.log(resultado); // YES
}

principal();

// function gameOfThrones(s) {

//     let palavra = s.split('').sort(); // palavra = (7) ['a', 'a', 'a', 'b', 'b', 'b', 'b']
//     let contador = 1;
//     let contadorImpar = 0;

//     for(let index = 0; index < palavra.length; index += 1) {

//         if(palavra[index] == palavra[index + 1]) {

//             contador++;

//         } else {

//             if(contador % 2 == 1) {

//                 contadorImpar++;

//                 if(contadorImpar > 1)

//                     return 'NO'
//             }
//             contador = 1;
//         }
//     }

//     return 'YES'
// }

// function gameOfThrones(s) {

//     let letrasUnicas = new Set(); // Set(0) {size: 0}
//     let quantidadeCartas = new Map(); // Map(0) {size: 0}
//     let letra = null;
//     let contador = 0;

//     while (contador < s.length) { // contador = 0, s = aaabbbb
//                                   // contador = 1,  
//                                   // contador = 2
//                                   // contador = 3
//                                   // contador = 4
//                                   // contador = 5
//                                   // contador = 6
//                                   // contador = 7

//         letra = s[contador]; // letra = a
//                              // letra = b

//         // has() retorna um booleano indicando se um elemento 
//         // com a chave especificada existe no objeto WeakMap ou não.
//         if(!letrasUnicas.has(letra)) {

//             letrasUnicas.add(letra); // letrasUnicas = Set(1) {'a'}, letra = 'a'
//                                      // letrasUnicas = Set(2) {'a', 'b'}, letra = 'b'

//             quantidadeCartas.set(letra, 0); // quantidadeCartas = Map(1) {'a' => 1}, letra = 'a'
//                                             // quantidadeCartas = Map(1) {'a' => 2}, letra = 'a'
//                                             // quantidadeCartas = Map(1) {'a' => 3}, letra = 'a'
//                                             // quantidadeCartas = Map(2) {'a' => 3, 'b' => 0}
//                                             // quantidadeCartas = Map(2) {'a' => 3, 'b' => 1}
//                                             // quantidadeCartas = Map(2) {'a' => 3, 'b' => 2}
//                                             // quantidadeCartas = Map(2) {'a' => 3, 'b' => 3}
//         }

//         quantidadeCartas.set(letra, quantidadeCartas.get(letra) + 1);

//         if (contador === (s.length - 1)) { // contador = 6
            
//             for(let item of quantidadeCartas) { // quantidadeCartas = Map(2) {size: 2, a => 3, b => 4}

//                 if (item[1] % 2 === 0) {
                    
//                     quantidadeCartas.delete(item[0]);
//                 }
//             }
//         }
//         contador++;
//     }
//     return quantidadeCartas.size <= 1 ? 'YES' : 'NO'; // quantidade.size = 1
// }


// function gameOfThrones(s) {

//     let letras = {};
//     let impar = 0;

//     for(let index  = 0; index < s.length; index += 1) {

//         letras[s[index]] = (letras[s[index]] || 0) + 1;

//         if(letras[s[index]] % 2 !== 0) 

//             impar++;

//         else 

//             impar--;
//     }

//     return impar > 1 ? 'NAO' : 'SIM'
// }


function gameOfThrones(s) { // s = (7) ['a', 'a', 'a', 'b', 'b', 'b', 'b']
    s = [...s].sort()
    let p = 0
    
    for (let index = 2; index < s.length; index += 2) {

        if(s[index] !== s[index - 1]) {

            if(p === 1) 
            
                return 'NO'

            else 
             
                p = 1, index--  
        }
    }

    return 'YES'
}