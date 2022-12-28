let stringEntrada = ['6, 7, 3', '.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'];
let entradaAtual = 0; 

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    const r = parseInt(multiplaEntrada[0], 10);
    const c = parseInt(multiplaEntrada[1], 10);
    const n = parseInt(multiplaEntrada[2], 10);

    let grade = [];

    for(let index = 0; index < r; index += 1) {

        const gradeItem = lerEntrada();
        grade.push(gradeItem);
    }

    const resultado = bomberMan(n, grade); // n = numero de segundos
                                           // grade = matriz de strings que representa grade

    console.log(resultado); // (6) ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO']
}

principal();

// function bomberMan(n, grade) {

//     if(n === 1)

//         return grade;
    
//     // se par, retorna a grade preenchida
//     if(n % 2 === 0)

//         return preencherGrade(grade);

//     // usando números (formato diferente) para rastrear quando as bombas explodirão
//     grade = formatarGrade(grade);
//     grade = iterarGrade(grade);

//     // remover ciclos repetidos
//     n -= 2;
//     n %= 4;

//     while (n) {
        
//         grade = iterarGrade(grade);
//         n--;
//     }

//     // reformatar de volta ao original "." e "O"
//     grade = formatarGrade(grade, 'saida');


//     return grade;
// }

// function preencherGrade(grade) {

//     const coluna_max = grade[0].length;

//     return grade.fill(BOMBA_CELULA.repeat(coluna_max));
// }

// function iterarGrade(grade) {

//     let explosoes = [];

//     for(let linha = 0; linha < grade.length; linha += 1) {

//         let novaLinha = '';

//         for(let coluna = 0; coluna < grade[linha].length; coluna += 1) {

//             const caracter = grade[linha][coluna];

//             let novaCaracter = caracter;

//             switch (caracter) {
//                 case '0':
//                     novaCaracter = '3';
//                     break;

//                 case '1':
//                     explosoes.push([linha, coluna]);
//                     break;

//                 case '2':
//                     novaCaracter = '1';
//                     break;

//                 case '3':
//                     novaCaracter = '2'
//             }
//             novaLinha += novaCaracter;
//         }

//         grade[linha] = novaLinha;
//     }

//     // lidar com bombas explosivas
//     if (explosoes.length) {
        
//         // usando array como fila
//         for(const [linha, coluna] of explosoes) 

//             explodirBomba(grade, linha, coluna);
//     }
//     return grade;
// }

// function substituirCharAt(string, char, index) {

//     return string.slice(0, index) + char + string.slice(index + 1);
// }

// function explodirBomba(grade, linha, coluna) {

//     const linha_max = grade.length;
//     const coluna_max = grade[0].length

//     // centro
//     grade[linha] = substituirCharAt(grade[linha], '0', coluna);

//     // cima
//     if(linha - 1 >= 0)

//         grade[linha - 1] = substituirCharAt(grade[linha - 1], '0', coluna);

//     // baixo
//     if(linha + 1 < linha_max) 

//         grade[linha + 1] = substituirCharAt(grade[linha + 1], '0', coluna);

//     // esquerda
//     if(coluna - 1 >= 0)

//         grade[linha] = substituirCharAt(grade[linha], '0', coluna - 1);

//     // direita
//     if(coluna + 1 < coluna_max)

//         grade[linha] = substituirCharAt(grade[linha], '0', coluna + 1);
// }

// const VAZIA_CELULA = ".";
// const BOMBA_CELULA  = "O"; 

// function formatarGrade(grade, formatar) {

//     for(let linha = 0; linha < grade.length; linha += 1) {

//         if(formatar === 'saida') {

//             // substitua não-0 por bombas e 0's por célula vazia
//             grade[linha] = grade[linha].replace(/[^0]/g, BOMBA_CELULA).replace(/0/g, VAZIA_CELULA);

//         } else {

//             const bomba_celula_re = new RegExp(BOMBA_CELULA, "g");
//             const vazia_celula_re = new RegExp('\\' + VAZIA_CELULA, "g");

//             // substitua a célula da bomba por 2s e as células vazias por 0s
//             grade[linha] = grade[linha].replace(bomba_celula_re, 2).replace(vazia_celula_re, 0);
//         }
//     }
//     return grade;
// }



function bomberMan(n, grade) { // n = 3, grade = (6) ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']
    
    if(n === 1)

        return grade;

    let g = plantarBombas(grade); // g = (6) [Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
                                 // 0:(7) ['O', 'O', 'O', 'O', 'O', 'O', 'O']
                                 // 1:(7) ['O', 'O', 'O', 'O', 'O', 'O', 'O']
                                 // 2:(7) ['O', 'O', 'O', 'O', 'O', 'O', 'O']
                                 // 3:(7) ['O', 'O', 'O', 'O', 'O', 'O', 'O']
                                 // 4:(7) ['O', 'O', 'O', 'O', 'O', 'O', 'O']
                                 // 5:(7) ['O', 'O', 'O', 'O', 'O', 'O', 'O']

    grade = grade.map((c) => c.split('')); // grade = (6) [Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
                                           // 0: (7) ['.', '.', '.', '.', '.', '.', '.']
                                           // 1: (7) ['.', '.', '.', 'O', '.', '.', '.']
                                           // 2: (7) ['.', '.', '.', '.', 'O', '.', '.']
                                           // 3: (7) ['.', '.', '.', '.', '.', '.', '.']
                                           // 4: (7) ['O', 'O', '.', '.', '.', '.', '.']
                                           // 5: (7) ['O', 'O', '.', '.', '.', '.', '.']

    // console.log(grade);
    const x = (n - 2) % 2; // x = 1, n = 3
    const y = Math.floor((n - 2) / 2) % 2; // y = 0

    if(x) {

        detonar(grade, g);  // grade = 0:(7) ['.', '.', '.', '.', '.', '.', '.']
                                    // 1:(7) ['.', '.', '.', 'O', '.', '.', '.']
                                    // 2:(7) ['.', '.', '.', '.', 'O', '.', '.']
                                    // 3:(7) ['.', '.', '.', '.', '.', '.', '.']
                                    // 4:(7) ['O', 'O', '.', '.', '.', '.', '.']
                                    // 5:(7) ['O', 'O', '.', '.', '.', '.', '.']

                            // g = 0:(7) ['O', 'O', 'O', '.', 'O', 'O', 'O']
                                // 1:(7) ['O', 'O', '.', '.', '.', 'O', 'O']
                                // 2:(7) ['O', 'O', 'O', '.', '.', '.', 'O']
                                // 3:(7) ['.', '.', 'O', 'O', '.', 'O', 'O']
                                // 4:(7) ['.', '.', '.', 'O', 'O', 'O', 'O']
                                // 5:(7) ['.', '.', '.', 'O', 'O', 'O', 'O']

        if(y) {

            grade = [...g];
            g = plantarBombas(grade);
            detonar(grade, g);
        }
    } else {

        g = plantarBombas(grade);
    }

    return g.map((c) => c.join(''));
}

function plantarBombas(grade) {

    return Array.from(Array(grade.length), () => Array(grade[0].length).fill('O'));
}

function detonar(grade, g) {

    for(let index = 0; index <(grade.length); index += 1) {

        grade[index].forEach((celula, j) => {

            if(celula === 'O') {

                g[index][j] = '.'
                
                if(g[index][j - 1]) g[index][j - 1] = '.';
                if(g[index][j + 1]) g[index][j + 1] = '.';
                if(g[index + 1]) g[index + 1][j] = '.';
                if(g[index - 1]) g[index - 1][j] = '.';

            }
        }, '')
    }
}