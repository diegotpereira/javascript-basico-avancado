let stringEntrada = ['2017'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const ano = parseInt(lerEntrada().trim(), 10);

    const resultado = dayOfProgrammer(ano);

    console.log(resultado + '\n');
}

principal();
// var ano = 2017;  

// function dayOfProgrammer(ano) {

//     if (ano == 1918) 
//        return "26.09.1918";

//     else if(((ano <= 1917) && // true
//              (ano % 4 == 0)) || // false
//             ((ano % 400 == 0) || // false
//             ((ano % 4 == 0) & // false
//             (ano  % 100 != 0)))) // true

//             return " 12.09." + ano;

//     else 
//         return "13.09." + ano;
// }

// console.log(dayOfProgrammer(2017));

function dayOfProgrammer(ano) {

    if(ano >= 1700 &&  ano <= 2700) {

        // calendario juliano
        if(ano >= 1700 && ano <= 1917) {

            if (ano % 4 === 0) {
                

                return `12.09.${ano}`;

            } else {

                return `13.09.${ano}`;
            }
        }
        // 1918
        if (ano === 1918) {
            
            return `26.09.${ano}`;
        }
        // calendario gregoriano
        if((ano % 4 === 0) && (ano % 100 != 0) && (ano  % 400 === 0)) {

            return `12.09.${ano}`;

        } else {

            return `13.09.${ano}`
        }

    } else {

        return `Por favor, digite um ano entre 1700 e 2700`;
    }
}