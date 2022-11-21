// append() é usado para inserir o conteúdo especificado 
// como o último filho (no final) dos elementos selecionados na coleção jQuery.


// // exemplo 1

// $(document).ready(function() {
//     $("button").click(function() {
//         $("p").append(" <b>Texto anexado recentemente adicionado</b>");
//         console.log("oi");
//     });
//     $("#btn2").click(function() {
//         $("ol").append("<li><b>Item anexado recém-adicionado</b></li>");
//     });
// });


// // exemplo 2

// $(document).ready(function() {
//     $("button").click(function() {
//         $("<span><b> Ola quiz javascript. </b></span>").appendTo("p");
//     });
// });


// exemplo 3

$(document).ready(function() {
    $("button").click(function() {
        $("p").clone().appendTo("body");
    });
});