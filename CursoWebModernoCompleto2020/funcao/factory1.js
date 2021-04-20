// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

 console.log(criarPessoa())

const ana = criarPessoa()
console.log(typeof(ana))
console.log(ana.sobrenome)