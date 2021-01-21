let valor // não inicializada
console.log(valor)

valor = null//Quer dizer ausencia de valor. Inicializei, porém não aponta pra nenhum objeto na memória, está vazia
console.log(valor)
//console.log(valor.toString()) // Vai dar erro. Não pode acessar o valor de uma variável nula

console.log("\n*********************************")
const produto = {}
console.log(produto.preco) //Undefined, pois não foi definido o preço do produto
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Não é bom atribuir explicitamente o valor undefined. Preferir null
console.log(!!produto.preco)
console.log(produto)
// delete produto.preco // Se for tirar o atributo de um obj, sempre usar delete

produto.preco = null
console.log(!!produto.preco)

console.log("\n*********************************")
console.log(produto)