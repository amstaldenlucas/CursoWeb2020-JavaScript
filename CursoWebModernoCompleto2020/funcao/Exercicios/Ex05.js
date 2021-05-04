const valor = 0.1 + 0.2

let valorParaRS = a => {
    var valor = a.toFixed(2).replace('.',',')
    console.log('R$', valor)
}

console.log(valor)
valorParaRS(valor)

