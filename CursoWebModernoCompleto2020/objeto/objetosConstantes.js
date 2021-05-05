// pessoa aponta pra um endereço de memória -> 123. O endereço aponta para o obj {...}
const pessoa = {nome: 'João'}

// Aqui não alterei a referência da constante, alterei apenas o dado do obj
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// a pessoa vai tentar apontar pra um novo objeto que está em um outro enedereço de memória
// pessoa = {nome: 'Ana'} // Vai dar erro, pois a pessoa nunca pode apontar para outro endereço, ela é const

// Esse método congela o objeto, você não consegue mexer nele. Assim o objeto passa a ser constante
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)