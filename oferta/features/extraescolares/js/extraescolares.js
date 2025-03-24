$(document).ready(function() {
    $("section figure img").hover(
        function() {
            $(this).css("opacity", "0.7");
        }, 
        function() {
            $(this).css("opacity", "1");
        }
    );

    $("section figure img").click(function() {
        let destino = "features/" + $(this).attr("alt").toLowerCase() + ".html"; // Agrega "features/" antes del alt
        window.location.href = destino;
    });
});