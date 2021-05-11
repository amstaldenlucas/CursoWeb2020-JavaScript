console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Mai recomendado
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // do indice 4 até o 8 existe, porém, não tem valor
// ou seja, o elemento existe dentro o array, só está com valor undefined
console.log(aprovados)

aprovados.sort() // essa função vai ordenar em ordem ASC os elementos do array
console.log(aprovados)

delete aprovados[1] // deletar o elemento do índice 1. vai colocar undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

 aprovados.splice(1, 2) // primeiro parâmetro é o índice do elemento para excluir. Segundo parâmetro é 
                         // a qtd de elementos para excluir
 console.log(aprovados)

// aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // primeiro parâmetro é o índice do elemento para excluir. Segundo parâmetro é 
//     // a qtd de elementos para excluir. Já os valores seguinte entre aspas é os novos elementos
// console.log(aprovados)

