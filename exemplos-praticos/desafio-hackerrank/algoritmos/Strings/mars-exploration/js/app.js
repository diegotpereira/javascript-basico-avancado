let stringEntrada = ['SOSSPSSQSSOR'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {
    const s = lerEntrada();

    const resultado = exploracaoMarte(s); // saida: SOSSPSSQSSOR

    console.log(resultado);
}

principal();

function exploracaoMarte(s) { // s = SOSSPSSQSSOR

    let num = 0; // num = 0
    let resultado; // resultado = undefined

    for(let i = 0, len = s.length; i < len; i++) { // i = 0, len = 12, s = SOSSPSSQSSOR

        resultado = (i % 3 == 1) ? 'O' : 'S'; // resultado =  = O

        if(s.charAt(i) != resultado) { // s = "SOSSPSSQSSOR", resultado = O

            num++;
        }
    }

    return num;
}