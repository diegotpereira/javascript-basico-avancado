let stringEntrada = ['4, 5','10101', '11100', '11010', '00101'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const multiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' '); // multiplaEntrada = (2) ['4', '5']
    const n = parseInt(multiplaEntrada[0], 10); // n = 4
    const m = parseInt(multiplaEntrada[1], 10); // m = 5
    
    let tema = []; // tema = (4) ['10101', '11100', '11010', '00101']

    for(let i = 0; i < n; i++) { // n = 4

        const temaItem = lerEntrada();
        tema.push(temaItem); // tema (4) ['10101', '11100', '11010', '00101']
    }

    
    const resultado = acmTime(tema);

    console.log(resultado);
}

principal();

function acmTime(tema) {

    function contarUns(str1, str2) { // str1 = "10101", str2 = "11100"

        let contar = 0; // contar = 0  1 2 3 4 5

        for(let i = 0; i < str1.length; i++) {

            if(str1[i] == 1) { // str1 = 10101

                contar++; // contar = 4

            } else if (str2[i] == 1) { // str2 = "11100"
                
                contar++; // contar = 4
            }
        }

        return contar;
    };

    let maximo = 0; // maximo = 4
    let times = 0; // times = 1
    let maximoIndice = tema.length - 1; // maximoIndice = 3, tema = (4) ['10101', '11100', '11010', '00101']

    for(let i = 0; i < maximoIndice; i++) { // maximoIndice = 3

        for(let j = i + 1; j <= maximoIndice; j++) { // maximoIndice = 3

            let digitoUns = contarUns(tema[i], tema[j]);  // digitoUns = 4, tema = (4) ['10101', '11100', '11010', '00101']

            if(digitoUns > maximo) { // maximo = 4 5   

                times = 0; // times = 0 1 2 
                maximo = digitoUns; // maximo = 4 5
            }

            if(digitoUns == maximo) { // maximo = 4

                times++;
            }
        }
    };


    return [maximo, times];
}

