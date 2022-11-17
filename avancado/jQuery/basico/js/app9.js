$(function() {

    var estado = true;

    $("#botao").click(function() {

        if(estado) {
            $("#efeito").animate({
                backgroundColor: "#aa0000",
                color: "#fff",
                width: 500
            }, 1000);

        } else {
            $("#efeito").animate({
                backgroundColor: "#fff",
                color: "#000",
                width: 240
            }, 1000);
        }

        console.log(estado);
        estado = !estado;
    })
})