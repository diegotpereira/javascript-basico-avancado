let stringEntrada = ['1', '5', 'eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 0; index < t; index += 1) {

        const n = parseInt(lerEntrada().trim(), 10);

        let grade = [];

        for(let indice = 0; indice < n; indice += 1) {

            const gradeItem = lerEntrada();

            grade.push(gradeItem);

        }

        const resultado = gridChallenge(grade);

        console.log(resultado + '\n');
    }
}

principal();

// function gridChallenge(grade) {

//     // classificar os itens da grade
//     let novaGrade = [...grade]; // 0: (5) ['a', 'b', 'c', 'd', 'e']
//                                //  1: (5) ['f', 'g', 'h', 'i', 'j']
//                                //  2: (5) ['k', 'l', 'm', 'n', 'o']
//                                //  3: (5) ['p', 'q', 'r', 's', 't']
//                                //  4: (5) ['u', 'v', 'w', 'x', 'y']

//     for(let index = 0; index < novaGrade.length; index += 1) {

//         novaGrade[index] = novaGrade[index].split('').sort();
//     }

//     // as strings na grade são sempre do mesmo comprimento
//     for(let index = 0; index < novaGrade[0].length; index += 1) {

//         let coluna = [];

//         // iteramos pelas strings da grade selecionando o primeiro valor de cada string, 
//         // depois o segundo e assim por diante. O intervalo de cada loop for é alterado 
//         // para que possamos iterar cada letra em uma string no loop externo e cada item na matriz no loop aninhado
//         for(let compare = 0; compare < novaGrade.length; compare += 1) {

//             coluna.push(novaGrade[compare][index]);
//         }

//         const colunaClassificada = coluna.slice().sort().join();

//         if(coluna.join() != colunaClassificada) {

//             return 'NAO';
//         }
//     }

//     return 'SIM';
// }


// function gridChallenge(grade) {

//     const classificarGrade = [];

//     for(let index = 0; index < grade.length; index += 1) {

//         const classificarLinha = grade[index].split('').sort();
//         classificarGrade.push(classificarLinha.toString().replace(/,/g, ''));
//     }

//     for (let index = 0; index < classificarGrade.length - 1; index++) {

//         for (let compare = 0; compare < classificarGrade.length; compare++) {

//             if (classificarGrade[index][compare] > classificarGrade[index + 1][compare]) {
                

//                 return 'NAO';
//             }
//         }
//     }

//     return 'SIM';
// }



// function gridChallenge(grade) {

//     let n = grade.length;
//     let l = grade[0].length;

//     // classificar as linhas
//     for (let index = 0; index < n; index++) {

//         grade[index] = grade[index].split('').sort().join('')
        
//     }

//     // transpor a matriz
//     let t = new Array(n).fill('');

//     for (let compare = 0; compare < n; compare++) {

//         for (let index = 0; index < l; index++) {
            
//             t[index] = (t[index + ''].concat(grade[compare][index]));
//         }
//     }

//     // verifique se todas as linhas estão classificadas
//     for(let s of t) {

//         if(!s.split('').every((v, i, a) => !i || a[i - 1] <= v)) {

//             return 'NAO';
//         }
//     }

//     return 'SIM'
// }

// function gridChallenge(grade) {

//     let fixado = grade.map((dado) => dado.split('').sort().map((dado) => dado.charCodeAt(0)));


//     for (let index = 1; index < fixado.length; index++) {
        
//         let temp = fixado[index - 1];

//         for (let compare = 0; compare < fixado[index].length; compare++) {
            
//             if (fixado[index][compare] < temp[compare]) {
                
//                 return 'NO';
//             }
            
//         }
//     }

//     return 'YES';
// }


function gridChallenge(grid) {
    // Write your code here
    const resultadoGrade = [...grid];
    
    grid.forEach((e, i) => {
        
        const classificarLinha = e.split('').sort((a, b) => a > b ? 1 : - 1);
        
        resultadoGrade[i] = classificarLinha;
    });
     
    const colunas = [];
    let media = 0;
    let arr = [];
    
    for(let index = 0; index < resultadoGrade.length; index += 1) {
        
        arr.push(resultadoGrade[index][media]);
        
        if(index === resultadoGrade.length - 1 && media <= resultadoGrade.length) {
            
            media++;
            index = -1;
            
            if(!arr.some((e) => e === undefined)) {
                
                colunas.push(arr);
            }
            
            // console.log(arr);
            
            arr = [];
        }
    }
    
    const arrResultados = [];
    const cond = colunas.forEach((e) => {
        
        const pedido = [...e].sort((a, b) => a > b ? 1 : -1);
        
        if(e.join('') === pedido.join('')) {
            
            arrResultados.push(1);
            
        } else {
            
            arrResultados.push(0);
        }
    });
    
    const condFinal = arrResultados.every((e) => e === 1);
    
    
    return condFinal ? 'YES' : 'NO';
}