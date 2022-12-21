let stringEntrada = ['4', '1112', '1912', '1892', '1234'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    let grade = [];

    for(let index = 0; index < n; index += 1) {

        const gradeItem = lerEntrada();
        grade.push(gradeItem);
    }
    const resultado = cavityMap(grade);

    console.log(resultado);
}

principal();

function cavityMap(grade) {

    const cavidades = grade.map(item => item.split('')); // (4) [Array(4), Array(4), Array(4), Array(4)], grade = (4) ['1112', '1912', '1892', '1234']

    return cavidades.reduce((rotulo, lista, indice, origem) => {

        const resultado = lista.reduce((listaRotulo, item, itemIndice) => { // listaRotulo = [1], item = '1', itemIndice = '0'

            listaRotulo.push(indice >= 1 && itemIndice >= 1 && indice < origem.length - 1 && itemIndice < lista.length && 
                            item > origem[indice][itemIndice - 1] &&
                            item > origem[indice][itemIndice + 1] && 
                            item > origem[indice - 1][itemIndice] && 
                            item > origem[indice + 1][itemIndice] ? 'X' : item);

                        return listaRotulo;
        }, []).join('');

        rotulo.push(resultado); // rotulo = ['1112'], resultado = '1112',
                                // rotulo = ['1112', '1X12'], resultado = '1x12'
                                // rotulo = ['1112', '1X12', '18X2'], resultado = '18X2' 
                                // rotulo = ['1112', '1X12', '18X2', '1234'], resultado = '1234' 

        return rotulo;
    }, []);
}