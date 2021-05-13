const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]
// Desafio 1: Todos os alunos são bolsistas?
// Criar função reduce que vai percorrer tudo e dizer se todos alunos são bolsistas
console.log("Desafio 1:")
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const resultado = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(resultado)


console.log('Desafio2:') // Desafio2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const resultado2 = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(resultado2)