function Pessoa() {
    this.idade = 0

    const self =  this      // O self também serve pra garantir que é o This atual
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)    // Passando o bind ele garante que o this é a idade pessoa
}

new Pessoa