let stringEntrada = ['7', '1234', '91011', '99100', '101103', '010203', '13', '1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const q = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < q; i++) {

        const s = lerEntrada();

        const resultado = separateNumbers(s);

        console.log(resultado); // saída SIM 1, Sim 9, SIM 99, NAO, NAO, NAO, NAO
    }
}

principal();

function separateNumbers(s) {

    
    
    for(let i = 0; i <= Math.floor(s.length / 2); i++) {

        let char = s.slice(0, i);
        let num = BigInt(char);
        let novaString = '';

        // contém um zero à esquerda.
        while (novaString.length < s.length)
            novaString += num++;

        // onde x é o primeiro número da sequência crescente
        if(novaString === s) {

            return 'SIM ' + char;

            return;
        }
    }
    return 'NAO'
    // Esta solução não passa no teste 4

    // let bandeira = true;

    // for(let len = 1; len < s.length; len++) { 

    //     var primeira = s.substr(0, len);
    //     var num = s.substr(0, len);

    //     // cada elemento na sequência 1 a mais do que o elemento anterior
    //     if(s.length <= len) {
    //         continue;
    //     }

    //     var sNovo = ''.concat(primeira.toString());

    //     while (sNovo.length < s.length) {
    //         num++; // num = 3 4 10 11
    //         sNovo = sNovo.concat(num.toString());
    //     }

    //     // onde x é o primeiro número da sequência crescente
    //     if(sNovo === s) {

    //         return 'SIM ' + primeira;

    //         bandeira = false;

    //         continue;

    //     }
    // }

    // if(bandeira) {

    //     return 'NAO'
    // }
}