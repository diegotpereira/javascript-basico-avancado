let stringEntrada = ['aaabccddd'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s = lerEntrada();

    const resultado = superReducedString(s);

    console.log(resultado);
}

principal();

// function superReducedString(s) {

//     for(let i = 1; i < s.length; i += 1) {

//         if(s[i] == s[i - 1]) {

//             s = s.substring(0, i - 1) + s.substring(i + 1);
//             i = 0;
//         }
//     }
//     if(s.length == 0) {

//         return 'String Vazio';

//     } else {

//         return s;
//     }
// }


// function superReducedString(s) {

//     const valor = [...s].reduce((target, item) => {

//         if(target.slice(-1)[0] !== item) {

//             return [...target, item];
//         }
//         target.pop(item);

//         return target;
//     }, []);

//     return valor.length > 0 ? valor.join('') : 'String Vazio';
// }

function superReducedString(s) {

    let arr = s.split('');

    for(let index = 0; index < arr.length; ++index) {

        if(arr[index] === arr[index + 1]) {

            arr.splice(index, 2);
            index = -1;
        }
    }
    if(arr.length === 0)

        return 'String vazio';

    return (arr.join(''));
}

