// O tipo de um Objeto é uma função. Já quando o objeto é instanciado, ai se torna um Objeto

console.log(typeof Object)
console.log(typeof new Object) // Não precisa colocar os parênteses para instanciar

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())