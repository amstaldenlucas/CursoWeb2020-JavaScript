const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(path) {
    return new Promise(resolve => {
        fs.readFile(path, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(linhas => linhas.replace(/(\r\n|\n|\r)/gm, ''))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)