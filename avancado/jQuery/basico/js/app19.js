// $(document).ready(function() {
//     $("button").click(function() {
//         $("p").before("<p><b>Olá Quiz JavaScript</b></p>")
//     });
// });

$(document).ready(function() {
    $("#btn1").click(function() {
        $("p").prepend("<b>Texto anexado</b>.");
    });
});