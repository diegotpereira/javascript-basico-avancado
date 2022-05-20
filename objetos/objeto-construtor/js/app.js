function Colaborador(id, nome, salario) {
    this.id = id 
    this.nome = nome 
    this.salario = salario 
}

col = new Colaborador(103, "Bob Marley", 9000)

document.write(col.id + " " + col.nome + " " + col.salario)