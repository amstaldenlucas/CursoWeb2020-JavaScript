const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // Pode adicionar atributos para um objeto à qualquer momento
prod1.preco = 4998.90
prod1['desconto Legal'] = 0.40 // Pode criar atributos com espaço no nome. Porém, não é recomendado

console.log(prod1)

console.log("\n************************************************")
const prod2 = {                 // Outra forma de declarar um objeto
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {              // Pode ter objetos dentro de objeto
        blabla: 1
    }
}
console.log(prod2)