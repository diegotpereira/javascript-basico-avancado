let marcas = [4, 5, 67, 9, 10, 3]

let menosDeCinco = marcas.some(e => e < 5)

console.log(menosDeCinco);

function existem(valor, array) {

    return array.some(e => e === valor)
}

let marcass = [4, 5, 7, 9, 10, 2]

console.log(existem(4, marcass));
console.log(existem(11, marcass));

let marcasss = [4, 5, , 7, 9, 10, 2]

const alcance = {
    min: 8,
    max: 10
}

let resultado = marcasss.some(function(e) {

    return e >= this.min && e <- this.max
}, alcance)

console.log(resultado);