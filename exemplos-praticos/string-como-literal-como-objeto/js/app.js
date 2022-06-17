function verificar(str) {
    if (str instanceof String) {
        return "É um objeto de string"
    } else {
        if (typeof str === "string") {
            return "É um literal de string"
        } else {
            return "outro tipo"
        }
    }
}
var literalString = "Eu sou uma string literal"
var objetoString = new String("Eu sou um objeto string")

console.log(verificar(literalString));
console.log(verificar(objetoString));