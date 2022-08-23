let circulos = [
    10, 20, 30
]

let areas = []
let area = 0

for(let i = 0; i < circulos.length; i++) {

    area = Math.floor(Math.PI * circulos[i] * circulos[i])
    areas.push(area)

    console.log(areas);
}