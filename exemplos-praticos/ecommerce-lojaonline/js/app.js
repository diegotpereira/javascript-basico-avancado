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
            this.$verificarCarrinho = this.$elemento.find('#checkout-cart')
            this.$subTotal = this.$elemento.find('#stotal')
            this.$comprasCarrinhoAcoes =  this.$elemento.find('#shopping-cart-actions')
            this.$atualizarCarrinhoBtn = this.$comprasCarrinhoAcoes.find('#update-cart')

            this.currency = "R&#36;";
            this.currencyString = 'PHP'

            // chamando metodos
            this.criarCarrinho()
            this.lidarFormAddCarrinho()
            this.exibirCarrinho()
            this.atualizarCarrinho()
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
        
        _addNoCarrinho: function(valor) {

            console.log("inciando add carrinho");

            var carrinho = this.storage.getItem(this.carrinhoNome)

            var carrinhoObjeto = this._toJSONOBject(carrinho)
            var carrinhoCopia = carrinhoObjeto
            var itens = carrinhoCopia.itens

            itens.push(valor)

            this.storage.setItem(this.carrinhoNome, this._toJSONString(carrinhoCopia))
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
					// this.$shipping[0].innerHTML = this.currency + " " + 0.00;	
                }
            }
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
        atualizarCarrinho: function() {

            var self = this
            if (self.$atualizarCarrinhoBtn.length) {
                
                self.$atualizarCarrinhoBtn.on('click', function() {

                    var $linhas = self.$formCarrinho.find('tbody tr')


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

                        
                    })
                })
            }
        },
        _extrairPreco: function(elemento) {

            var self = this
            var texto = elemento.text()
            var preco = texto.replace(self.currencyString, "").replace("", "")

            return preco
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

                    self.storage.setItem(self,carrinhoNome, self._toJSONString(atualizandoTotal))

                    $(this).parents('tr').remove()
                    self.$subTotal[0].innerHTML = self.currency + " " + self.storage.getItem(self.total)
                })
            }
        }
    }

    $(function() {

        var loja = new $.Loja('#site')
    })
})(jQuery)