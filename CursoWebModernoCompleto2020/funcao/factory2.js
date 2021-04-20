// Factory com parâmetros

function criarProduto(nome, preco) {
    return {
        nome: nome,         // Nesta caso posso colocar nome: nome ou simplesmente colocar nome
        preco,
        desconto: 0.1
    }
}

// const notebook = criarProduto('Notebook', 2199.49)
// console.log(notebook)
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))