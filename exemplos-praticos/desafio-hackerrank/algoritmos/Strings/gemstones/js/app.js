let stringEntrada = ['3', 'abcdde', 'baccd', 'eeabg'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    let arr = [];

    for(let i = 0; i < n; i++) {

        const arrItem = lerEntrada();

        arr.push(arrItem);
    }

    const resultado = gemstones(arr);

    console.log(resultado); // saida: 2
}

principal();

function gemstones(arr) {

    // Inicialização da variável "combinar" 
    // para obter todas as letras de 3 strings no 
    // array em uma string combinada com uso do join('')     
    let combinar = arr.join(''); // combinar = 'abcddebaccdeeabg', arr = ['abcdde', 'baccd', 'eeabg']

    // letras únicas para verificar se todas elas estão 
    // presentes em todas as 3 strings do array inserido.
    // O construtor de Set funciona com qualquer tipo de 
    // entrada e cria um novo objeto Set com elementos únicos, 
    // mas com o operador spread transformamos a saída de Set de volta em array.
    let unico = [...new Set(combinar)]; // unico = (6) ['a', 'b', 'c', 'd', 'e', 'g'], combinar = 'abcddebaccdeeabg'

    // filter() retorna uma matriz de todos os elementos que passam pela condição na função fornecida.
    // Every() — é um método que verifica se todos os elementos de um array passam no teste implementado 
    // pela função fornecida e neste caso a função é .includes())
    // includes () aceita o argumento e verifica se a string ou array selecionada contém o argumento fornecido.
    let resultado = unico.filter(ch => arr.every(str => str.includes(ch))); // resultado = (2) ['a', 'b'], unico = (6) ['a', 'b', 'c', 'd', 'e', 'g']

    return resultado.length;
}