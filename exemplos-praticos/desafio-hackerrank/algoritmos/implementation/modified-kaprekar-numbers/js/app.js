let stringEntrada = ['1', '100'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const p = parseInt(lerEntrada().trim(), 10);
    const q = parseInt(lerEntrada().trim(), 10);

    // const resultado = kaprekarNumbers(p, q);

    // console.log(resultado);
    kaprekarNumbers(p, q);  
}

principal();

// function kaprekarNumbers(p, q) {

//     let resultado = [];

//     for(let i = p; i <= q; i++) {

//         const stringQuadrada = (i * i).toString();
//         const num1 = stringQuadrada.substring(0, stringQuadrada.length / 2);
//         const num2 = stringQuadrada.substring(stringQuadrada.length / 2, stringQuadrada.length);

//         if(Number(num1) + Number(num2) === i) {

//             resultado = resultado.concat(i);
//         }
//     }
//     if(resultado.length === 0) {

//         console.log ('INVALID RANGE');

//     } else {

//         console.log (...resultado);
//     }
// }

function kaprekarNumbers(p, q) { // p = 1, q = 100

    let resultado = Array.from(
        { length: q - p + 1}, // q = 100, p = 1
        (value, index) => index + p
    ).reduce((target, value, index) => { // target = [], value = 1, index = 0 | target = [1], value = 2, index = 1

        let quadrado = `${ value ** 2 }`; // quadrado = "1", value = 1 | quadrado = "4", value = 2
        let direito = +quadrado.substring( // direito = 1 | direito = 4
            quadrado.length - `${value}`.length, // value = 1 | value = 2
            quadrado.length
        );
        let restante = +quadrado.substring(0, quadrado.length - `${value}`.length); // restante = 0, quadrado = "1", value = 1

        restante + direito ==  value && target.push(value); // restante = 0, direito = 1, value = 1, target = [1]
                                                             // restante = 0, quadrado = "4", value = 2, target = [1]

        return target;
    }, []);

    console.log (!resultado.length ? 'INVALID RANGE' : resultado.join(' '));
}