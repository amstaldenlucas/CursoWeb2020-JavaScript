let num1 = 1
let num2 = 2

num1++ // acrescentar 1 unidade
console.log('Num1:', num1)
--num1
console.log('Num1:', num1)

console.log(++num1 === num2--) // true. a soma vai executar antes da comparação. Já o decremento, só depois
console.log(num1 === num2) // Agora da false