function Colaborador(id, nome, salario) {
    this.id = id 
    this.nome = nome 
    this.salario = salario

    this.alterarSalario = alterarSalario

    function alterarSalario(outroSalario) {
        this.salario = outroSalario
    }
}
e = new Colaborador(104, "Peter Tosh", 7500)
document.write(e.id + " " + e.nome + " " + e.salario)
e.alterarSalario(8500)

document.write("<br> " + e.id + " " + e.nome + " " + e.salario)