let stringEntrada = ['abccddde', '6', '1', '3', '12', '5', '9', '10'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();
    const contarConsultas = parseInt(lerEntrada().trim(), 10);

    let consultas = [];

    for(let index = 0; index < contarConsultas; index += 1) {

        const consultaItens = parseInt(lerEntrada().trim(), 10);
        consultas.push(consultaItens);
    }

    weightedUniformStrings(s, consultas);

    // const resultado = weightedUniformStrings(s, consultas);

    // console.log(resultado); // saída: (6) ['Sim', 'Sim', 'Sim', 'Sim', 'Nao', 'Nao']
}

principal();

// function weightedUniformStrings(s, consultas) {

//     const resultado = s.match(/([a-z])(\1)*/g); // resultado = (5) ['a', 'b', 'cc', 'ddd', 'e']

//     // flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array.
//     const valor = resultado.flatMap((m) => 
//         Array.from(new Array(m.length), (val, index) => 
//         (m.charCodeAt(0) - 97 + 1) * (index + 1))); // valor = (8) [1, 2, 3, 6, 4, 8, 12, 5]

//     return consultas.map((q) => valor.includes(q) ? 'Sim' : 'Nao');
// }

// function weightedUniformStrings(s, consultas) {

//     let ditado = [];
//     let alfabetos = 'abcdefghijklmnopqrstuvwxyz';
//     let alfabetos2 = alfabetos.split('');

//     for(let index = 0; index < alfabetos2.length; index += 1) {

            

//         ditado.push({
//             chave: alfabetos2[index],
//             valor: index + 1
//         });
//         // ditado 
//         // 1:{chave: 'b', valor: 2}
//         // 2:{chave: 'c', valor: 3}
//         // 3:{chave: 'd', valor: 4}
//         // 4:{chave: 'e', valor: 5}
//         // 5:{chave: 'f', valor: 6}
//         // 6:{chave: 'g', valor: 7}
//         // 7:{chave: 'h', valor: 8}
//         // 8:{chave: 'i', valor: 9}
//         // 9:{chave: 'j', valor: 10}
//         // 10:{chave: 'k', valor: 11}
//         // 11:{chave: 'l', valor: 12}
//         // 12:{chave: 'm', valor: 13}
//         // 13:{chave: 'n', valor: 14}
//         // 14:{chave: 'o', valor: 15}
//         // 15:{chave: 'p', valor: 16}
//         // 16:{chave: 'q', valor: 17}
//         // 17:{chave: 'r', valor: 18}
//         // 18:{chave: 's', valor: 19}
//         // 19:{chave: 't', valor: 20}
//         // 20:{chave: 'u', valor: 21}
//         // 21:{chave: 'v', valor: 22}
//         // 22:{chave: 'w', valor: 23}
//         // 23:{chave: 'x', valor: 24}
//         // 24:{chave: 'y', valor: 25}
//         // 25:{chave: 'z', valor: 26}
//     }

//     let anterior = '';
//     let novaConsulta = [];

//     for(let index = 0; index < s.length; index += 1) {

//         let carga = 0;

//         if(anterior.includes(s[index])) {

//             anterior = anterior + s[index];

//             for(let k = 0; k < ditado.length; k += 1) {

//                 if (ditado[k].chave == s[index]) {
                    
//                     carga = ditado[k].valor * anterior.length;
//                     novaConsulta.push(carga);
//                 }
//             }
//         } else {

//             anterior = s[index];

//             for(let k = 0; k < ditado.length; k += 1) {

//                 if(ditado[k].chave == s[index]) {

//                     carga = ditado[k].valor;
//                     novaConsulta.push(carga);
//                 }
//             }
//         }
//     }
//     let resultado = [];

//     for(let z = 0; z < consultas.length; z += 1) {

//         if(novaConsulta.includes(consultas[z])) {

//             resultado.push('Sim');

//         } else {

//             resultado.push('Nao')
//         }
//     }
//     return resultado;
// }


function weightedUniformStrings(s, consultas) {


    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let pesos = {};
    
    alfabeto.split('').forEach((letra, indice) => {
        
        pesos[letra] = indice + 1;
    });
    let blocos = {};
    let atualSoma = 0;
    let atualLetra = s[0];
    
    for(let i = 0; i < s.length; i++) {
        
        atualSoma += pesos[atualLetra];
        blocos[atualSoma] = true;
        
        if(i + 1 < s.length && s[i + 1] !== atualLetra) {
            
            atualSoma = 0;
            atualLetra = s[i + 1];
        }
    }
    for(let i = 0; i < consultas; i++) {
        
        var x = consultas;
        
        if(blocos[x] === true) {
            
            console.log('Yes');
            
        } else {
            
            console.log('No');
        }
    }

    // let alfabeto =  'abcdefghijklmnopqrstuvwxyz';
    // let pesos = {};

    // alfabeto.split('').forEach((letra, indice) => {

    //     pesos[letra] = indice + 1;
    // });

    // let blocos = {};
    // let atualSoma = 0;
    // let atualLetra = s[0];

    // for(let index = 0; index < s.length; index += 1) {

    //     atualSoma += pesos[atualLetra];
    //     blocos[atualSoma] = true;

    //     if(index + 1 < s.length && s[index + 1] !== atualLetra) {

    //         atualSoma = 0;
    //         atualLetra = s[index + 1];
    //     }
    // }
    // for(let index = 0; index < consultas; index += 1) {

    //     var x = consultas;

    //     if(blocos[x] === true) {

    //         console.log('Sim');

    //     } else {

    //         console.log('Nao')
    //     }
    // }
}