// // programa para obter as dimensões de uma imagem
const img = new Image()

// buscar uma imagem
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png'

// buscar altura e largura da imagem
img.onload = function() {
    console.log('largura ' + this.width);
    console.log('altura ' + this.height);
}

function carregarImg() {
    document.getElementById('minhaImagem').src  = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png'
}