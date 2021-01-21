let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Precisa negar 2x para exibir o value booleano, senão ele vai imprimir o caractere 1

console.log('\nOs verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nOs falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nPra finalizar....')
console.log(!!('' || null || 0 || ' '))
console.log('' || null || 0 || 'epa') // Neste caso vai retornar o único valor verdadeiro encontrado

let nome = ''
console.log(nome || 'Desconhecido') // Se a variável for false então vai imprimir a palavra Desconhecido