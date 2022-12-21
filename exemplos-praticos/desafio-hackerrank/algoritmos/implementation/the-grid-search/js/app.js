let stringEntrada = ['2', '10, 10', '7283455864', 
                     '6731158619', '8988242643', 
                     '3830589324', '2229505813', 
                     '5633845374', '6473530293', 
                     '7053106601', '0834282956', 
                     '4607924137', '3, 4', '9505', 
                     '3845', '3530', '15, 15', 
                     '400453592126560', '114213133098692', 
                     '474386082879648', '522356951189169',
                     '887109450487496', '252802633388782', 
                     '502771484966748','075975207693780',
                     '511799789562806', '404007454272504', 
                     '549043809916080', '962410809534811', 
                     '445893523733475','768705303214174', 
                     '650629270887160', '2, 2',
                     '99', '99'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const t = parseInt(lerEntrada().trim(), 10);

    for(let i = 0; i < t; i++) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const r = parseInt(primeiraMultiplaEntrada[0], 10);
        const c = parseInt(primeiraMultiplaEntrada[1], 10);

        let g = [];

        for(let i = 0; i < r; i++) {

            const gItem = lerEntrada();
            g.push(gItem);
        }

        const segundaMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const r2 = parseInt(segundaMultiplaEntrada[0], 10);
        const c2 = parseInt(segundaMultiplaEntrada[1], 10);

        let p = [];

        for(let i = 0; i < r2; i++) {

            const pItem = lerEntrada();
            p.push(pItem);

        }

        const resultado = gridSearch(g, p);

        console.log(resultado);
    }
}

principal();

function gridSearch(g, p) {
    
    for(let i = 0; i < g.length; ++i) {

        let gradeLinha = g[i];
        let padraoLinha = p[0];

        for(let j = 0; j < gradeLinha.length; ++j) {

            if(gradeLinha[j] == padraoLinha[0]) {

                let k = 1;

                for(; k < padraoLinha.length; ++k) 

                    if(gradeLinha[j + k] != padraoLinha[k])

                        break;

                if(k == padraoLinha.length) {

                    let m = 1;

                    for(; m < p.length; ++m) {

                        let proximaGradeLinha = g[i + m];
                        let proximoPadraoLinha = p[m];
                        let proximoIndice = j + proximoPadraoLinha.length;
                        
                        let n = j;

                        for(; n < proximoIndice; ++n)

                            if(proximaGradeLinha[n] != proximoPadraoLinha[n - j])

                                break;

                        if(n != proximoIndice)

                            break;
                    }

                    if(m == p.length)

                        return 'SIM'
                }
            }
        }
    }
    return 'NAO'
}