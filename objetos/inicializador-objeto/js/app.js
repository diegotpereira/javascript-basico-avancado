// objeto literal normal
var prop = 'Valor 1'
var prop2 = 'Valor 2'

function metodo2() {
    console.log('chamado metodo 2');
}

//podemos omitir o valor de uma propriedade ou método ao 
// definir um objeto literal quando o valor vier de uma 
// variável com o mesmo nome da propriedade ou método
var obj = {
    prop: prop,
    prop2,
    metodo2,
    metodo3: function() {
        console.log('chamdo metodo 3');
    },
    metodo4() {
        console.log('chamado metodo 4');
    }
}
console.log(obj);
obj.metodo2()
obj.metodo3()
obj.metodo4()

// Nome de propriedades 
// modo tradicional
var propNome1 = 'propNome1'
var obj = {}
obj[propNome1] = 'prop valor 1'

console.log(obj);