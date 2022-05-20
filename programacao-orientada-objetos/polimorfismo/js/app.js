// exemplo 1

class A
{
    exibir() {
        document.writeln("A é invocado")
    }
}
class B extends A 
{

}
var b = new B()
b.exibir()

// exemplo 2
class C
{
    exibir() 
    {
        document.writeln("A é invocado<br>")
    }
}
class D extends C 
{
    exibir()
    {
        document.writeln("B é invocado")
    }
}
var c = [new C(), new D()]
c.forEach(function(msg) {
    msg.exibir()
})

// exemplo 3
function E() 
{

}
E.prototype.exibicao = function() 
{
    return "E foi invocado"
}
function F()
{

}
F.prototype = Object.create(E.prototype)

var ex = [new E(), new F()]

ex.forEach(function(msg) 
{
    document.writeln(msg.exibicao() + "<br>")
})

