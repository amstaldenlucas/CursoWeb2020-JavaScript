// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {                                // a setinhna reduz a palavra function
    return a + b
}
console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b       // só pode fazer isso quando tem uma única linha, unica sentença de código
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')