// jQuery animate() fornece uma maneira de criar animações personalizada

// $(document).ready(function() {
//     $("#btn").click(function() {
//         $("#animacao").animate({
//             left: '450px'
//         });
//     });
// });


// // Programa 2

// $(document).ready(function() {
//     $("#btn").click(function() {
//         $("#animacao").animate({
//             left: '250px',
//             opacity: '0.5',
//             height: '150px',
//             width: '150px'
//         });
//     });
// });

// Programa 3

$(document).ready(function() {
    $("#btn").click(function() {
        $("#animacao").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});