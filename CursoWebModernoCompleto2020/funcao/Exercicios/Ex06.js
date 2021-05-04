function jurosSimples (valInicial, taxaJuros, tempoAplicacao) {
    let valorJuros = 0
    for (let i = 1; i <= tempoAplicacao; i++)
        valorJuros += valInicial * (taxaJuros / 100)

    console.log(`Valor final = ${(valInicial + valorJuros).toFixed(2)}`)
}

function jurosCompostos (valInicial, taxaJuros, tempoAplicacao) {
    for (let i = 1; i <= tempoAplicacao; i++)
        valInicial += (valInicial * (taxaJuros / 100))

    console.log(`Valor final = ${valInicial.toFixed(2)}`)
}

jurosSimples(1000, 20, 10)
jurosCompostos(1000, 20, 10)