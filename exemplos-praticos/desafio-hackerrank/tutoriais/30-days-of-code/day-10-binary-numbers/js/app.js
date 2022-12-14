

let stringEntrada = ['5'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const array = n.toString(2).split('');
    console.log(array);
    let maximo = 0;
    let atual = 0;

    for(let i = 0, iTotal = array.length; i < iTotal; i++) {

        if (array[i] == 1) {
            
            atual++;
             
        } else if (array[i] == 0) {
            
            if(atual > maximo) {

                maximo = atual;
            }

            atual = 0;
        }
    }

    if(atual > maximo) {

        maximo = atual;
    }

    console.log(maximo);
}

principal();