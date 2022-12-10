

function principal() {

    // número de páginas do livro
    const n = 6;
    // número da página para onde ir
    const p = 2;
    var contar = 0;
    var pagina = 1;

    while(pagina < p) {

        contar++;
        // console.log(contar++);
        // console.log(pagina);
        pagina += 2;
        // console.log(pagina += 2);
    }

    if(n % 2 !== 0) {

        pagina = n - 1;

    } else {

        pagina = n;
    }

    var resultado = 0;

    while(pagina > p) {

        resultado++;
        pagina -= 2;
    }

    if (contar < resultado) {
        // número mínimo de páginas para virar
        console.log(contar);

    } else {

        console.log(resultado);
    }
}

principal();