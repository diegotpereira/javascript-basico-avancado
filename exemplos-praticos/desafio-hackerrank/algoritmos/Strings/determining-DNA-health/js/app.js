let stringEntrada = ['6', 'a, b, c, aa, d, b', '1, 2, 3, 4, 5, 6', '3', '1, 5, caaab', '0, 4, xyz', '2, 4, bcdybc'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    const genes = lerEntrada().replace(/\s+$/g, '')
                              .split(" ");
    const saude = lerEntrada().replace(/\s+$/g, '')
                              .split(" ")
                              .map(saudeTemp => parseInt(saudeTemp, 10));

    const numeroFitas = parseInt(lerEntrada().trim(), 10);

    var tentar = new Tentar();
    var min = null;
    var max = null;

    genes.forEach((gene, index) => {

        tentar.add(gene, index, saude[index]);
    });

    for (let index = 0; index < numeroFitas; index += 1) {

        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');
        const primeira = parseInt(primeiraMultiplaEntrada[0], 10);
        const duracao = parseInt(primeiraMultiplaEntrada[1], 10);
        const inicioFim = primeiraMultiplaEntrada[2];

        var tamanho = inicioFim.length;
        var dnaSaude = 0;

        var obterSoma = function(cn) {

            
        }
        
    }



}