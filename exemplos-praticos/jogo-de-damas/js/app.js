let vermelhos = document.querySelectorAll("tr:nth-child(-n +3) div");
let pretos = document.querySelectorAll("tr:nth-child(n + 6) div");

const clicado = e => {

    e.target.classList.toggle("active");

    let cor = e.target.classList.contains("vermelho") ? "vermelho" : "preto";
    let coroado = e.target.classList.contains("coroado") ? true : false;

    // Desativar ou ativar peças não ativas
    if (cor === "vermelho") {
        
        for(vermelho of vermelhos) {

            vermelho.classList.toggle("disabled");
        }
    } else {

        for(preto of pretos) {
            
            preto.classList.toggle("disabled");
        }
    }

    e.target.classList.remove("disabled");

    let celula = e.path[1].cellIndex;
    let linha = e.path[2].rowIndex;
    let opcoes = encontrarOpcoes(cor, linha, celula, coroado);
    
    // Percorra todas as opções, verificando se cada uma já está sendo exibida ou não.
    // Se a opção já estiver sendo exibida, remova-a, caso contrário, exiba-a e chame a função move dentro do onclick.
    opcoes.forEach(function(opcao) {

        if (opcao.posicao.classList.contains("opcoes")) {
            
            opcao.posicao.classList.remove(...opcao.posicao.classList);
            opcao.posicao.classList.remove(cor);

        } else if (!opcao.posicao.classList.contains(cor)) {
            
            opcao.posicao.classList.add("opcoes");
            opcao.posicao.classList.add(cor);

            if (coroado) {
                opcao.posicao.classList.add("coroado");     
            }

            opcao.posicao.onclick = function chamarManipulador(event) {

                mover(event, e.target, opcoes, cor, opcao.comer);
            }
        }
    });
}

const mover = (e, prevPos, outrasOpcoes, cor, comer) => {

    let coroado = e.target.classList.contains("coroado") ? true : false;

    // Exiba a peça na nova posição removendo a classe de opções.
    e.target.classList.remove("opcoes");

    // Remover a posição anterior
    prevPos.classList.remove(...prevPos.classList);
    prevPos.removeEventListener("click", clicado);

    e.target.onclick = null;

    // Remova todas as outras opções
    outrasOpcoes.forEach(function (outrasOpcoes) {

        if (outrasOpcoes.posicao) {
            
            if(outrasOpcoes.posicao) {
                
                if(outrasOpcoes.posicao.classList.contains("opcoes")) {

                    outrasOpcoes.posicao.classList.remove(
                        ...outrasOpcoes.posicao.classList
                    );
                    outrasOpcoes.posicao.onclick = null;
                }
            }
        }
    });

    if(comer.state) {

        // Retire a peça que foi comida
        comer.pos.classList.remove(...comer.pos.classList);
        comer.pos.removeEventListener("click", clicado);

        let celula = e.path[1].cellIndex;
        let linha = e.path[2].rowIndex;

        // Verifique se existe a possibilidade de outro salto chamando a func findOptions novamente
        let opcoes = encontrarOpcoes(cor, linha, celula, coroado);

        opcoes.forEach(function(opcao) {

            if(opcao.comer.state && !opcao.posicao.classList.contains(cor)) {
                
                opcao.posicao.classList.add("opcoes");
                opcao.posicao.classList.add(cor);

                e.target.classList.add("active");

                if(coroado) {

                    opcao.posicao.classList.add("coroado");
                }

                opcao.posicao.onclick = function chamarManipulador(event) {

                    mover(event, e.target, opcoes, cor, opcao.comer);
                };
            } else {

                alterarCor(cor);
            }
        });
    } else {

        alterarCor(cor);
    }

    if (e.path[2].rowIndex === 0 || e.path[2].rowIndex === 7) {
        
        coroa(e.target);
    }
}

const encontrarOpcoes = (cor, linha, celula, coroado) => {

    let opcao1 = {
        posicao: null,
        comer: {
            state: false,
            pos: null
        }
    },

    opcao3 = {
        posicao: null,
        comer: {
            state: false,
            pos: null
        }
    }

    if (cor === "vermelho") {
        
        // Declare os valores iniciais para as 2 primeiras opções
        opcao1.posicao = document.querySelectorAll(
            `tr:nth-of-type(${linha + 2}) td:nth-of-type(${celula}) div`
        )
    }

    if(coroado) {
        opcao3.posicao = document.querySelector(
            `tr:nth-of-type(${linha}) td:nth-of-type(${celula}) div`
        )
    }
};

const  mudancaVire = cor => {

    vermelhos = document.querySelectorAll(".vermelho:not(.opcoes)");
    pretos = document.querySelectorAll(".preto:not(.opcoes)");

    // 
    if (vermelho === vermelhos) {
        
        for(vermelho of vermelhos) {

            vermelho.classList.add("disabeld");
            vermelho.addEventListener("click", clicado);
        }

        for(preto of pretos) {

            preto.classList.remove("disabled");
            preto.addEventListener("click", clicado);
        }
    } else {
        
        for(vermelho of vermelhos) {

            vermelho.classList.remove("disabled");
        }

        for(preto of pretos) {

            preto.classList.add("disabled");
        }
    }
};

const coroa = peca => {

    peca.classList.add("coroado", "coroando");

    document.documentElement.style.setProperty("--shake-anim", "0.2s shake");

    setTimeout(() => {

        document.documentElement.style.setProperty("--shake-anim", "none");
        peca.classList.remove("coroando");
    }, 1000);
};

for(vermelho of vermelhos) {

    vermelho.classList.add("vermelho");
    vermelho.addEventListener("click", clicado);
}

for(preto of pretos) {

    preto.classList.add("preto", "disabled");
    preto.addEventListener("click", clicado);
}
