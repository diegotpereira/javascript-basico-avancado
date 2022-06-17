var marcas = [50, 20, 70, 60, 45, 30]

function acharMin(arr) {
    var comprimento = arr.length
    var min = Infinity

    while (comprimento--) {
        if (arr[comprimento] < min) {
            min = arr[comprimento]
        }
    }
    return min
}
function acharMax(arr) {
    var comprimento = arr.length
    var max = -Infinity

    while (comprimento--) {
        if (arr[comprimento] > max) {
            max = arr[comprimento]
        }
    }
    return max
}
console.log(acharMin(marcas));
console.log(acharMax(marcas));

