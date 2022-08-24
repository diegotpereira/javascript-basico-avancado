(function($) {

    console.log('iniciando 1...');
    $.Loja = function(elemento) {
        this.$elemento = $(elemento)
        this.iniciar()
    }
    $.Loja.prototype = {
        iniciar: function() {

            // propriedades

            this.carrinhoPrefix = 'Furniture-'
            this.carrinhoNome = this.carrinhoPrefix + 'cart'
            this.total =  this.carrinhoPrefix
            this.storage = sessionStorage
            



            this.$formAddNoCarrinho = this.$elemento.find('form.add-no-carrinho')
            this.$formCarrinho = this.$elemento.find('#shopping-cart')
            this.$verificarCarrinho = this.$elemento.find('#verificar-carrinho')
            this.$subTotal = this.$elemento.find('#stotal')
            this.$comprasCarrinhoAcoes =  this.$elemento.find('#shopping-cart-actions')
            this.$atualizarCarrinhoBtn = this.$comprasCarrinhoAcoes.find('#update-cart')
            this.$vazioCarrinhoBtn = this.$comprasCarrinhoAcoes.find('#carrinho-vazio')
            this.$usuarioDetalhes = this.$elemento.find('#usuario-detalhes-conteudo')
            this.$verificarPedidoFormulario = this.$elemento.find('#verificar-pedido-formulario')
            this.$envio = this.$elemento.find('#senvio')
            this.$paypalForm = this.$elemento.find('#paypalForm')

            this.currency = "R&#36;";
            this.currencyString = 'PHP'

            // chamando metodos
            this.criarCarrinho()
            this.lidarFormAddCarrinho()
            this.exibirCarrinho()
            this.atualizarCarrinho()
            this.vazioCarrinho()
            this.deletarProduto()
            this.exibirDetalhesUsuario()
            this.lidarFormularioPedido()
            this.preencherFormularioPayPal()
        },
        criarCarrinho: function() {

            if (this.storage.getItem(this.carrinhoNome) == null) {
                
                var carrinho = {}
                carrinho.itens = []


                this.storage.setItem(this.carrinhoNome, this._toJSONString(carrinho))
                this.storage.setItem(this.taxasEnvio, '0')
                this.storage.setItem(this.total, '0')
            }
        },
        lidarFormAddCarrinho: function() {
            var self = this
            self.$formAddNoCarrinho.each(function() {

                console.log("Iniciando... ");

                var $form = $(this)
                var $produto = $form.parent()
                var preco = self._convertString($produto.data('preco'))
                var nome = $produto.data('nome')

                $form.on('submit', function() {

                    console.log("Iniciando enviar... ");

                    var qtd = self._convertString($form.find('.qtd').val())
                    var subTotal = qtd  * preco
                    var total = self._convertString(self.storage.getItem(self.total))
                    var sTotal = total + subTotal

                    self.storage.setItem(self.total, sTotal)

                    self._addNoCarrinho({
                        produto: nome,
                        preco: preco,
                        qtd: qtd
                    })

                    var envio = self._convertString(self.storage.getItem(self.taxasEnvio))
                    var taxasEnvio = self._calcularEnvio(qtd)
                    var totalEnvio = envio + taxasEnvio

                    self.storage.setItem(self.taxasEnvio, totalEnvio)
                })
            })
        },

        exibirCarrinho: function() {

            console.log("exibindo carrinho...");

            if (this.$formCarrinho.length) {
                
                var carrinho = this._toJSONOBject(this.storage.getItem(this.carrinhoNome))
                var itens = carrinho.itens 
                var $tabelaCarrinho = this.$formCarrinho.find('.shopping-cart')
                var $tableCarrinhoCorpo = $tabelaCarrinho.find('tbody')

                if (itens.length == 0) {
                    
                    $tableCarrinhoCorpo.html("")

                } else {

                    for(var i = 0; i < itens.length; ++i) {

                        console.log(i);

                        var item = itens[i]
                        var produto = item.produto 
                        var preco = this.currency + " " + item.preco
                        var qtd = item.qtd

                        var html = "<tr><td class='pnome'>" + produto + "</td>" + "<td class='pqtd'><input type='text' value='" + qtd + "' class='qtd'/></td>"
                        
                            html += "<td class='ppreco'>" + preco + "</td><td class='pdeletar'><a href='' data-produto='" + produto + "'>&times;</a></td></tr>"
                            

                        $tableCarrinhoCorpo.html($tableCarrinhoCorpo.html() + html)
                    }
                }
                if (itens.length == 0) {
                    this.$subTotal[0].innerHTML = this.currency + " " + 0.00

                } else {

                    var total = this.storage.getItem(this.total)
                    this.$subTotal[0].innerHTML = this.currency + " " + total
                }
            } else if (this.$verificarCarrinho.length) {
                
                var verificarCarrinho = this._toJSONOBject(this.storage.getItem(this.carrinhoNome))
                var carrinhoItens = verificarCarrinho.itens 
                var $carrinhoCorpo = this.$verificarCarrinho.find('tbody')

                if (carrinhoItens.length > 0) {
                    
                    for(var j = 0; j < carrinhoItens.length; ++j) {

                        var carrinhoItem = carrinhoItens[j]
                        var carrinhoProduto = carrinhoItem.produto 
                        var carrinhoPreco = this.currency + " " + carrinhoItem.preco
                        var carrinhoQtd = carrinhoItem.qtd

                        var carrinhoHTML = "<tr><td class='pnome'>" + carrinhoProduto + "</td>" + "<td class='pqtd'>" + carrinhoQtd + "</td>" + "<td class='ppreco'>" + carrinhoPreco + "</td></tr>";

                        $carrinhoCorpo.html($carrinhoCorpo.html() + carrinhoHTML) 
                    }
                } else {
                    $carrinhoCorpo.html(" ")
                }

                if (carrinhoItens.length > 0) {
                    
                    var carrinhoTotal = this.storage.getItem(this.total)
                    var carrinhoEnvio = this.storage.getItem( this.taxasEnvio );
					var subTot = this._convertString( carrinhoTotal ) + this._convertString( carrinhoEnvio );
				
					this.$subTotal[0].innerHTML = this.currency + " " + this._convertNumber( subTot );
					this.$envio[0].innerHTML = this.currency + " " + carrinhoEnvio;

                } else {

                    this.$subTotal[0].innerHTML = this.currency + " " + 0.00;
					this.$envio[0].innerHTML = this.currency + " " + 0.00;	
                }
            }
        },
       
        atualizarCarrinho: function() {

            var self = this
            if (self.$atualizarCarrinhoBtn.length) {
                
                self.$atualizarCarrinhoBtn.on('click', function() {

                    var $linhas = self.$formCarrinho.find('tbody tr')
                    var carrinho = self.storage.getItem(self.carrinhoNome)

                    var atualizandoTotal = 0
                    var totalQtd = 0
                    var atualizandoTotal = {}
                    atualizandoTotal.itens = []


                    $linhas.each(function() {

                        var $linha = $(this)
                        var pnome = $.trim($linha.find('pnome').text())
                        var pqtd = self._convertString($linha.find('.pqtd > .qtd').val())
                        var ppreco = self._convertString(self._extrairPreco($linha.find('.ppreco')))

                        var carrinhoObj = {
                            produto: pnome,
                            preco: ppreco,
                            qtd: pqtd
                        }

                        atualizarCarrinho.itens.push(carrinhoObj)

                        var subTotal = pqtd * ppreco
                        atualizandoTotal += subTotal
                        totalQtd += pqtd
                        
                    })
                    self.storage.setItem(self.total, self._convertNumber(atualizandoTotal))
                    self.storage.setItem(self.taxasEnvio, self._convertNumber(self._calcularEnvio(totalQtd)))
                    self.storage.setItem(self.carrinhoNome, self._toJSONString(atualizarCarrinho))
                })
            }
        },
        deletarProduto: function() {

            var self = this 

            if (self.$formCarrinho.length) {
                
                var carrinho = this._toJSONOBject(this.storage.getItem(this.carrinhoNome))
                var itens = carrinho.itens 

                $(document).on('click', '.pdeletar a', function(e) {

                    e.preventDefault()

                    var produtoNome = $(this).data('produto')
                    var novoItens = []

                    for(var i = 0; i < itens.length; ++i) {

                        var item = itens[i]
                        var produto = item.produto 

                        if (produto == produtoNome) {
                            
                            itens.splice(i, 1)
                        }
                    }

                    novoItens = itens 

                    var atualizarCarrinho = {}

                    atualizarCarrinho.itens = novoItens

                    var atualizandoTotal = 0
                    var totalQtd = 0

                    if (novoItens.length == 0) {
                        
                        atualizandoTotal = 0
                        totalQtd = 0

                    } else {

                        for(var j = 0; j < novoItens.length; i++) {

                            var prod = novoItens[j]
                            var sub = prod.preco * prod.qtd

                            atualizandoTotal += sub 
                            totalQtd += prod.qtd
                        }
                    }
                    self.storage.setItem(self.total, self._convertNumber(atualizandoTotal))
                    self.storage.setItem(self.taxasEnvio, self._convertNumber(self._calcularEnvio(totalQtd)))

                    self.storage.setItem(self.carrinhoNome, self._toJSONString(atualizandoTotal))

                    $(this).parents('tr').remove()
                    self.$subTotal[0].innerHTML = self.currency + " " + self.storage.getItem(self.total)
                })
            }
        },
        vazioCarrinho: function() {

            var self = this 

            if (self.$vazioCarrinhoBtn.length) {
                
                self.$vazioCarrinhoBtn.on('click', function() {

                    self._vazioCarrinho()
                })
            }
        },
        exibirDetalhesUsuario: function() {

            if (this.$usuarioDetalhes.length) {
                
                if (this.storage.getItem('')) {
                    
                }
            }
        },
        lidarFormularioPedido: function() {

            var self = this

            if (self.$verificarPedidoFormulario.length) {
                var $mesmoQueFaturamento = $('#mesmo-que-faturamento')
                $mesmoQueFaturamento.on('change', function() {

                    var $verificar = $(this)

                    if ($verificar.prop('checked')) {
                        
                        $('#fieldset-envio').slideUp('normal')
                         
                    } else {
                        $('#fieldset-envio').slideDown('normal')
                    }
                })
                self.$verificarPedidoFormulario.on('submit', function() {

                    var $form = $(this)
                    var valido = self._validarFormulario($form)

                    if (!valido) {
                        
                        return valido

                    } else {

                        self._salvarFormularioDado($form)
                    }
                })
            }
        },
        preencherFormularioPayPal: function() {
            
            var self = this

            if (self.$paypalForm.length) {
                
                var $form = self.$paypalForm
                var carrinho = self._toJSONOBject(self.storage.getItem(self.carrinhoNome))
                var envio = self.storage.getItem(self.taxasEnvio)
                var numEnvio = self._convertString(envio)
                var carrinhoItens = carrinho.itens
                var singEnvio = Math.floor(numEnvio / carrinhoItens.length)

                $form.attr('action', self.paypalURL)
                $form.find("input[name='business']").val(self.paypalBusinessEmail)
                $form.find("input[name='currency_code']").val(self.paypalCurrency)

                for(var i = 0; i < carrinhoItens.length; ++i) {

                    var carrinhoItem = carrinhoItens[i]
                    var n = i + 1
                    var nome = carrinhoItem.produto 
                    var preco = carrinhoItem.preco 
                    var qtd = carrinhoItem.qtd 

                    $("<div/>").html("<input type='hidden' name='quantidade' " + n + "' value='" + qtd + "'/>").
                    inserirAntes('#paypal-btn')

                    $("<div/>").html("<input type='hidden' name='item_nome_" + n + "' value='" + nome + "'/>").
                    inserirAntes('#paypal-btn')

                    $( "<div/>" ).html( "<input type='hidden' name='item_numero_" + n + "' value='SKU " + name + "'/>" ).
					insertBefore( "#paypal-btn" );

                    $( "<div/>" ).html( "<input type='hidden' name='quantia_" + n + "' value='" + self._formatNumber( price, 2 ) + "'/>" ).
					insertBefore( "#paypal-btn" );

                    $( "<div/>" ).html( "<input type='hidden' name='envio_" + n + "' value='" + self._formatNumber( singEnvio, 2 ) + "'/>" ).
					insertBefore( "#paypal-btn" );
                }
            }
        },
        _addNoCarrinho: function(valor) {

            console.log("inciando add carrinho");

            var carrinho = this.storage.getItem(this.carrinhoNome)

            var carrinhoObjeto = this._toJSONOBject(carrinho)
            var carrinhoCopia = carrinhoObjeto
            var itens = carrinhoCopia.itens

            itens.push(valor)

            this.storage.setItem(this.carrinhoNome, this._toJSONString(carrinhoCopia))
        },
        _convertString: function(numStr) {
            var num 

            if(/^[-+]?[0-9]+\.[0-9]+$/.test(numStr)) {
                num = parseFloat(numStr)


            } else if (/^\d+$/.test(numStr)) {
                num = parseFloat(numStr, 10)

            } else {
                num = Number(numStr)
            }

            if (!isNaN(num)) {
                return num

            } else {
                console.warn(numStr + ' não pode ser convertido em um número')

                return false
            }
        },
        _convertNumber: function(n) {

            var str = n.toString()

            return str
        },
        _toJSONString: function(obj) {

            var str = JSON.stringify(obj)

            return str
        },
        _toJSONOBject: function(str) {

            var obj = JSON.parse(str)

            return obj
        },
        _calcularEnvio: function(qtd) {

            var envio = 0

            if (qtd >= 6) {
                
                envio = 10
            }
            if (qtd >= 12 && qtd <= 30) {
                
                envio = 20
            }
            
            if (qtd >= 30 && qtd <= 60) {
                
                envio = 30
            }

            if (qtd > 69) {
                
                envio = 0
            }

            return envio
        },

        _extrairPreco: function(elemento) {

            var self = this
            var texto = elemento.text()
            var preco = texto.replace(self.currencyString, "").replace("", "")

            return preco
        },

        _vazioCarrinho: function() {

            this.storage.clear()
        },
        _validarFormulario: function(form) {

            var self = this 
            var campos = self.requiredFields
            var $conjuntoVisivel = form.find('fieldset:visible')

            form.find('.message').remove()

            $conjuntoVisivel.each(function() {

                $(this).find(':input').each(function() {

                    var $entrada = $(this)
                    var tipo = $entrada.data('type')
                    var msg = $entrada.data('message')

                    if (tipo === 'string') {
                        if ($entrada.val() == campos.str.value) {
                            
                            $("<span class='message'/>").text(msg)
                            inserirAntes($entrada)

                            valido = false
                        }
                    } else {
                        if (!campos.expression.value.test($entrada.val())) {
                            inserirAntes($entrada)

                            valido = false
                        }
                    }
                })

            })
            return valido
        },
        _salvarFormularioDado: function(form) {
            var self = this
            var $conjuntoVisivel = form.find('fieldset:visible')

            $conjuntoVisivel.each(function() {

                var $set = $(this)

                if ($set.is('#fieldset-cobranca')) {
                    
                    var nome = $('#nome', $set).val()
                    var email = $('#email', $set).val()
                    var cidade = $('#cidade', $set).val()
                    var endereco = $('#endereco', $set).val()
                    var cep = $('#cep', $set).val()
                    var regiao = $('#regiao', $set).val()

                    self.storage.setItem('cobranca-nome', nome)
                    self.storage.setItem('cobranca-email', email)
                    self.storage.setItem('cobranca-cidade', cidade)
                    self.storage.setItem('cobranca-endereco', endereco)
                    self.storage.setItem('cobranca-cep', cep)
                    self.storage.setItem('cobranca-regiao', regiao)

                } else {

                    var sNome  = $('#snome', $set).val()
                    var sEmail = $('#semail', $set).val()
                    var sCidade = $('#scidade', $set).val()
                    var sEndereco = $('#sendereco', $set).val()
                    var sCep = $('#scep', $set).val()
                    var sRegiao = $('#sregiao', $set).val()

                    self.storage.setItem('cobranca-nome', sNome)
                    self.storage.setItem('cobranca-email', sEmail)
                    self.storage.setItem('cobranca-cidade', sCidade)
                    self.storage.setItem('cobranca-endereco', sEndereco)
                    self.storage.setItem('cobranca-cep', sCep)
                    self.storage.setItem('cobranca-regiao', sRegiao)
                }
            })
        }
    }

    $(function() {

        var loja = new $.Loja('#site')
    })
})(jQuery)