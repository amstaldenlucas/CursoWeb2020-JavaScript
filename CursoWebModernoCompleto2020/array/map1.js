const nums = [1, 2, 3, 4, 5]
// MAP é um for com propósito
// Ele vai gerar um novo array transformado
let resultado = nums.map(function(e) { // ele vai mapear o elemento em um novo
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)