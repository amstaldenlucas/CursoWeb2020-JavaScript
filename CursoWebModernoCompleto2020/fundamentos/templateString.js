const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// Neste caso ele vai considerar as quebras de linha
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)