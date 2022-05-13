// Encapsulamento das propriedades e métodos de Animal (protótipo)
var Animal = {
        tipo: 'Invertebrados',
        qualTipo: function() {
            console.log(this.tipo);
        }
    }
    // Cria um novo tipo de animal chamado invertebrado
var invertebrado = Object.create(Animal)
invertebrado.qualTipo()

// cria um novo tipo de animal
var peixe = Object.create(Animal)
peixe.tipo = 'Peixes'
peixe.qualTipo()

// cria um novo tipo de animal
var mamifero = Object.create(Animal)
mamifero.tipo = 'Mamifero'
mamifero.qualTipo()