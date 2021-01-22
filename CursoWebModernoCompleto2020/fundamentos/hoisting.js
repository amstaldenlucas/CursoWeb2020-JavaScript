// Efeito hoisting é içar, jogar pra cima, algo do tipo
// Quando vc declara uma VAR, o próprio interpretador joga ela pra cima, no topo. Somente var

console.log('a =', a) // Neste caso não da erro, ele reconhece que existe, porém, ela não possui valor
var a = 2               // No caso de uma function é a mesma coisa, a var vai pro topo
console.log('a =', a)

console.log("\n********* Agora com LET *********")

// console.log('b =', b)           // Já no LET não acontece isso, ele vai dar erro
let b = 2
console.log('b =', b)