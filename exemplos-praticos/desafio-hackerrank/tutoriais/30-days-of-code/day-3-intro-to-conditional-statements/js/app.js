
function principal (){

    const N = 3;

    var resultado = (N % 2 === 2 || (N % 2 === 0 && N >= 6 && N <=  20)) ? 'Par' : 'Impar';

    console.log(resultado);
}

principal();