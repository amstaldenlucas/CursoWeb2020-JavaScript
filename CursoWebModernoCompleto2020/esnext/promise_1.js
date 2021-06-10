function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const letraMinuscula = letra => letra.toLowerCase()
p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
