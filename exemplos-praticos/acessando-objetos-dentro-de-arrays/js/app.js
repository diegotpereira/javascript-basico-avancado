let carros = [
    { fabricante: 'Fiat', modelo: 'Uno', ano: 1995 },
    { fabricante: 'Fiat', modelo: 'Palio', ano: 2010 },
    { fabricante: 'GM', modelo: 'Celta', ano: 2005 },
    { fabricante: 'Ford', modelo: 'Ka', ano: 2013 },
    { fabricante: 'Volkswagen', modelo: 'Gol', ano: 2018 }
]
let texto = ""

for (let index in carros) {
    let modelo = carros[index].modelo
    let ano = carros[index].ano
    let fabricante = carros[index].fabricante

    texto = texto + modelo + " - " + ano + " - " + fabricante + "<br/>"
}
document.querySelector('.carros').innerHTML = texto