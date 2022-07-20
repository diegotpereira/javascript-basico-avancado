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
    quartoVencedorOpcoes: [{bloqueadoPonto: 0, vencedorOpcoes: [1, 3] }, { bloqueadoPonto: 2, vencedorOpcoes: [1, 5] }, { bloqueadoPonto: 6, vencedorOpcoes: [3, 7] }, { bloqueadoPonto: 8, vencedorOpcoes: [7, 5] }],


    facaPrimeiroMovimento: function facaPrimeiroMovimento() {
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
                humanoVencedorPonto: 5
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
        }]
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
                            !arrayHas(linha, hm[0]) && !arrayHas(linha, hm[1]) && !arrayHas(linha, hm[2])) {
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
                                var linha = _passo12.value 

                                if (arrayHas(linha, hm)) {
                                    var _iteradorNormalCompleto13 = true;
                                    var _didIteradorErro13 = false;
                                    var _iteradorErro13 = undefined;

                                    try {
                                        for(var _iterador13 = linha[Symbol.iterator](), _passo13; !(_iteradorNormalCompleto13 = (_passo13 = _iteradorErro13.next()).done);
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
                    for(var _iterador14 = Object.keys(jogoGrid) [Symbol.iterator](), _passo14; !(_iteradorNormalCompleto14 = (_passo14 = _iterador14.next()).done);
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
                                        for(var _iterador16 = linha[Symbol.iterator](), _passo16; !(_iteradorNormalCompleto16 = (_passo16 = _iterador16.next()).done);
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

            
            // primeiro veja se ele está jogando em uma linha,
            // então bloqueia o ponto que ele ainda não jogou

            var _iteradorNormalCompleto17 = true;
            var _didIteradorErro17 = false;
            var _iteradorErro17 = undefined;

            try {
                jogoGridLoop: for(var _iterador17 = Object.keys(jogoGrid) [Symbol.iterator](), _passo17; !(_iteradorNormalCompleto17 = (_passo17 = _iterador17.next()).done);
                _iteradorNormalCompleto17 = true) {
                    var grade = _passo17.value 

                    var _iteradorNormalCompleto18 = true;
                    var _didIteradorErro18 = false;
                    var _iteradorErro18 = undefined;

                    try {
                        for(var _iterador18 = jogoGrid[grade] [Symbol.iterator](), _passo18; !(_iteradorNormalCompleto18 = (_passo18 = _iterador18.next()).done);
                        _iteradorNormalCompleto18 = true) {
                            var linha = _passo18.value 

                            if (arrayHas(linha, hm)) {
                                var _iteradorNormalCompleto19 = true;
                                var _didIteradorErro19 = false;
                                var _iteradorErro19 = undefined;

                                try {
                                    for(var _iterador19 = linha[Symbol.iterator](), _passo19; !(_iteradorNormalCompleto19 = (_passo19 = _iterador19.next()).done);
                                    _iteradorNormalCompleto19 = true) {
                                        var valor = _passo19.value 

                                        if (!arrayHas(hm, valor)) {
                                            this.facaMover(valor)

                                        // hmm acabamos de criar um ponto de mão dupla ou um ponto de mão única
                                        // configura para o quanrtoMovimento
                                        definirVencedorPontos()

                                        return false

                                        }
                                    }
                                } catch (error) {
                                    _didIteradorErro19 = true
                                    _iteradorErro19 = error
                                } finally {
                                    try {
                                        if (!_iteradorNormalCompleto19 && _iterador19.return) {
                                            _iterador19.return()
                                        }
                                    } finally {
                                        if (_didIteradorErro19) {
                                            throw _iteradorErro19
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        _didIteradorErro18 = true 
                        _iteradorErro18 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto18 && _iterador18.return) {
                                _iterador18.return()
                            }
                        } finally {
                            if (_didIteradorErro18) {
                                throw _iteradorErro18
                            }
                        }
                    }
                }
            } catch (error) {
                _didIteradorErro17 = true 
                _iteradorErro17 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto17 && _iterador17.return) {
                        _iterador17.return()
                    }
                } finally {
                    if (_didIteradorErro17) {
                        throw _iteradorErro17
                    }
                }
            }
            // senão, encontre duas linhas que ele não está, mas nós estamos
            // então encontre e reproduza o ponto comum entre as duas linhas
            // isso definiria um ponto de mão dupla
            var computador_apenas_linhas = []
            var _iteradorNormalCompleto20 = true;
            var _didIteradorErro20 = false;
            var _iteradorErro20 = undefined;

            try {
                for(var _iterador20 = Object.keys(jogoGrid) [Symbol.iterator](), _passo20; !(_iteradorNormalCompleto20 = (_passo20 = _iterador20.next()).done);
                _iteradorNormalCompleto20 = true) {
                    var grade = _passo20.value 

                    var _iteradorNormalCompleto21 = true;
                    var _didIteradorErro21 = false;
                    var _iteradorErro21 = undefined;

                    try {
                        for(var _iterador21 = jogoGrid[grade] [Symbol.iterator](), _passo21; !(_iteradorNormalCompleto21 = (_passo21 = _iterador21.next()).done); 
                        _iteradorNormalCompleto21 = true) {
                            var linha = _passo21.value 

                            if ((arrayHas(linha, tm[0]) || arrayHas(linha, tm[1])) && !arrayHas(linha, hm[0]) && !arrayHas(linha, hm[1])) {
                                computador_apenas_linhas.push(linha)
                            }
                        }
                    } catch(error) {
                        _didIteradorErro21 = true 
                        _iteradorErro21 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto21 && _iterador21.return) {
                                _iterador21.return()
                            }
                        } finally {
                            if (_didIteradorErro21) {
                                throw _iteradorErro21
                            }
                        }
                    }
                }
            } catch (error) {
                _didIteradorErro20 = true
                _iteradorErro20 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto20 && _iterador20.return) {
                        _iterador20.return()
                    }
                } finally {
                    if (_didIteradorErro20) {
                        throw _iteradorErro20
                    }
                }
            }
            var _iteradorNormalCompleto22 = true;
            var _didIteradorErro22 = false;
            var _iteradorErro22 = undefined;

            try {
                for(var _iterador22 = computador_apenas_linhas[0][Symbol.iterator](), _passo22; !(_iteradorNormalCompleto22 = (_passo22 = _iterador22.next()).done);
                _iteradorNormalCompleto22 = true) {
                    var valor = _passo22.value 

                    if (valor !== 4 && (arrayHas(computador_apenas_linhas[1], valor) || arrayHas(computador_apenas_linhas[2], valor))) {
                        this.facaMover(valor)

                        definirVencedorPontos()

                        return false 
                    }
                }
            } catch (error) {
                _didIteradorErro22 = true 
                _iteradorErro22 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto22 && _iterador22.return) {
                        _iterador22.return()
                    }
                } finally {
                    if (_didIteradorErro22) {
                        throw _iteradorErro22 
                    }
                }
            }
        }
        var _iteradorNormalCompleto23 = true;
        var _didIteradorErro23 = false;
        var _iteradorErro23 = undefined;

        try {
            for(var _iterador23 = terceiroMovimentoData[Symbol.iterator](), _passo23; !(_iteradorNormalCompleto23 = (_passo23 = _iterador23.next()).done);
            _iteradorNormalCompleto23 = true) {
                var dado = _passo23.value 

                if (arrayHas(tm, dado.computadorJogador)) {
                    
                    if (dado.segundoMovimentoData.humanoEhMovimentoCentro) {
                        var bloqueadoPonto = this.bloqueadoHumanoCentroMover()

                        
                    // define 'armadilha_em_dois_sentidos' vencedorPontos para o quarto movimento do computador
                    var _iteradorNormalCompleto24 = true;
                    var _didIteradorErro24 = false;
                    var _iteradorErro24 = undefined;

                    try {
                        for(var _iterador24 = this.quartoVencedorOpcoes[Symbol.iterator](), _passo24; !(_iteradorNormalCompleto24 = (_passo24 = _iterador24.next()).done);
                        _iteradorNormalCompleto24 = true) {

                            var opcao = _passo24.value

                            if (opcao.bloqueadoPonto === bloqueadoPonto) {
                                this.vencedorOpcoes = opcao.vencedorOpcoes
                                this.jogarProximaRodada = this.facaQuintoMovimento

                                return false
                            }
                        }
                        // OU defina 'one_way' winpoint se 'two_way' falhou
                        // primeiro determina a linha/coluna onde o computador fez dois movimentos
                        // então, a partir dessa linha/coluna, defina o ponto que o computador não jogou
                    } catch (error) {
                        _didIteradorErro24 = true 
                        _iteradorErro24 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto24 && _iterador24.return) {
                                _iterador24.return()
                            }
                        } finally {
                            if (_didIteradorErro24) {
                                throw _iteradorErro24
                            }
                        }
                    }
                    var _iteradorNormalCompleto25 = true;
                    var _didIteradorErro25 = false;
                    var _iteradorErro25 = undefined;

                    try {
                        for(var _iterador25 = Object.keys(jogoGrid) [Symbol.iterator](), _passo25; !(_iteradorNormalCompleto25 = (_passo25 = _iterador25.next()).done); 
                        _iteradorNormalCompleto25 = true) {
                            var grade = _passo25.value 

                            var _iteradorNormalCompleto26 = true;
                            var _didIteradorErro26 = false;
                            var _iteradorErro26 = undefined;

                            try {
                                for(var _iterador26 = jogoGrid[grade] [Symbol.iterator](), _passo26; !(_iteradorNormalCompleto26 = (_passo26 = _iterador26.next()).done);
                                _iteradorNormalCompleto26 = true) {
                                    var linha = _passo26.value 

                                    if(arrayHas(linha, [bloqueadoPonto, tm[0]]) || arrayHas(linha, [bloqueadoPonto, tm[1]])) {
                                        var _iteradorNormalCompleto27 = true;
                                        var _didIteradorErro27 = false;
                                        var _iteradorErro27 = undefined;

                                        try {
                                            for(var _iterador27 = linha[Symbol.iterator](), _passo27; !(_iteradorNormalCompleto27 = (_passo27.next()).done);
                                            _iteradorNormalCompleto27 = true) {

                                                var valor = _passo27.value 

                                                if (!arrayHas(tm, valor)) {
                                                    this.vencedorPontos = [valor]
                                                }
                                            }
                                        } catch (error) {
                                            _didIteradorErro27 = true 
                                            _iteradorErro27 = error 
                                        } finally {
                                            try {
                                                if (!_iteradorNormalCompleto27 && _iterador27.return) {
                                                    _iterador27.return()
                                                }
                                            } finally {
                                                if (_didIteradorErro27) {
                                                    throw _iteradorErro27
                                                }
                                            }
                                        }
                                    } 
                                }
                            } catch (error) {
                                _didIteradorErro26 = true 
                                _iteradorErro26 = error
                            } finally {
                                try {
                                    if (!_iteradorNormalCompleto26 && _iterador26.return) {
                                        _iterador26.return()
                                    }
                                } finally {
                                    if (_didIteradorErro26) {
                                        throw _iteradorErro26
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        _didIteradorErro25 = true 
                        _iteradorErro25 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto25 && _iterador25.return) {
                                _iterador25.return()
                            }
                        } finally {
                            if (_didIteradorErro25) {
                                throw _iteradorErro25
                            }
                        }
                    }
                    this.jogarProximaRodada = this.facaQuartoMovimento

                    return false 
                    }
                    if (!arrayHas(hm, dado.segundoMovimentoData.vencedorPontos)) {
                        this.facaMover(dado.segundoMovimentoData.vencedorPontos)
                        this.vencedor()

                        return 
                    }
                    var _iteradorNormalCompleto28 = true;
                    var _didIteradorErro28 = false;
                    var _iteradorErro28 = undefined;

                    try {
                        for(var _iterator28 = dado.segundoMovimentoData.terceiroMoverOpcoes[Symbol.iterator](), _passo28; ! (_iteradorNormalCompleto28= (_passo28 = _iterator28.next()).done);
                        _iteradorNormalCompleto28 = true) {
                            var opcao = _passo28.value 
                            var opt = opcao.opt 

                            var _opcao$metas = _slicedToArray(opcao.metas, 2)

                            var metas1 = _opcao$metas[0]
                            var metas2 = _opcao$metas[1]

                            if (!arrayHas(hm, opt) && !arrayHas(hm, metas1) && !arrayHas(hm, metas2)) {
                                this.facaMover(opt)
                                this.vencedorPontos = opcao.metas 
                                this.jogarProximaRodada = this.facaQuintoMovimento

                                return
                            }
                        }
                    } catch (error) {
                        _didIteradorErro28 = true 
                        _iteradorErro28 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto28 && _iterator28.return) {
                                _iterator28.return()
                            }
                        } finally {
                            if (_didIteradorErro28) {
                                throw _iteradorErro28
                            }
                        }
                    }
                    this.facaMover(dado.segundoMovimentoData.humanoVencedorPonto)
                    this.jogarProximaRodada = this.facaQuartoMovimento

                    return false 
                }
            }
        } catch (error) {
            _didIteradorErro23 = true 
            _iteradorErro23 = error 
        } finally {
            try {
                if (!_iteradorNormalCompleto23 && _iterador23.return) {
                    _iterador23.return()
                }
            } finally {
                if (_didIteradorErro23) {
                    throw _iteradorErro23
                }
            }
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

                    if (!arrayHas(hm, ordernadoPonto)) {
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
        if (this.padraoCentral) {
            var _iteradorNormalCompleto30 = true;
            var _didIteradorErro30 = false;
            var _iteradorErro30 = undefined;

            try {
                jogoGridSegundoLoop: for(var _iterador30 = Object.keys(jogoGrid) [Symbol.iterator](), _passo30; !(_iteradorNormalCompleto30 = (_passo30 = _iterador30.next()).done);
                _iteradorNormalCompleto30 = true) {
                    var grade = _passo30.value

                    var _iteradorNormalCompleto31 = true;
                    var _didIteradorErro31 = false;
                    var _iteradorErro31 = undefined;

                    try {
                        for(var _iterador31 = jogoGrid[grade] [Symbol.iterator](), _passo31; !(_iteradorNormalCompleto31 = (_passo31 = _iterador31.next()).done);
                        _iteradorNormalCompleto31 = true) {
                            var linha = _passo31.value 

                            if (arrayHas(linha, 4) && !arrayHas(hm, linha[0]) && !arrayHas(hm, linha[2]) && !arrayHas(tm, linha[0]) && !arrayHas(tm, linha[2])) {
                                var aleatorioPonto = undefined,
                                encontradoPonto = undefined

                                while (!encontradoPonto) {
                                    aleatorioPonto = Math.round(Math.random() * (linha.length - 1))

                                    if (aleatorioPonto !== 1) {
                                        encontradoPonto = true 
                                    }
                                }
                                this.facaMover(linha[aleatorioPonto])
                                this.jogarProximaRodada = this.facaQuintoMovimento
                                this.vencedorPontos = []

                                var vp = linha[aleatorioPonto] === linha[0] ? linha[2] : linha[0]
                                this.vencedorPontos = [vp]

                                return 
                            }
                        }
                    } catch (error) {
                        _didIteradorErro31 = true 
                        _iteradorErro31 = error 
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto31 && _iteradorErro31.return) {
                                _iterador31.return()
                            }
                        } finally {
                            if (_didIteradorErro31) {
                                throw _iteradorErro31
                            }
                        }
                    }
                }
            } catch (error) {
                _didIteradorErro30 = true 
                _iteradorErro30 = error 
            } finally {
                try {
                    if (!_iteradorNormalCompleto30 && _iteradorErro30.return) {
                        _iterador30.return()
                    }
                } finally {
                    if (!_didIteradorErro30) {
                        throw _iteradorErro30
                    }
                }
            }
        }
        // se não houver winpoints, significa que o humano bloqueou o centro
        // ou humano se fez de estúpido
        // tenta bloquearHumanCenterMove
        // se blockHumanCenterMove falhar, encontre uma linha/coluna nesse computador
        // jogou um ponto dele e ainda tem 2 espaços livres
        if (!this.bloqueadoHumanoCentroMover(this.facaQuintoMovimento)) {
            var _iteradorNormalCompleto32 = true;
            var _didIteradorErro32 = false;
            var _iteradorErro32 = undefined;

            try {
                jogoGridLoop: for(var _iterador32 = Object.keys(jogoGrid) [Symbol.iterator](), _passo32; !(_iteradorNormalCompleto32 = (_passo32 = _iterador32.next()).done);
                _iteradorNormalCompleto32 = true) {
                    var grade = _passo32.value 

                    var _iteradorNormalCompleto33 = true;
                    var _didIteradorErro33 = false;
                    var _iteradorErro33 = undefined;

                    try {
                        gradeLinhaLoop: for(var _iterador33 = jogoGrid[grade] [Symbol.iterator](), _passo33; !(_iteradorNormalCompleto33 = (_passo33 = _iterador33.next()).done);
                        _iteradorNormalCompleto33 = true) {
                            var linha = _passo33.valor

                            var jogadosPontos = 0,
                            livrePonto = undefined

                            var _iteradorNormalCompleto34 = true;
                            var _didIteradorErro34 = false;
                            var _iteradorErro34 = undefined;

                            try {
                                linhaLoop: for(var _iterador34 = linha[Symbol.iterator](), _passo34; !(_iteradorNormalCompleto34 = (_passo34 = _iterador34.next()).done);
                                _iteradorNormalCompleto34) {
                                    var valor = _passo34.value 

                                    if (arrayHas(hm, valor)) {
                                        continue gradeLinhaLoop
                                    }
                                    if (arrayHas(computador.moves, valor)) {
                                        jogadosPontos += 1
                                    } else if (livrePonto === undefined) {
                                        livrePonto = valor 
                                    }
                                    if (jogadosPontos > 1) {
                                        continue gradeLinhaLoop
                                    }
                                }
                            } catch (error) {
                                _didIteradorErro34 = true 
                                _iteradorErro34 = error 
                            } finally {
                                try {
                                    if (!_iteradorNormalCompleto34 && _iterador34.return) {
                                        _iterador34.return()
                                    }
                                } finally {
                                    if (_didIteradorErro34) {
                                        throw _iteradorErro34
                                    }
                                }
                            }
                            if (livrePonto !== undefined) {
                                computador.facaMover(livrePonto)
                                this.jogarProximaRodada = this.facaQuintoMovimento

                                break jogoGridLoop
                            }
                        }
                    } catch (error) {
                        _didIteradorErro33 = true 
                        _iteradorErro33 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto33 && _iterador33.return) {
                                _iterador33.return()
                            }
                        } finally {
                            if (_didIteradorErro33) {
                                throw _iteradorErro33
                            }
                        }
                    }
                }
            } catch (error) {
                _didIteradorErro32 = true 
                _iteradorErro32 = error
            } finally {
                try {
                    if (!_iteradorNormalCompleto32 && _iterador32.return) {
                        _iterador32.return()
                    }
                } finally {
                    if (_didIteradorErro32) {
                        throw _iteradorErro32
                    }
                }
            }
        }
        // define o ponto de vitória para o quinto movimento do computador
       // encontra uma linha/colunas que o computador jogou a 2 pontos dela
       var _iteradorNormalCompleto35 = true;
        var _didIteradorErro35 = false;
        var _iteradorErro35 = undefined;

        try {
            jogoGridSegundoLoop: for(var _iterador35 = Object.keys(jogoGrid) [Symbol.iterator](), _passo35; !(_iteradorNormalCompleto35 = (_passo35 = _iterador35.next()).done);
            _iteradorNormalCompleto35 = true) {
                var grade = _passo35.value 

                var _iteradorNormalCompleto36 = true;
                var _didIteradorErro36 = false;
                var _iteradorErro36 = undefined;

                try {
                    gradeLinhaSegundoLoop: for(var _iterador36 = jogoGrid[grade] [Symbol.iterator](), _passo36; !(_iteradorNormalCompleto36 = (_passo36 = _iterador36.next()).done);
                    _iteradorNormalCompleto36 = true) {
                        var linha = _passo36.value 

                        var jogadosPontos = 0,
                        livrePonto = undefined

                        var _iteradorNormalCompleto37 = true;
                        var _didIteradorErro37 = false;
                        var _iteradorErro37 = undefined;

                        try {
                            linhaSegundoLoop: for(var _iterador37 = linha[Symbol.iterator](), _passo37; !(_iteradorNormalCompleto37 = (_passo37 = _iterador37.next()).done);
                            _iteradorNormalCompleto37 = true) {

                                var valor = _passo37.value 

                                if (arrayHas(humano.moves, valor)) {
                                    continue gradeLinhaSegundoLoop
                                }
                                if (arrayHas(this.moves, valor)) {
                                    jogadosPontos += 1
                                } else {
                                    livrePonto = valor
                                }
                            }
                        } catch (error) {
                            _didIteradorErro37 = true
                            _iteradorErro37 = error
                        } finally {
                            try {
                                if(!_iteradorNormalCompleto37 && _iterador37.return) {
                                    _iterador37.return()
                                }
                            } finally {
                                if (_didIteradorErro37) {
                                    throw  _iteradorErro37
                                }
                            }
                        }
                        if (livrePonto !== undefined && jogadosPontos === 2) {
                            this.vencedorPontos = [livrePonto]

                            break jogoGridSegundoLoop
                        }
                    }
                } catch (error) {
                    _didIteradorErro36 = true 
                    _iterador36 = error
                } finally {
                    try {
                        if (!_iteradorNormalCompleto36 && _iterador36.return) {
                            _iterador36.return()
                        }
                    } finally {
                        if (_didIteradorErro36) {
                            throw _iteradorErro36
                        }
                    }
                }
            }
        } catch (error) {
            _didIteradorErro35 = true 
            _iteradorErro35 = error 
        } finally {
            try {
                if (!_iteradorNormalCompleto35 && _iterador35.return) {
                    _iterador35.return()
                }
            } finally {
                if (_didIteradorErro35) {
                    throw _iteradorErro35
                }
            }
        }
    },
    facaQuintoMovimento: function facaQuintoMovimento() {
        if (this.vencedorPontos) {
            var _iteradorNormalCompleto38 = true;
            var _didIteradorErro38 = false;
            var _iteradorErro38 = undefined;

            try {
                for(var _iterador38 = this.vencedorPontos[Symbol.iterator](), _passo38; !(_iteradorNormalCompleto38 = (_passo38 = _iterador38.next()).done);
                _iteradorNormalCompleto38 = true) {
                    var ordernadoPonto = _passo38.value 

                    if (!arrayHas(humano.moves, ordernadoPonto)) {
                        this.facaMover(ordernadoPonto)
                        this.vencedor()

                        return
                    }
                }
            } catch (error) {
                _didIteradorErro38 = true 
                _iteradorErro38 = error 
            } finally {
                try {
                    if (!_iteradorNormalCompleto38 && _iterador38.return) {
                        _iterador38.return()
                    }
                } finally {
                    if (_didIteradorErro38) {
                        throw _iteradorErro38
                    }
                }
            }
        }
        if (arrayHas(humano.moves, computador.vencedorPontos)) {
            var _iteradorNormalCompleto39 = true;
            var _didIteradorErro39 = false;
            var _iteradorErro39 = undefined;

            try {
                for(var _iterador39 = Object.keys(jogoGrid) [Symbol.iterator](), _passo39; !(_iteradorNormalCompleto39 = (_passo39 = _iterador39.next()).done);
                _iteradorNormalCompleto39 = true) {
                    var grade = _passo39.value 

                    var _iteradorNormalCompleto40 = true;
                    var _didIteradorErro40 = false;
                    var _iteradorErro40 = undefined;

                    try {
                        for(var _iterador40 = jogoGrid[grade] [Symbol.iterator](), _passo40; !(_iteradorNormalCompleto40 = (_passo40 = _iterador40.next()).done);
                        _iteradorNormalCompleto40 = true) {
                            var linha = _passo40.value 

                            var _iteradorNormalCompleto41 = true;
                            var _didIteradorErro41 = false;
                            var _iteradorErro41 = undefined;

                            try {
                                for(var _iterador41 = linha[Symbol.iterator](), _passo41; !(_iteradorNormalCompleto41 = (_passo41 = _iterador41.next()).done);
                                _iteradorNormalCompleto41 = true) {
                                    var valor = _passo41.value 

                                    if (!arrayHas(humano.moves, valor) && !arrayHas(computador.moves, valor)) {
                                        computador.facaMover(valor)
                                        reiniciarJogo()
                                        return false
                                    }
                                }
                            } catch (error) {
                                _didIteradorErro41 = true 
                                _iteradorErro41 = error 
                            } finally {
                                try {
                                    if (!_iteradorNormalCompleto41 && _iterador41.return) {
                                        _iterador41.return()
                                    }
                                } finally {
                                    if (_didIteradorErro41) {
                                        throw _iteradorErro41
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        _didIteradorErro40 = true 
                        _iteradorErro40 = error
                    } finally {
                        try {
                            if (!_iteradorNormalCompleto40 && _iterador40.return) {
                                _iterador40.return()
                            }
                        } finally {
                            if (_didIteradorErro40) {
                                throw _iteradorErro40
                            }
                        }
                    }
                }
            } catch (error) {
                _didIteradorErro39 = true 
                _iteradorErro39 = error 
            } finally {
                try {
                    if (!_iteradorNormalCompleto38 && _iterador39.return) {
                        _iterador39.return()
                    } 
                } finally {
                    if (_didIteradorErro39) {
                        throw _iteradorErro39
                    }
                }
            }
        }
        computador.facaMover(computador.vencedorPontos)
        computador.vencedor()
    },
    bloqueadoHumanoCentroMover: function bloqueadoHumanoCentroMover(proximoRodada){
        //humano jogou a caixa central
       //determina o plano vencedor do humano e faz o próximo movimento do computador
       var hm = humano.moves,
       cm = this.moves,
       ultimoJogo = jogoPontos.length - 1


       var _iteradorNormalCompleto42 = true;
       var _didIteradorErro42 = false;
       var _iteradorErro42 = undefined;

       try {
        for(var _iterador42 = jogoPontos[Symbol.iterator](), _passo42; !(_iteradorNormalCompleto42 = (_passo42 = _iterador42.next()).done);
        _iteradorNormalCompleto42 = true) {
                var jogo = _passo42.value 

                if (jogo !== 4 && arrayHas(hm, jogo) && !arrayHas(cm, ultimoJogo)) {
                    
                    this.facaMover(ultimoJogo)

                    if (proximoRodada) {
                        this.jogarProximaRodada = proximoRodada
                    }
                    return ultimoJogo
                }
                ultimoJogo -= 1
            }
        } catch (error) {
                _didIteradorErro42 = true
                _iteradorErro42 = error 
        } finally {
                try {
                    if (!_iteradorNormalCompleto42 && _iterador42.return) {
                        _iterador42.return()
                }
                } finally {
                    if (_didIteradorErro42) {
                        throw _iteradorErro42
                    }
                }
        }
       return false
    },
    vencedor: function vencedor() {
        console.log('computador ganhou!!!');

        var vencedorPontos

        var _iteradorNormalCompleto43 = true;
        var _didIteradorErro43 = false;
        var _iteradorErro43 = undefined;

        try {
            for(var _iterador43 = Object.keys(jogoGrid) [Symbol.iterator](), _passo43; !(_iteradorNormalCompleto43 = (_passo43 = _iterador43.next()).done);
            _iteradorNormalCompleto43 = true) {
                var grade = _passo43.value 

                var _iteradorNormalCompleto44 = true;
                var _didIteradorErro44 = false;
                var _iteradorErro44 = undefined;

                try {
                    gradeLinhaLoop: for(var _iterador44 = jogoGrid[grade] [Symbol.iterator](), _passo44; !(_iteradorNormalCompleto44 = (_passo44 = _iterador44.next()).done);
                    _iteradorNormalCompleto44 = true) {
                        var linha = _passo44.value 

                        var _iteradorNormalCompleto45 = true;
                        var _didIteradorErro45 = false;
                        var _iteradorErro45 = undefined;

                        try {
                            for(var _iterador45 = linha[Symbol.iterator](), _passo45; !(_iteradorNormalCompleto45 = (_passo45 = _iterador45.next()).done);
                            _iteradorNormalCompleto45 = true) {
                                var valor = _passo45.value 

                                if (!arrayHas(this.moves, valor)) {
                                    continue gradeLinhaLoop
                                }
                            }
                        } catch (error) {
                            _didIteradorErro45 = true 
                            _iteradorErro45 = error
                        } finally {
                            try {
                                if (!_iteradorNormalCompleto45 && _iterador45.return) {
                                    _iterador45.return()
                                }
                            } finally {
                                if (_didIteradorErro45) {
                                    throw _iteradorErro45
                                }
                            }
                        }
                        vencedorPontos = linha 
                    }
                } catch (error) {
                    _didIteradorErro44 = true 
                    _iteradorErro44 = error
                } finally {
                    try {
                        if (!_iteradorNormalCompleto44 && _iterador44.return) {
                            _iterador44.return()
                        }
                    } finally {
                        if (_didIteradorErro44) {
                            throw _iteradorErro44
                        }
                    }
                }
            }
        } catch (error) {
            _didIteradorErro43 = true 
            _iteradorErro43 = error
        } finally {
            try {
                if (!_iteradorNormalCompleto43 && _iterador43.return) {
                    _iterador43.return()
                }
            } finally {
                if (_didIteradorErro43) {
                    throw _iteradorErro43
                }
            }
        }
        var _iteradorNormalCompleto46 = true;
        var _didIteradorErro46 = false;
        var _iteradorErro46 = undefined;

        try {
            for(var _iterador46 = vencedorPontos[Symbol.iterator](), _passo46; !(_iteradorNormalCompleto46 = (_passo46 = _iterador46.next()).done);
            _iteradorNormalCompleto46 = true) {
                var ponto = _passo46.value 

                $('#' + ponto).addClass('vencedor')
            }
        } catch (error) {
            _didIteradorErro46 = true 
            _iteradorErro46 = error
        } finally {
            try {
                if (!_iteradorNormalCompleto46 && _iterador46.return) {
                    _iterador46.return()
                }
            } finally {
                if (_didIteradorErro46) {
                    throw _iteradorErro46
                }
            }
        }
        reiniciarJogo()
    },
    facaMover: function facaMover(mover) {
        this.moves.push(mover)

        $(jQMap.$jogarCaixa[mover]).children('.simbolo').text(configMap.computadorSimbolo || 'O')
    }
}
function reiniciarJogo() {
    setTimeout(() => {
        humano.moves.length = 0
        computador.moves.length = 0
        computador.vencedorPontos = undefined
        jQMap.$jogarCaixa.removeClass('vencedor').children('.simbolo').text('')
        computador.facaPrimeiroMovimento

    }, 2000);
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
        computador.facaPrimeiroMovimento()
        jQMap.$jogarCaixa.on('click', humano.jogar)
    })

    // iniciar jogo
    $('.app-modal').modal('show');
}
$(initApp)