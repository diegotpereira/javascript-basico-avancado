(function() {
    var questoes = [
    {
        questao: "Quanto é 2 * 5 ?",
        escolhas: [2, 5, 10, 15, 20],
        respostaCorreta: 2
    },
    {
        questao: "Quanto é 3 * 6 ?",
        escolhas: [3, 6, 9, 12, 18],
        respostaCorreta: 4
    },
    {
        questao: "Quanto é 8 * 9 ?",
        escolhas: [72, 99, 108, 134, 156],
        respostaCorreta: 0
    },
    {
        questao: "Quanto é 1 * 7 ?",
        escolhas: [4, 5, 6, 7, 8],
        respostaCorreta: 3
    },
    {
        questao: "Quanto é 8 * 8 ?",
        escolhas: [20, 30, 40, 50, 64],
        respostaCorreta: 4
    }
  ]
  var contarQuestoes = 0
  var selecoes = []
  var quiz = $('#quiz')

  // Exibir pergunta inicial
  exibirProxima()

  // Clique no manipulador para o botão 'próximo'
  $('#proximo').on('click', function(e) {
    e.preventDefault();
    // Suspende o listener de cliques durante a animação de fade
    if (quiz.is(':animated')) {
        return false
    }
    escolha()

    // Se não houver seleção de usuário, o progresso é interrompido
    if (isNaN(selecoes[contarQuestoes])) {
        alert('Por favor marque uma seleção')
    } else {
        contarQuestoes++
        exibirProxima()
    }
  })

  // Clique no manipulador para o botão 'anterior'
  $('#anterior').on('click', function(e) {
    e.preventDefault()

    if (quiz.is(':animated')) {
        
        return false 
    }
    escolha()
    contarQuestoes--
    exibirProxima()
  })
  
  // Clique no manipulador para o botão 'Iniciar de novo'
  $('#iniciar').on('click', function(e) {
    e.preventDefault()

    if (quiz.is(':animated')) {
        

        return false 
    }
    contarQuestoes = 0
    selecoes = []
    exibirProxima()

    $('#iniciar').hide()
  })
  // Anima botões ao passar o mouse
  $('.button').on('mouseenter', function() {
    $(this).addClass('active');
  })

  $('.button').on('mouseleave', function() {
    $(this).removeClass('active');
  })
  
  // Cria e retorna a div que contém as perguntas e
  // as seleções de resposta
    function criarElementoQuestao(index) {
        var questaoEl = $('<div>', {
            id: 'questao'
        })
        var cabecalho = $('<h2> Questão ' + (index + 1) + ':</h2>')
        questaoEl.append(cabecalho)

        var questao = $('<p>').append(questoes[index].questao)
        questaoEl.append(questao)

        var radioBotoes = criarRadios(index)
        questaoEl.append(radioBotoes)

        return questaoEl
    }

  // Cria uma lista das opções de resposta como entradas de rádio
  function criarRadios(index) {
    var radioLista = $('<ul>')
    var item 
    var entrada = ''

    for(var i = 0; i < questoes[index].escolhas.length; i++) {
        item = $('<li>')

        entrada = '<input type="radio" name="resposta" value=' + i + '/>'
        entrada += questoes[index].escolhas[i]
        
        item.append(entrada)
        radioLista.append(item)
    }
    return radioLista
  }

  // Lê a seleção do usuário e envia o valor para um array
  function escolha() {
    selecoes[contarQuestoes] = +$('entrada[name="resposta"]:checked').val()
  }
  // Exibe o próximo elemento solicitado
  function exibirProxima() {
    quiz.fadeOut(function() {
        $('#questao').remove()

        if (contarQuestoes < questoes.length) {
            
            var proximaQuestao = criarElementoQuestao(contarQuestoes)
            quiz.append(proximaQuestao).fadeIn()

            if (!(isNaN(selecoes[contarQuestoes]))) {
                $('entrada[value= '+selecoes[contarQuestoes] +']').prop('checked', true)
            }
            // Controla a exibição do botão 'anterior'
            if (contarQuestoes === 1) {
                $('#anterior').show()
            
            } else if (contarQuestoes === 0) {
                $('#anterior').hide()
                $('#proximo').show()
            }
        } else {
            var pontuacaoEl = exibirPontuacao()
            quiz.append(pontuacaoEl).fadeIn()
            $('#proximo').hide()
            $('#anterior').hide()
            $('#iniciar').show()
        }
    })
  }
  // Calcula a pontuação e retorna um elemento de parágrafo a ser exibido
  function exibirPontuacao() {
    var pontuacao = $('<p>', {id: 'questao'})

    var numCorreto = 0

    for(index = 0; index < selecoes.length; index++) {
        if (selecoes[index] === questoes[index].respostaCorreta) {
            numCorreto++
        }
    }
    pontuacao.append('Você tem ' + numCorreto + ' perguntas fora de ' + questoes.length+ ' certas')

    return pontuacao
  }
})()