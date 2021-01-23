// Esse recurso é novo, ele vai desestruturar um objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
                                // Esse é o comand destructuring. Ele vai extrair a propriedade
const {nome, idade} = pessoa    // nome e idade do objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa  // Aqui ele vai extrair do objeto o atribuito e vai renomear pra n e i
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa // Aqui inserimos um valor padrão caso seja null ou não exista
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep} } = pessoa // Acessar os atributos de um objeto dentro de outro
console.log(logradouro, numero, cep)