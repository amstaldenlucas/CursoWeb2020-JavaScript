const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});
Object.entries(pessoa).forEach(([chave, valor]) => { // também pode ser destaforma
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Habilitar ser listado como key
    writable: false, // Habilitar propriedade ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Não vai atribuir nada, foi foi setado pra não ser alterado
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ES6)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Concatena objetos dentro do primeiro, sobrescreve parametros iguais
console.log(obj)
console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)