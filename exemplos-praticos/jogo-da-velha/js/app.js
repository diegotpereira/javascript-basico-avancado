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
    jogarProximaRodada: undefined,
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
        var _this = this

        var definirVencedorPontos,
        hm = humano.moves,
        tm = this.moves,
        terceiroMovimentoData = [{
            computadorJogador: [0, 2],
            segundoMovimentoData: {
                vencedorPontos: 1,
                terceiroMoverOpcoes: [{ opt: 4, metas: [6, 8] }, { opt: 6, metas: [3, 4] }, { opt: 8, metas: [4, 5] }],
                humanoVencedorPonto: 7
            }
        },
        {
            computadorJogador: [0, 6],
            segundoMovimentoData: {
                vencedorPontos: 3,
                terceiroMoverOpcoes: [{ opt: 4, metas: [2, 8] }, { opt: 2, metas: [1, 4] }, { opt: 8, metas: [4, 7] }],
                humanoVencedorPonto: 1
            }
        },
        {
            computadorJogador: [6,8],
            segundoMovimentoData: {
                vencedorPontos: 7,
                terceiroMoverOpcoes: [{ opt: 4, metas: [0, 2] }, { opt: 0, metas: [3, 4] }, { opt: 2, metas: [4, 5] }],
                humanoVencedorPonto: 1
            }
        },
        {
            computadorJogador: [8, 2],
            segundoMovimentoData: {
                vencedorPontos: 5,
                terceiroMoverOpcoes: [{ opt: 4, metas: [0, 6] }, { opt: 0, metas: [1, 4] }, { opt: 6, metas: [4, 7] }],
                humanoVencedorPonto: 3
            }
        },
        {
            computadorJogador: [0, 8],
            segundoMovimentoData: {
                humanoEhMovimentoCentro: true 
            }
        },
        {
            computadorJogador: [2, 6],
            segundoMovimentoData: {
                humanoEhMovimentoCentro: true 
            }
        }
    ]
    definirVencedorPontos = function() {
            _this.vencedorPontos = []
            var _iteradorNormalCompleto8 = true;
            var _didIteradorErro8 = false;
            var _iteradorErro8 = undefined;

            try {
                jogoGridSegundoLoop: for(var _iterador8 = Object.keys(jogoGrid) [Symbol.iterator](), _passo8; !(_iteradorNormalCompleto8 = (_passo8 = _iterador8.next()).done);
                _iteradorNormalCompleto8 = true) {
                    var grid = _passo8.value 

                    var _iteradorNormalCompleto9 = true
                    var _didIteradorErro9 = false;
                    var _iteradorErro9 = undefined

                    try {
                        for (var  _iterador9 = jogoGrid[grid] [Symbol.iterator](), _passo9; !(_iteradorNormalCompleto9 = (_passo9 = _iterador9.next()).done);
                            _iteradorNormalCompleto9 = true) {
                            var linha = _passo9.value

                            if ((arrayHas(linha, [tm[0], tm[2]]) || arrayHas(linha, [tm[1], tm[2]])) &&
                            !arrayHas(linha, tm[0]) && !arrayHas(linha, hm[1]) && !arrayHas(linha, hm[2])) {
                                var _iteradorNormalCompleto10 = true;
                                var _didIteradorErro10 = false;
                                var _iteradorErro10 = undefined;

                                try {
                                    for(var _iterador10 = linha[Symbol.iterator](), _passo10; !(_iteradorNormalCompleto10 = (_passo10 = _iterador10.next()).done); _iteradorNormalCompleto10 = true) {
                                        var valor = _passo10.value

                                        if (!arrayHas(tm, valor)) {
                                            _this.vencedorPontos.push(valor)
                                        }
                                    }
                                } catch (error) {
                                    _didIteradorErro10 = true 
                                    _iteradorErro10 = error
                                }finally {
                                    try {
                                        if (!_iteradorNormalCompleto10 && _iterador10.return) {
                                            _iterador10.return()
                                        }
                                    }finally {
                                        if (_didIteradorErro10) {
                                            throw _iteradorErro10
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        _didIteradorErro9 = true 
                        _iteradorErro9 = err
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto9 && _iterador9.return) {
                                _iterador9.return()
                            }
                        } finally {
                            if (_didIteradorErro9) {
                                throw _iteradorErro9
                            }
                        }
                    }
                }
            } catch (error) {
                _didIteradorErro8 = true 
                _iteradorErro8 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto8 && _iterador8.return) {
                        _iterador8.return()
                    }
                } finally {
                    if (_didIteradorErro8) {
                        throw _iteradorErro8
                    }
                }
            }
            _this.jogarProximaRodada = _this.facaQuartoMovimento
        }
        //primeiro verifica se o computador está movendo o centro
        if (this.padraoCentral) {
            if (this.vencedorPontos !== undefined && !arrayHas(hm, this.vencedorPontos[0])) {
                this.facaMover(this.vencedorPontos[0])
                this.vencedor();

                return 
            }
            if (this.vencedorPontos !== undefined && arrayHas(hm, this.vencedorPontos[0])) {
                var _iteradorNormalCompleto11 = true;
                var _didIteradorErro11 = false;
                var _iteradorErro11 = undefined;

                try{
                    for(var _iterador11 = Object.keys(jogoGrid) [Symbol.iterator](), _passo11; !(_iteradorNormalCompleto11 = (_passo11 = _iterador11.next()).done);
                    _iteradorNormalCompleto11 = true) {
                        var grade = _passo11.value 

                        var _iteradorNormalCompleto12 = true;
                        var _didIteradorErro12 = false;
                        var _iteradorErro12 = undefined;
                        
                        try {
                            for(var _iterador12 = jogoGrid[grade] [Symbol.iterator](), _passo12; !(_iteradorNormalCompleto12 = (_passo12 = _iterador12.next()).done);
                            _iteradorNormalCompleto12 = true) {
                                if (arrayHas(linha, hm)) {
                                    var _iteradorNormalCompleto13 = true;
                                    var _didIteradorErro13 = false;
                                    var _iteradorErro13 = undefined;

                                    try {
                                        for(var _iterador13 = linha[Symbol.iterator](), _passo13; !(_iteradorNormalCompleto13 = (_passo13 = _iteradorErro11.next()).done);
                                        _iteradorNormalCompleto13 = true) {
                                            var valor = _passo13.value 

                                            if (!arrayHas(hm, valor)) {
                                                this.facaMover(valor)
                                            }
                                        }
                                    } catch (error) {
                                        _didIteradorErro13 = true 
                                        _iteradorErro13 = error
                                    } finally {
                                        try {
                                            if (!_iteradorNormalCompleto13 && _iterador13.return) {
                                                _iterador13.return()
                                            }
                                        } finally {
                                            if (_didIteradorErro13) {
                                                throw _iteradorErro13
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (error) {
                            _didIteradorErro12 = true 
                            _iteradorErro12 = error
                        } finally {
                            try {
                                if (!_iteradorNormalCompleto12 && _iterador12.return) {
                                    _iterador12.return() 
                                }
                            } finally {
                                if (_didIteradorErro12) {
                                    throw _iteradorErro12
                                }
                            }
                        }
                    }
                    // o código acima criou two_way_points
                    // esvazie e redefina os pontos de ganho existentes
                } catch (error) {
                    _didIteradorErro11 = true 
                    _iteradorErro11 = error
                } finally {
                    try {
                        if (!_iteradorNormalCompleto11 && _iterador11.return) {
                            _iterador11.return()
                        }
                    } finally {
                        if (_didIteradorErro11) {
                            throw _iteradorErro11
                        }
                    }
                }
                this.vencedorPontos = []
                var _iteradorNormalCompleto14 = true;
                var _didIteradorErro14 = false;
                var _iteradorErro14 = undefined;

                try {
                    for(var _iterador14 = Object.keys[jogoGrid] [Symbol.iterator](), _passo14; !(_iteradorNormalCompleto14 = (_passo14 = _iterador14.next()).done);
                    _iteradorNormalCompleto14 = true) {
                        var grade = _passo14

                        var _iteradorNormalCompleto15 = true;
                        var _didIteradorErro15 = false;
                        var _iteradorErro15 = undefined;

                        try {
                            for(var _iterador15 = jogoGrid[grade] [Symbol.iterator](), _passo15; !(_iteradorNormalCompleto15 = (_passo15 = _iterador15.next()).done); 
                            _iteradorNormalCompleto15 = true) {
                                var linha = _passo15.value 

                                if (arrayHas(linha, tm[2])) {
                                    var _iteradorNormalCompleto16 = true;
                                    var _didIteradorErro16 = false;
                                    var _iteradorErro16 = undefined;

                                    try {
                                        for(var _iterador16 = linha[Symbol.iterator](), _passo16; !(_iteradorNormalCompleto16 = (_passo16.next()).done);
                                        _iteradorNormalCompleto16 = true) {
                                            var valor = _passo16.value 

                                            if (!arrayHas(tm, valor) && !arrayHas(hm, valor)) {
                                                this.vencedorPontos.push(valor)    
                                            }
                                        }
                                    } catch (error) {
                                        _didIteradorErro16 = true 
                                        _iteradorErro16 = error
                                    } finally {
                                        try {
                                            if (!_iteradorNormalCompleto16 && _iterador16.return) {
                                                _iterador16.return()
                                            }
                                        } finally {
                                            if (_didIteradorErro16) {
                                                throw _iteradorErro16
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (error) {
                            _didIteradorErro15 = true 
                            _iteradorErro15 = error
                        } finally {
                            try {
                                if (!_iteradorNormalCompleto15 && _iterador15.return) {
                                    _iterador15.return()
                                }
                            } finally {
                                if (_didIteradorErro15) {
                                    throw _iteradorErro15
                                }
                            }
                        }
                        
                    }
                } catch (error) {
                    _didIteradorErro14 = true 
                    _iteradorErro14 = error
                } finally {
                    try {
                        if (!_iteradorNormalCompleto14 && _iterador14.return) {
                            _iterador14.return()
                        }
                    } finally {
                        if (_didIteradorErro14) {
                            throw _iteradorErro14
                        }
                    }
                }
                this.jogarProximaRodada = this.facaQuartoMovimento

                return false
            }
            // chegou tão longe? humano está jogando inteligente
            // humano jogou um dos meus jogoPontos desejados em seu primeiro movimento
            // vamos ver o que ele está fazendo
        }
    },
    facaQuartoMovimento: function facaQuartoMovimento() {
        var hm = humano.moves,
        tm = this.moves

        if (this.vencedorPontos) {
            var _iteradorNormalCompleto29 = true;
            var _didIteradorErro29 = false;
            var _iteradorErro29 = undefined;

            try {
                for(var _iterador29 = this.vencedorPontos[Symbol.iterator](), _passo29; !(_iteradorNormalCompleto29 = (_passo29 = _iterador29.next()).done); 
                _iteradorNormalCompleto29 = true) {
                    var ordernadoPonto = _passo29.value

                    if (!(arrayHas(hm, ordernadoPonto))) {
                        this.facaMover(ordernadoPonto)
                        this.vencedor()

                        return
                    }
                }
            } catch (error) {
                _didIteradorErro29 = true 
                _iteradorErro29 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto29 && _iterador29.return) {
                        _iterador29.return()
                    }
                } finally {
                    if (_didIteradorErro29) {
                        throw _iteradorErro29
                    }
                }
            }
        }
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