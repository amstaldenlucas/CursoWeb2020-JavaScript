function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                //gerar um erro
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }   
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), // primeira função é o sucesso
        err => console.log(`Erro Esp.: ${err}`) // segunda func é tratamento erro
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))