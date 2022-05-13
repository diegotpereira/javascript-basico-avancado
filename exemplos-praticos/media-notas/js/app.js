function calcularMedia() {
    let alunos = parseInt(prompt('Número de alunos: '))
    let vetor = new Array(alunos)

    // Preenchendo vetor
    for (let contar = 0; contar < alunos; contar++)
        vetor[contar] = parseFloat(prompt('Aluno ' + (contar + 1) + ":"))

    // somando todos elementos
    let soma = vetor.reduce((t, n) => t + n, 0)

    // calculando a média dos elementos
    let media = soma / alunos

    document.querySelector('#resultado').innerHTML = `
        <h2>N° de alunos: ${alunos}</h2>
        <h2>Média da turma: ${media.toFixed(2)}</h2>`
}