'use strict';
// var $ = require('jquery'),

// //jQuery = $,
// bootstrap = require('bootstrap'),

var 
humano,
computador,
arrayHas,
gameGrid = {
    rows: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    columns: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
    diagonal1: [[0, 4, 8]],
    diagonal2: [[2, 4, 6]]
},
jogoPontos = [0, 1, 2, 3, 4, 5, 6, 7, 8],
jQMap = {},
configMap = {}


humano = {
    moves: [],
    jogar: function jogar() {
        var mover = undefined,
        $this = $(this),
        $simbolo = $this.children('.simbolo')

        if ($simbolo.text()) {
            return false
        }
        $simbolo.text(configMap.humanoSimbolo || 'X')
        mover = +$this.attr('id')
        humano.moves.push(mover)
        jQMap.$jogarCaixa.off('click')
        setTimeout(() => {
            computador.jogarProximaRodada.call(computador)
            jQMap.$jogarCaixa.on('click', humano.jogar)
        }, 300);

        return false
    }
}
computador = {
    vencedorPontos: undefined,
    jogarProximaRodada: undefined,
    moves: [],
    iniciarPontos: [0, 2, 4, 6, 8],
    padraoCentral: false,


    fazerPrimeiroMovimento: function fazerPrimeiroMovimento() {
        var mover 

        mover = this.iniciarPontos[Math.round(Math.random() * (this.iniciarPontos.length - 1))]

        this.padraoCentral = mover === 4 ? true : false
        this.facaMover(mover)
        this.jogarProximaRodada = this.fazerSegundoMovimento
    },
    fazerSegundoMovimento: function fazerSegundoMovimento() {
        var segundoMovimento,
        primeiroMovimentoHumano = humano.moves[0],
        computadorPrimeiraOpcao = {
            0: {
                computadorOpcoes: [2, 6],
                humanoOpcoes: [{ opt: 1, mover: 2 }, { opt: 2, mover: 6 }, { opt: 4, mover: 8 }, { opt: 3, mover: 6 }, { opt: 6, mover: 2 }]
            },
            2: {
                computadorOpcoes: [0, 8],
                humanoOpcoes: [{ opt: 1, mover: 0 }, { opt: 0, mover: 8 }, { opt: 4, mover: 6 }, { opt: 5, mover: 8 }, { opt: 8, mover: 0 }]
            },
            6: {
                computadorOpcoes: [0, 8],
                humanoOpcoes: [{ opt: 3, mover: 0 }, { opt: 0, mover: 8 }, { opt: 4, mover: 2 }, { opt: 7, mover: 8 }, { opt: 8, mover: 0 }]
            },
            8: {
                computadorOpcoes: [6, 2],
                humanoOpcoes: [{ opt: 7, mover: 6 }, { opt: 6, mover: 2 }, { opt: 4, mover: 0 }, { opt: 5, mover: 2 }, { opt: 2, mover: 6 }]
            }
        },
        cfo = computadorPrimeiraOpcao

        //primeiro verifica se o computador está movendo o centro
        if (this.padraoCentral) {

            // se o humano jogou um dos meus pontos desejados
           // use esse ponto para definir a armadilha two_way
           if (arrayHas(this.iniciarPontos, humano.moves[0])) {
                var humanoPrimeiroMovimento = humano.moves[0],
                ultimoJogoPonto = jogoPontos[jogoPontos.length - 1]

                var _iteradorNormalCompleto2 = true 
                var _didIteradorErro2 = false 
                var _iteradorErro2 = undefined

                try {
                    for(var _iterador2 = jogoPontos[Symbol.iterator](), _passo2; ! (_iteradorNormalCompleto2 = (_passo2 = _iterador2.next()).done); 
                    _iteradorNormalCompleto2 = true) {
                        var jogo = _passo2.value

                        if (jogo === humanoPrimeiroMovimento) {
                            this.facaMover(ultimoJogoPonto)
                            this.jogarProximaRodada = this.facaTerceiroMovimento

                            return false
                        }
                        ultimoJogoPonto -= 1
                    }
                } catch (error) {
                    _didIteradorErro2 = true 
                    _iteradorErro2 = error
                } finally {
                    try {
                        if (!_iteradorNormalCompleto2 && _iterador2.return) {
                            _iterador2.return()
                        }
                    } finally {
                        if (_didIteradorErro2) {
                            throw _iteradorErro2
                        }
                    }
                }
            }
            //se o teste acima falhou, defina um ponto de vitória para o terceiro movimento, seria uma armadilha de mão dupla
           // se o humano bloquear o ponto vencedor, o terceiro movimento definiria ganhando pontos em dois sentidos
           var _iteradorNormalCompleto3 = true 
           var _didIteradorErro3 = false
           var _iteradorErro3 = undefined

           try {
            for(var _iterador3 = Object.keys(jogoGrid)[Symbol.iterator](), _passo3; !(_iteradorNormalCompleto3 = (_passo3 = _iterador3.next()).done);
                _iteradorNormalCompleto3 = true ) {
                    var grid = _passo3.value

                    var _iteradorNormalCompleto4 = true;
                    var _didIteradorErro4 = false;
                    var _iteradorErro4 = undefined;

                    try {
                        for(var _iterador4 = jogoGrid[grid][Symbol.iterator](), _passo4; !(_iteradorNormalCompleto4 = (_passo4 = _iterador4.next()).done); 
                        _iteradorNormalCompleto4 = true) {
                            var linha = _passo4.value 

                            if (arrayHas(linha, humano.moves[0]) && !arrayHas(linha, this.moves[0])) {
                                var armadilha_em_dois_sentidos = undefined,
                                ultimoJogoPonto = jogoPontos[jogoPontos.length - 1],
                                foundMatch = false 

                                while(!foundMatch) {
                                    var aleatorioJogoPonto = Math.random(Math.random() * (linha.length - 1))
        
                                    armadilha_em_dois_sentidos = linha[aleatorioJogoPonto]
        
                                    if (!arrayHas(humano.moves, armadilha_em_dois_sentidos) && !arrayHas(this.moves, armadilha_em_dois_sentidos)) {
                                        foundMatch = true 
                                    }
                                }
                                this.vencedorPontos = [armadilha_em_dois_sentidos]

                                var _iteradorNormalCompleto5 = true;
                                var _didIteradorErro5 = false;
                                var _iteradorErro5 = undefined;

                                try {
                                    for(var _iterador5 = jogoPontos[Symbol.iterator](), _passo5; !(_iteradorNormalCompleto5 = (_passo5 = _iterador5.next()).done);
                                    _iteradorNormalCompleto5 = true) {
                                        var ponto = _passo5.value 
        
                                        if (ponto === armadilha_em_dois_sentidos) {
                                            this.facaMover(ultimoJogoPonto)
                                            this.jogarProximaRodada = this.facaTerceiroMovimento
        
                                            return
                                        }
                                        ultimoJogoPonto -= 1
                                    }
                                } catch (error) {
                                    _didIteradorErro5 = true 
                                    _iteradorErro5 = error
                                } finally {
                                    try {
                                        if (!_iteradorNormalCompleto5 && _iterador5.return) {
                                            _iterador5.return()
                                        }
                                    } finally {
                                        if (_didIteradorErro5) {
                                            throw _iteradorErro5
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        _didIteradorErro4 = true 
                        _iteradorErro4 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto4 && _iterador4.return) {
                                _iterador4.return()
                            }
                        } finally {
                            if (_didIteradorErro4) {
                                throw _iteradorErro4
                            }
                        }
                    }
                    
                }
            } catch (error) {
                _didIteradorErro3 = true 
                _iteradorErro3 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto3 && _iterador3.return) {
                        _iterador3.return()
                    }
                } finally {
                    if (_didIteradorErro3) {
                        throw _iteradorErro3
                    }
                }
            }
        }
        var _iteradorNormalCompleto6 = true;
        var _didIteradorErro6 = false;
        var _iteradorErro6 = undefined;

        try {
            loopPrimeirasOpcoesComputador: for(var _iterador6 = Object.keys(cfo)[Symbol.iterator](), _passo6; !(_iteradorNormalCompleto6 = (_passo6 = _iterador6.next()).done);
            _iteradorNormalCompleto6 = true) {
                var opcao = _passo6.value

                if (+opcao === this.moves[0]) {
                    var _iteradorNormalCompleto7 = true;
                    var _didIteradorErro7 = false;
                    var _iteradorErro7 = undefined;

                    try {
                        for(var _iterador7 = Object.keys(cfo)[Symbol.iterator](), _passo7; !(_iteradorNormalCompleto7 = (_passo7 = _iterador7.next()).done);
                        _iteradorNormalCompleto7 = true) {
                            var _opcao = _passo7.value

                            if (_opcao.opt === primeiroMovimentoHumano) {
                                segundoMovimento = _opcao.mover

                                break loopPrimeirasOpcoesComputador
                            } else {
                                segundoMovimento = cfo[opcao].computadorOpcoes[Math.round(Math.random() * (cfo[opcao].computadorOpcoes.length - 1))]
                            }
                        }
                    } catch (error) {
                        _didIteradorErro7 = true 
                        _iteradorErro7 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto7 && _iterador7.return) {
                                _iterador7.return()
                            }
                        } finally {
                            if (_didIteradorErro7) {
                                throw _iteradorErro7
                            }
                        }
                    }
                }
            }
        } catch (error) {
            _didIteradorErro6 = true 
            _iteradorErro6 = error
        } finally {
            try {
                if (!_iteradorNormalCompleto6 && _iterador6.return) {
                    _iterador6.return()
                }
            } finally {
                if (_didIteradorErro6) {
                    throw _iteradorErro6
                }
            }
        }
        this.facaMover(segundoMovimento)
        this.jogarProximaRodada = this.facaTerceiroMovimento
    },
    facaTerceiroMovimento: function facaTerceiroMovimento() {

    },
    facaMover: function facaMover(mover) {
        this.moves.push(mover)

        $(jQMap.$jogarCaixa[mover]).children('.simbolo').text(configMap.computadorSimbolo || 'O')
    }
}
function argumentoJQMap(_jQMap) {
    if (_jQMap) {
        Object.assign(jQMap, _jQMap) 

        return true 
    }
    jQMap.$jogarCaixa = $('.jogar-caixa')
    jQMap.$simboloOpcoes = $('.simbolo-opcao')
}

function initApp() {

    argumentoJQMap()

    jQMap.$simboloOpcoes.on('click', function() {
        var simbolo = $(this).text()
        configMap.humanoSimbolo = simbolo
        configMap.computadorSimbolo = simbolo ===  'X' ? 'O' : 'X'
        computador.fazerPrimeiroMovimento()
        jQMap.$jogarCaixa.on('click', humano.jogar)
    })

    // iniciar jogo
    $('.app-modal').modal('show');
}
$(initApp)