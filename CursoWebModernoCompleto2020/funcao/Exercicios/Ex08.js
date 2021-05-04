let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
let retorno = []

function verificarPontuacao (pontuacao) {
    let quebraDeRecord = 0
    let melhorJogo = 0
    let piorJogo = 0
    let rodadaPiorJogo = 0
    let pontuacoes = pontuacao.split(", ")

    melhorJogo = pontuacoes[0]
    piorJogo = pontuacoes[0]

    for (let i = 0; i < pontuacoes.length; i++){
        if (pontuacoes[i] > melhorJogo) {
            melhorJogo = pontuacoes[i]
            quebraDeRecord++
        }
        else if (pontuacoes[i] < piorJogo)
            rodadaPiorJogo = i + 1
    }
    retorno.push(quebraDeRecord)
    retorno.push(rodadaPiorJogo)
}

verificarPontuacao(stringPontuacoes)
console.log('Qtd quebra Record = ', retorno[0])
console.log('Rodada pior Jogo = ', retorno[1])