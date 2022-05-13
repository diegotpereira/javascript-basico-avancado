function cumprimentar() {
    var hoje = new Date()
    var hora = hoje.getHours()
    var minuto = hoje.getMinutes()

    // Conforme a hora o cumprimento e distinto
    if ((hora > 7) && (hora < 12)) {

        document.write("Bom dia! <p>")
    } else {
        if ((hora > 12) && (hora < 20)) {

            document.write("Boa tarde!<p>")
        } else {
            document.write("Boa noite!<p>")
        }
    }
    // Colocar a hora e data
    document.write("São ", hora, " : ", minuto, "<p>")
    document.write(hoje.getDate(), "/ ", hoje.getMonth() + 1, "/ ")
    document.write(hoje.getYear())
}
cumprimentar()