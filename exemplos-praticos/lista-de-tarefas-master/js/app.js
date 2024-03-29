(function() {
    'use-strict'

    var tarefa = {
        iniciar: function() {
            this.cacheDom()
            this.bindEventos()
            this.eventoTarefaLista()
        },
        cacheDom: function() {
            this.tarefaEntrada = document.getElementById('input-tarefa')
            this.addBtn = document.getElementById('add-tarefa-btn')
            this.tarefaLista = document.getElementById('tarefas')
            this.tarefaListaFilho = this.tarefaLista.children
            this.erroMensagem = document.getElementById('erro')
        },
        bindEventos: function() {
            this.addBtn.onclick = this.addTarefa.bind(this)
            this.tarefaEntrada.onkeypress = this.entradaTecla.bind(this)
        },
        eventoTarefaLista: function() {
            var i, chkBox, delBtn;

            // LIGAÇÃO DE EVENTOS DE CLIQUE A ELEMENTOS
            for(i = 0; i < this.tarefaListaFilho.length; i+= 1) {
                // ADICIONAR EVENTO DE CLIQUE ÀS CAIXAS DE VERIFICAÇÃO
                chkBox = this.tarefaListaFilho[i].getElementsByTagName('input')[0]
                chkBox.onclick = this.tarefaCompleta.bind(this, this.tarefaListaFilho[i], chkBox)

                // ADICIONAR EVENTO DE CLIQUE PARA APAGAR BOTÃO
                delBtn = this.tarefaListaFilho[i].getElementsByTagName('button')[0]
                delBtn.onclick = this.deletarTarefa.bind(this, i)
            }
        },
        renderizar: function() {
            var tarefaLi, tarefaCheckBox, tarefaVal, tarefaBtn, tarefaIconeLixeira

            // BUILD HTML
            tarefaLi = document.createElement('li')
            tarefaLi.setAttribute('class', 'tarefa')

            // CHECKBOX
            tarefaCheckBox = document.createElement('input')
            tarefaCheckBox.setAttribute('type', 'checkbox')

            // USUARIO TAREFA
            tarefaVal = document.createTextNode(this.tarefaEntrada.value)

            // BOTAO DELETAR
            tarefaBtn = document.createElement('button')

            // ÍCONE LIXO
            tarefaIconeLixeira = document.createElement('i')
            tarefaIconeLixeira.setAttribute('class', 'fa fa-trash')

            // INSERIR ICONE DE LIXEIRA NO BOTAO
            tarefaBtn.appendChild(tarefaIconeLixeira)

            // ANEXAR ELEMENTOS A TAREFALI
            tarefaLi.appendChild(tarefaCheckBox)
            tarefaLi.appendChild(tarefaVal)
            tarefaLi.appendChild(tarefaBtn)

            this.tarefaLista.appendChild(tarefaLi)
        },
        tarefaCompleta: function(i, chkBox) {

            if (chkBox.checked) {
                i.className = 'tarefa completa'

            } else {
                this.tarefaIncompleta(i)
            }
        },
        tarefaIncompleta: function() {
            i.className = 'tarefa'
        },
        entradaTecla: function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                
                this.addTarefa()
            }
        },
        addTarefa: function() {
            console.log("Tarefa adicionar");
            var valor = this.tarefaEntrada.value 
            this.erroMensagem.style.display = 'none'

            if (valor === "") {
                this.erro()

            } else {

                this.renderizar()
                this.tarefaEntrada.value = ""
                this.eventoTarefaLista()
            }
        },
        deletarTarefa: function(i) {
            this.tarefaLista.children[i].remove()
            this.eventoTarefaLista()
        },
        erro: function() {
            this.erroMensagem.style.display = 'block'
        }
    }
    tarefa.iniciar()
}())