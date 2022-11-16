$(document).ready(function() {

    $("button").click(function() {

        $("#div1").delay("fast").fadeIn();
        $("#div2").delay("slow").fadeIn();
        $("#div3").delay(1000).fadeIn();
        $("#div4").delay(2000).fadeIn();
        $("#delay").delay(4000).fadeIn();
    });
});