let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // Arrow function é anônima. Pra chamar dps, precisa alocar em uma variável
    return 2 * a
}

dobro = a => 2 * a // Se tiver apenas 1 parâmetro não precisa do parênteses...
                    // Se não tiver chaves, o return é implícito

console.log(dobro(Math.PI))

// Outra function
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Assim também é válido, informa que tem parâmetro, porém não é obrigatório
console.log(ola())