// Os operadores relacionais sempre retornam true or false
console.log('01)', '1' == 1) // Comparar somente os valores
console.log('02)', '1' === 1) // Comparar os valores e o tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('5)', 3 < 2)
console.log('6)', 3 > 2)
console.log('7)', 3 <= 2)
console.log('8)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 === d2) // False. Está comparando o endereço de memória
console.log('10)', d1 == d2)
console.log('11)', d1.getTime === d2.getTime)
console.log('12)', undefined == null)
console.log('13)', undefined === null)