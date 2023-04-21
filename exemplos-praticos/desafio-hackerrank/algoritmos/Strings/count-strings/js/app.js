let stringEntrada = ["3", "((ab)|(ba)) 2", "((a|b)*) 5", "((a*)(b(a*))) 100"];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}



function main() {

    const t = parseInt(lerEntrada().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {

        const firstMultipleInput = lerEntrada().replace(/\s+$/g, '').split(' ');

        const r = firstMultipleInput[0];

        const l = parseInt(firstMultipleInput[1], 10);

        const result = countStrings(r, l);

        console.log(result + '\n');
    }

}


main()


function countStrings(r, l) {
    
}

  