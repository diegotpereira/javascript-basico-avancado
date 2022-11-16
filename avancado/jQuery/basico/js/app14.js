// $(document).ready(function() {
//     $("button").click(function() {
//         $("p").text("Bem-vindo ao Quiz JavaScript!");
//     });
// });

// // Programa 15

// function exibir() {

//     var simplesValor = $("#unico").val();
//     $("p").html("<b>Valor: </b> " + simplesValor)
// }

// $("select").change(exibir);

// exibir();


// // Programa 16

// function exibirValores() {

//     var simplesValor = $("#unico").val();
//     var multiplosValores = $("#multiplo").val() || [];

//     $("p").html("<b>Unico: </b> " + 
//                      simplesValor + "<b>Multiplo: </b>" 
//                                   + multiplosValores.join(",")); 
// }

// $("select").change(exibirValores);

// exibirValores();


// // Programa 17

// $(document).ready(function() {
//     $("button").click(function() {
//         $("input:text").val("QuizJavaScript");
//     });
// });


// Programa 18

$(document).ready(function() {
    $("button").click(function() {
        $("#p4").css("background-color", "violet");
        $("#p5").css({"background-color": "yellow", "font-size": "200%"})
        alert("Cor de fundo: " + $("p").css("background-color"));
    });
});