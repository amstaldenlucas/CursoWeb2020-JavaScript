const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// O bind serve para amarrar um determinado objeto, para ele ser o dono da execução
// assim, sempre o this da função será referenciado pelo obj que vc passar
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()