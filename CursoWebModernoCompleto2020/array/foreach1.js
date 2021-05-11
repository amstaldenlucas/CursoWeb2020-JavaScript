const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // primeiro parâmetro é o value e o segundo
    console.log(`${indice + 1}) ${nome}`)                                        // é o índice
}) // vai percorrer todos elementos do foreach

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)