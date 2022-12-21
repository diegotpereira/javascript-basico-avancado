let stringEntrada = ['haveaniceday'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const s =  lerEntrada();

    const resultado = encription(s);

    console.log(resultado); // saida: hae and via ecy
}
principal();

function encription(s) {

    const ceil = Math.ceil(Math.sqrt(s.length)); // ceil = 4, s = haveaniceday, length = 12
    let temp = s;
    let array = [];

    while (temp) {
        
        array = array.concat(temp.substring(0, ceil)); // array = (3) ['have', 'anic', 'eday'], temp = 'haveaniceday', ceil = 4
        temp = temp.substring(ceil)
    }

    let resultado = [];

    for(let index = 0; index < ceil; index += 1) { // ceil = 4

        resultado = resultado.concat(array.reduce((r, v) => { // resultado = (4) ['hae', 'and', 'via', 'ecy'], array = (3) ['have', 'anic', 'eday'] 

            return r + (v[index] || "")
        }, ""))
    }
    return resultado.join(" ");
}