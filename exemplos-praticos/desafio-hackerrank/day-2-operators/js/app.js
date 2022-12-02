function principal() {

    // const custo_refeição = parseFloat(12.00);
    // const porcentagem_gorjeta = parseInt(20);
    // const porcentagem_taxa = parseInt(8);

    const custo_refeição = parseFloat(lerLinha().trim());
    const porcentagem_gorjeta = parseInt(lerLinha().trim(), 10);
    const porcentagem_taxa = parseInt(lerLinha().trim(), 10);

    resolver(custo_refeição, porcentagem_gorjeta, porcentagem_taxa);
}


function resolver(custo_refeição, porcentagem_gorjeta, porcentagem_taxa) {

    let custo_total = custo_refeição +
                      custo_refeição * 
                      porcentagem_gorjeta/100 + 
                      custo_refeição * 
                      porcentagem_taxa/100;

    console.log(Math.round(custo_total));
}

 let entradaString = '12.0, 20, 8';
 let atualLinha = 0;

function lerLinha() {

    for(var i = 0; i < entradaString.length; i++) {

        atualLinha++

    }

    return entradaString;
}

principal();