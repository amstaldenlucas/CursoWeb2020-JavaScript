var numero = 1
{
    let numero = 2                      // O let só existe dentro do escopo de bloco.
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)