(function() {
    'use strict';

    var tarefas = {
        iniciar: function() {
            this.cacheDom()
            this.bindEvents()
            this.evalTarefaLista()
        },
        cacheDom: function() {
            this.tarefaEntrada = document.querySelector('#entrada-tarefa')
            this.addTarefaBtn = document.querySelector('#add-tarefa-btn')
            this.tarefaLista = document.querySelector('#listaTarefa')
            this.tarefaListaChildren = this.tarefaLista.children 
            this.erroMsg = document.querySelector('#erros')
        },
        bindEvents: function() {
            this.addTarefaBtn.onclick = this.addTarefa.bind(this)
            this.tarefaEntrada.onkeypress = this.teclaEnter.bind(this)
        },
        evalTarefaLista: function() {
            var index, checkbox, delBtn
            // LIGAÇÃO DE EVENTOS DE CLIQUE A ELEMENTOS
            for(index = 0; index < this.tarefaListaChildren.length; index += 1) {
                // ADICIONAR EVENTO DE CLIQUE ÀS CAIXAS DE VERIFICAÇÃO
                checkbox = this.tarefaListaChildren[index].getElementsByTagName("input")[0]
                checkbox.onclick = this.completaTarefa.bind(this, this.tarefaListaChildren[index], checkbox)

                // ADICIONAR EVENTO DE CLIQUE PARA APAGAR BOTÃO
                delBtn = this.tarefaListaChildren[index].getElementsByTagName("button")[0]
                delBtn.onclick = this.delTarefa.bind(this, index)
            }
        },
        renderizar: function() {
            var tarefaLi, tarefaCheckbox, tarefaVal, tarefaBtn, tarefaLixo

            tarefaLi = document.createElement('li')
            tarefaLi.setAttribute('class', 'tarefa')

            // Checkbox 
            tarefaCheckbox = document.createElement('input')
            tarefaCheckbox.setAttribute('type', 'checkbox')

            // Usuario Tarefa
            tarefaVal = document.createTextNode(this.tarefaEntrada.value)

            // botão deletar
            tarefaBtn = document.createElement('button')

            // Icone Lixo
            tarefaLixo = document.createElement('i')
            tarefaLixo.setAttribute('class', 'fa fa-trash')

            // INSERIR LIXEIRA NO BOTÃO
            tarefaBtn.appendChild(tarefaLixo)

            // ANEXAR ELEMENTOS A TAREFALI
            tarefaLi.appendChild(tarefaCheckbox)
            tarefaLi.appendChild(tarefaVal)
            tarefaLi.appendChild(tarefaBtn)

            // ADICIONAR TAREFA À LISTA DE TAREFAS
            this.tarefaLista.appendChild(tarefaLi)
        },
        completaTarefa: function(index, checkbox) {
            if (checkbox.checked) {
                index.className = "tarefa completada"
            } else {
                this.incompletaTarefa(index)
            }
        },
        incompletaTarefa: function(index) {
            index.className = "tarefa"
        },
        teclaEnter: function(e) {
            if(e.keyCode === 13 || e.which === 13) {
                this.addTarefa()
            }
        },
        addTarefa: function() {
            var valor = this.tarefaEntrada.value 

            this.erroMsg.style.display = "none"

            if (valor === "") {
                this.erro()
            } else {
                this.renderizar()
                this.tarefaLista.value = ""
                this.evalTarefaLista()
            }
        },
        delTarefa: function(index) {
            this.tarefaLista.children[index].remove()
            this.evalTarefaLista()
        },
        erro: function() {
            this.erroMsg.style.display = "block"
        }
    }
    tarefas.iniciar()
}())