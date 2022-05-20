// usando o método parse()

var j = '{"Nome": "Diego", "Email": "diego@hotmail.com", "COD": "12345"}'
var data = JSON.parse(j)

document.write("Converter string no formato JSON usando o método parse() <br>")
document.write(data.Email)


var x = {Nome: "Diego",  Email: "diego@hotmail.com", Cod: 12345}
var dado = JSON.stringify(x)

document.write("<br> Converter string no formato JSON usando o método stringify() <br>")
document.write(dado)