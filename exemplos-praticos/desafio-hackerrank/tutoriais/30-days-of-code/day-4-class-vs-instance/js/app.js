

function principal(idade) {

    var T = 4;
    var idade;

    for(i = 0; i < T; i++) {

        // var idade = ();

        console.log(idade);
        var p = new Pessoa(idade);

        p.souVelho();

        for(j = 0; j < 3; j++) {

            p.passesAno();
        }
        p.souVelho();

        console.log("");
    }
}

principal(-1, 10, 16, 18);

function Pessoa(idadeInicial) {

    if (idadeInicial > 0) 
        this.idade = idadeInicial;

    else {

        this.idade = 0;

        console.log("A idade não é válida, definindo a idade como 0.");
    }

    this.souVelho = function () {

        if(this.idade < 13)
            console.log("Eu sou jovem.");

        else if(this.idade > 13 && this.idade <= 18)

            console.log("Eu sou adolescente.");

        else 

            console.log("Eu sou velho.");
    }
    this.passesAno = function() {

        // Aumente a idade da pessoa aqui
        this.idade++;
    }
}