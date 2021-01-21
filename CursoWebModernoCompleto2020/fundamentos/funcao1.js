// Funcção é um bloco de código nomeado. Ela agrupa uma sentenca.

// Funcao sem retorno
console.log("\n****** Funcao SEM retorno ******")
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
console.log("\n****** Funcao COM retorno ******")
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // Vai retornar NaN 'Not a Number' pq a primeira var não foi  tratada