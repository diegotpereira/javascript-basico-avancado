let stringEntrada = ['3', 'Ab1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const password = lerEntrada();

    const resultado = minimumNumber(n, password);

    console.log(resultado); // saída: 3
}

principal();

// function minimumNumber(n, password) {

//     let num_array = "0123456789".split('');
//     let matriz_letras_minusculas = "abcdefghijklmnopqrstuvwxyz".split('');
//     let matriz_letras_maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//     let especial_array = "!@#$%^&*()-+".split('');
//     let num_bandeira = false;
//     let inferior_bandeira = false;
//     let superior_bandeira = false;
//     let especial_bandeira = false;
//     let adicionar = 0;

//     for(let index = 0; index < n; index += 1) {

//         if(num_array.includes(password[index])) {

//             num_bandeira = true;

//         } else if(matriz_letras_minusculas.includes(password[index])) {

//             inferior_bandeira = true;

//         } else if(matriz_letras_maiusculas.includes(password[index])) {

//             superior_bandeira = true;

//         } else if(especial_array.includes(password[index])) {

//             especial_bandeira = true;
//         }
//     }
//     if (num_bandeira === false) {
        
//         adicionar += 1; // adicionar = 3
//         n += 1;
//     }

//     if(inferior_bandeira === false) {

//         adicionar += 1; // adicionar = 3
//         n += 1;
//     }
//     if (superior_bandeira === false) {
        
//         adicionar += 1;
//         n += 1;
//     }

//     if(n < 6) {

//         adicionar += (6 - n); // adicionar = 3, n = 3
//     }

//     return adicionar;
// }


function minimumNumber(n, password) {

    const comprimento_entrada_forte = 6;
    const num_em_falta = comprimento_entrada_forte - n;
    const password_eh_array = Array.from(password);

    let [num_de_numeros, num_de_minusculas, num_de_maisculas, num_de_especiais] = [0, 0, 0, 0];

    password_eh_array.filter(caracter => {

        if("0123456789".includes(caracter)) {

            num_de_numeros += 1;
        }
    });

    password_eh_array.filter(caracter => {

        if("abcdefghijklmnopqrstuvwxyz".includes(caracter)) {

            num_de_minusculas += 1;
        }
    });

    password_eh_array.filter(caracter => {

        if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(caracter)) {

            num_de_maisculas += 1;
        }
    });

    password_eh_array.filter(caracter => {

        if("!@#$%^&*()-+".includes(caracter)) {

            num_de_especiais += 1;
        }
    });

    let caracteres_ausentes = 0;
    let extras = 0;
    
    if (num_de_numeros === 0) {
        
        caracteres_ausentes += 1;
    }

    if(num_de_minusculas === 0) {

        caracteres_ausentes += 1;
    }

    if (num_de_maisculas === 0) {
        
        caracteres_ausentes += 1;
    }

    if(num_de_especiais === 0) {

        caracteres_ausentes += 1;
    }

    if(num_de_numeros >= 2 && n > comprimento_entrada_forte) {

        extras += 1;
    }

    if(num_de_minusculas >= 2 && n > comprimento_entrada_forte) {

        extras += 1;
    }

    if (num_de_maisculas >= 2 && n > comprimento_entrada_forte) {
        

        extras += 1;
    }

    if(num_de_especiais >= 2 && n > comprimento_entrada_forte) {

        extras += 1;
    }

    return Math.max(num_em_falta, Math.max((caracteres_ausentes - extras), caracteres_ausentes));
}