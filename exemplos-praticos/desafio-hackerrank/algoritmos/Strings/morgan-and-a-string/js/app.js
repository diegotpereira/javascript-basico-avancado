let stringEntrada = ['2', 'JACK', 'DANIEL', 'ABACABA', 'ABACABA'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}


function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index++) {
        
        const a = lerEntrada();
        const b = lerEntrada();

        const resultado = morganAndString(a, b);

        console.log(resultado + '\n');
        
    }
}

principal();

// function morganAndString(a, b) {

//     function* range(n, start = 0) {

//         let i = 0;

//         while(i++ < n)

//             yield start++;
//     }

//     function* morgan(a, b) {

//         a += 'z';
//         b += 'z';

//         for(let i of range(a.length + b.length - 2))

//             if(a < b) {

//                 yield a[0];
//                 a = a.substr(1);

//             } else {

//                 yield b[0];
//                 b = b.substr(1);
//             }
//     }

//     return [...morgan(a, b)].join('');
// }

function morganAndString(a, b) {

    a = a.split("");
    b = b.split("");

    const aLen = a.length;
    const bLen = b.length;

    let i = 0;
    let j = 0;
    let saida = "";

    function tie(_i, _j, char) {

        let resultado = 'a';
        let loops = 0;
        let todosIguais = true;

        while (true) {
            
            _i++;
            _j++;

            if(todosIguais) loops++;

            if(_i > aLen) {

                resultado = 'b';

                break;
            }

            if(_j > bLen) {

                resultado = 'a';

                break;
            }

            const _a = a[_i];
            const _b = b[_j];

            if (_a < _b) {
                
                resultado = 'a';
                break;
            }

            if (_a > _b) {
                
                resultado = 'b';
                break;
            }

            if(_a !== char) todosIguais = false;
        }

        return { vencedor: resultado, length: loops};
    }

    while (true) {
        
        if(i >= aLen && j >= bLen) break;

        const _a = a[i];
        const _b = b[j];

        if (_a === _b) {
            
            const res = tie(i, j, _a);

            if (res.vencedor === 'a') {
                
                saida += a.slice(i, i + res.length).join('');
                i += res.length;

            } else {

                saida += b.slice(j, j + res.length).join('');
                j += res.length;
            }
        } else if (_a < _b || !_b) {
            
            if(_a) {

                saida += _a;
            }

            i++;

        } else if (_a > _b || !_a) {
            
            if (_b) {
                
                saida += _b;
            }

            j++;
        }
    }

    return saida;
}