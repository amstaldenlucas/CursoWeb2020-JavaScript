const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado !')
    } else {
        console.log('Reprovado !')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // CUIDADO ! Como string não compara com numero, então vai dar false