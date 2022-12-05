const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {



    let resultado = 'NAO';

    if(v1 <= v2)
       return resultado;

    while (x1 <= x2) {
        
        x1 += v1;
        x2 += v2;

        if (x1 === x2) {
            
            resultado = 'SIM';

            break;
        }
    }
    

    return resultado;
}

const resultado = kangaroo(x1, v1, x2, v2);

console.log(resultado); // saída: SIM