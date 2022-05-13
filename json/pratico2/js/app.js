var xmlHttp = new XMLHttpRequest()
xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var cliente = JSON.parse(this.responseText)

        document.getElementById('demo').innerHTML = `
                                                    <h3>Dados do cliente</h3>
                                                    <p>Cadastro: ${new Date(cliente.cadastro)}</p>
                                                    <p>Nome: ${cliente.nome}</p>
                                                    <p>Idade: ${cliente['idade']} anos </p>
                                                    <p>Nome: ${cliente.cidade} - ${cliente.estado}</p>
                                                    <h4>Animais</h4>
                                                    <table>
                                                       <tr>
                                                          <th>Animal</th>
                                                          <th>Nome do Animal</th>
                                                       </tr>
                                                       <tr>
                                                          <td>${cliente.animais[0]['animal']}</td>
                                                          <td>${cliente.animais[0]['nome']}</td>
                                                       </tr>
                                                        <tr>
                                                          <td>${cliente.animais[1].animal}</td>
                                                          <td>${cliente.animais[1].nome}</td>
                                                       </tr>
                                                        <tr>
                                                          <td>${cliente.animais[2].animal}</td>
                                                          <td>${cliente.animais[2].nome}</td>
                                                       </tr>
                                                    </table>
                                                    <br />
                                                    <hr />`

    }
}
xmlHttp.open('POST', './json/cliente.json', true)
xmlHttp.send()