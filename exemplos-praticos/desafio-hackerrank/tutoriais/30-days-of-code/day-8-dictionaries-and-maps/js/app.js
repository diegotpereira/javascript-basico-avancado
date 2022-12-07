// let entradaString = '3, sam 99912222, tom 11122222, harry 12299933, sam, edward, harry';
// let atualLinha = 0;

// function lerLinha() {

//    for(var i = 0; i < entradaString.length; i++) {

//        atualLinha++

//    }

//    return entradaString;
// }


const entrada = ['3','sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry'];

function processaDado(entrada) {

    
    let foneLivro = new Map();
    let arr = entrada.split('\n');
    let stringValor = '';

    for(let i = 0; i < arr.length; i++) {

        let valorSplit = arr[i].split(' ');

        if(valorSplit.length > 1) {

            foneLivro.set(valorSplit[0], valorSplit[1]);

        } else {

            if(foneLivro.has(valorSplit[0])) {

                stringValor += valorSplit[0] + '=' + foneLivro.get(valorSplit[0]) + '\n';

            } else {

                stringValor += 'Não Encontrado' + '\n';
            }
        }
    }

    console.log(stringValor);
}

processaDado()