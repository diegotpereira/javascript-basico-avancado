// var _entrada = '';

// function data (entrada) {

    

//     _entrada += entrada
// }


// var entrada =  [];

// entrada.push(2, 'Hacker Rank');

function processarDado(entrada) {

    entrada.split('\n').reduce((rotulo, item, indice) => {

        if(indice && Number.isNaN(+item)) {

            let resultado = item.split('').reduce((rotulo, texto, indice) => {

                rotulo[+(indice % 2 !== 0)] += texto;

                return rotulo;
            }, new Array(2).fill('')).join(' ');

            console.log(resultado);
        }

        return rotulo;
    }, '');
}

processarDado();