// // Solicitação Get

// fetch('https://api.github.com/users/manishmshiva')
// // Tratamento do sucesso
// .then(response => response.json())// converter para json
// .then(json => console.log(json)) // imprimir dados no console - saída: {login: 'manishmshiva', id: 46276883, node_id: 'MDQ6VXNlcjQ2Mjc2ODgz', avatar_url: 'https://avatars.githubusercontent.com/u/46276883?v=4', gravatar_id: '', …}avatar_url: "https://avatars.githubusercontent.com/u/46276883?v=4"bio: "Cybersecurity | Machine Learning | DevOps"blog: "http://www.manishmshiva.com/"company: nullcreated_at: "2018-12-31T08:05:40Z"email: nullevents_url: "https://api.github.com/users/manishmshiva/events{/privacy}"followers: 6followers_url: "https://api.github.com/users/manishmshiva/followers"following: 4following_url: "https://api.github.com/users/manishmshiva/following{/other_user}"gists_url: "https://api.github.com/users/manishmshiva/gists{/gist_id}"gravatar_id: ""hireable: truehtml_url: "https://github.com/manishmshiva"id: 46276883location: nulllogin: "manishmshiva"name: "Manish M. Shivanandhan"node_id: "MDQ6VXNlcjQ2Mjc2ODgz"organizations_url: "https://api.github.com/users/manishmshiva/orgs"public_gists: 4public_repos: 3received_events_url: "https://api.github.com/users/manishmshiva/received_events"repos_url: "https://api.github.com/users/manishmshiva/repos"site_admin: falsestarred_url: "https://api.github.com/users/manishmshiva/starred{/owner}{/repo}"subscriptions_url: "https://api.github.com/users/manishmshiva/subscriptions"twitter_username: nulltype: "User"updated_at: "2022-10-19T11:05:50Z"url: "https://api.github.com/users/manishmshiva"[[Prototype]]: Object
// .catch(err => console.log('Erro na solicitação', err)) // lidar com os erros por catch


// // Trabalhando com os cabeçalhos

// fetch('https://api.github.com/users/manishmshiva', {

// method: "GET",
// headers: { "Content-type" : "application/json;charset=UTF-8"}
// })
// .then(response => response.json())
// .then(json => console.log(json)) // saída: {login: 'manishmshiva', id: 46276883, node_id: 'MDQ6VXNlcjQ2Mjc2ODgz', avatar_url: 'https://avatars.githubusercontent.com/u/46276883?v=4', gravatar_id: '', …}
// .catch(err => console.log(err))


// // Passando dados em uma solicitação POST

// // dados a serem enviados pela solicitação POST

// let _data = {

//     title: "foo",
//     body: "bar",
//     userId: 1
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {

//     method: 'POST',
//     body: JSON.stringify(_data),
//     headers: { "Content-type" : 'application/json; charset=UTF-8' }
// })
// .then(response =>  response.json())
// .then(json => console.log(json)) // saída: {title: 'foo', body: 'bar', userId: 1, id: 101}body: "bar"id: 101title: "foo"userId: 1[[Prototype]]: Object
// .catch(err => console.log(err))