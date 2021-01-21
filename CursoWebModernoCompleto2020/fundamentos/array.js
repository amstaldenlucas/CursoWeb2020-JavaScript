const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])                 // vai retornar indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length) // Contar os itens do array

console.log("\n***********************")
valores.push({id: 3}, false, null, 'teste') // Adicionar mais itens no array
console.log(valores)

console.log("\n***********************")
console.log(valores.pop()) // Exibe o último valor do array
delete valores[0] // Deletar o valor do índice 0

console.log(valores)
console.log(typeof valores) // Array é do tipo object