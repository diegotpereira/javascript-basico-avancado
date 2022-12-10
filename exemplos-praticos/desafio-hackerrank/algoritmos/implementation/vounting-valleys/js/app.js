

function contarVales(passos, caminho) {

    var caminho = caminho.split('');
    var contar = 0;
    var resultado = 0;

    for(let i = 0; i < passos; i++) {

        if(contar == 0 && caminho[i].toLowerCase() == 'd') {

            contar-= 1;

            resultado++;

        } else if (caminho[i].toLowerCase() == 'd') {
            
            contar--;

        } else {

            contar++;
        }
    }
    
    return resultado;
}

function principal() {

    const passos = 8;
    const caminho = "UDDDUDUU";

    const resultado = contarVales(passos, caminho);

    console.log(resultado);
}

principal();