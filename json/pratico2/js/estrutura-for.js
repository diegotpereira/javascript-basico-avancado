var xmlHttp = new XMLHttpRequest()
xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var cliente = JSON.parse(this.responseText)
        document.getElementById('demo').innerHTML = `
                                                    <h3>Dados do cliente</h3>
                                                    <p>Cadastro: ${new Date(cliente.cadastro)}</p>
                                                    <p>Nome: ${cliente.nome}</p>
                                                    <p>Nome: ${cliente['idade']} anos</p>
                                                    <p>Nome: ${cliente.cidade} - ${cliente.estadp}</p>
                                                    <h4>Animais</h4>
                                                    <table>
                                                       <tr>
                                                          <th>Animal</th>
                                                          <th>Nome do Animal</th>
                                                       </tr>
                                                       ${getAnimais()}
                                                    </table>
                                                    <br />
                                                    <hr />
                                                    `

        function getAnimais() {
            let animalArray = cliente.animais
            let textoTabela = ""
            for (let index in animalArray) {
                textoTabela += `
                               <tr>
                                  <td>${animalArray[index]['animal']}</td>
                                  <td>${animalArray[index]['nome']}</td>
                               </tr>
                               `
            }
            return textoTabela
        }
    }
}
xmlHttp.open('POST', './json/cliente.json', true)
xmlHttp.send()