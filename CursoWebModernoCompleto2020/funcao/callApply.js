function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log('-------------------')
// chamando uma função por call vc passa o contexto e depois todos os parâmetros da Function
console.log(getPreco.call(carro, 0.17, '$'))

// Chamando uma função por apply vc passa primeiramente o contexto e logo em seguida um Array com
// os parâmetros da Function
console.log(getPreco.apply(global, [0.17, '$']))