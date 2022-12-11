

function gatoEhRato(x, y, z) {

    var posA = Math.abs(x - z);
    var posB = Math.abs(y - z);

    if(posA < posB) {

        return "Gato A";

    } else if(posA > posB) {

        return "Gato B";

    } else {

        return "Rato C";
    }
}

let entradaString = ['2', '1, 2, 3','1, 3, 2'];
let atualLinha = 0;

function lerEntrada() {
    
    return entradaString[atualLinha++];
}

function principal() {

    const q = parseInt(lerEntrada(), 10);

    for(let a = 0; a < q; a++) {

        const xyz = lerEntrada().split(' ');
        
        const x = parseInt(xyz[0], 10);

        const y = parseInt(xyz[1], 10);

        const z = parseInt(xyz[2], 10);

        let result = gatoEhRato(x, y, z);

        console.log(result);
    }
}

principal();