const saudacoes = require('./passandoParametros')('Ana', 'Lucas', 'João')

const imprimirSaudacao = e => console.log(e)
// console.log(saudacoes)
// saudacoes.forEach(element => {
//     console.log(element)
// });
saudacoes.forEach(imprimirSaudacao)