// Método empty(): Este método é usado para remover 
// apenas o conteúdo dos elementos selecionados.

// // exemplo 1

// $(document).ready(function() {
//     $("button").click(function() {
//         $("p").detach();
//     });
// });


// exemplo 2

$("p").click(function() {
    $(this).toggleClass("off");
});

var p;

$("button").click(function() {
    if(p) {
        p.appendTo("body");
        p = null;

    } else {
        p = $("p").detach();
    }
});