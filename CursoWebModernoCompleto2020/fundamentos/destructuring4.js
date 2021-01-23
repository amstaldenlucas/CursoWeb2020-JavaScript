function rand([min = 0, max = 1000]) {
    if (min> max) [min, max] = [max, min] // Se o min for maior, ele vai fazer um destructuring trocando a posicao
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
// console.log(rand()) // Erro. Vai tentar desestruturar algo nulo ou Indefinido