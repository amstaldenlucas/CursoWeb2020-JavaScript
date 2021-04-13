// Formar diferentes de declarar funcções

console.log(soma(3, 4))

// function declaration
// nesta função vc pode chamar ela antes mesmo de declarar, pois o interpretador vai carrgar primeiramente as funções
function soma(x, y) {
    return x + y
}

//function expression
// desta forma a função só pode ser chamada depois de ter sido declarada
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression (Pouco usada)
// desta forma a função só pode ser chamada depois de ter sido declarada
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 4))