function carregar(url) {
  // Retorne uma nova promessa.
  return new Promise(function(resolve, reject) {
    // Faça o trabalho usual do XHR
    var requisitar = new XMLHttpRequest();
    requisitar.open('GET', url);

    requisitar.onload = function() {
      // Chamado em caso de 404 etc
      // então verifique o status
      if (requisitar.status == 200) {
        // resolva a promessa com o texto em response
        resolve(requisitar.response);
      }
      else {
        // Caso contrário rejeite com o texto do status
        // que esperamos que seja um erro que possamos entender
        reject(Error(requisitar.statusText));
      }
    };

    // Lide com erros de rede
    requisitar.onerror = function() {
      reject(Error("Network Error"));
    };

    // Faça a requisição
    requisitar.send();
  });
}
const url = 'https://www.javascripttutorial.net/sample/promise/api.json';
const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');

btn.addEventListener('click', () => {
  carregar(url)
    .then((response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    });
});
