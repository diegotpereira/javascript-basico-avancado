let texto = '{"colaboradores": [' +
    '{"nome": "João", "sobrenome": "Silva"},' +
    '{"nome": "Rosa", "sobrenome": "Luxemburgo"},' +
    '{"nome": "Rogerio", "sobrenome" : "Costa"}]}'

const obj = JSON.parse(texto)
document.getElementById('demo').innerHTML =
    obj.colaboradores[1].nome + " " + obj.colaboradores[1].sobrenome