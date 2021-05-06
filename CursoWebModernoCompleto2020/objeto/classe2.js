class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Aqui é como se fosse o protótipo, extende outra classe
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Chama a função da classe pai
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)