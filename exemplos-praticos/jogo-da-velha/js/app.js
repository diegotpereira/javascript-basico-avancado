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
    moves: [],
    iniciarPontos: [0, 2, 4, 6, 8],
    jogarProximaRodada: undefined,
    centerParttern: false,
    fazerPrimeiroMovimento: function fazerPrimeiroMovimento() {
        var mover 

        mover = this.iniciarPontos[Math.random() * (this.iniciarPontos.length - 1)]

        this.centerParttern = mover === 4 ? true : false
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