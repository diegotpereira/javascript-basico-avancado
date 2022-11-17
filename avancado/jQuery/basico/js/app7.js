// jQuery slideToggle() é usado para alternar entre o método slideUp() e slideDown().

$(document).ready(function() {
    $("#virar").click(function() {
        $("#painel").slideToggle("slow");
    });
});