const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // O método pop remove o último elemento do Array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no primeiro indice
console.log(pilotos)

// Splice pode adicionar e remover elementos dentro de um Array

// Adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // vai adionar no índice 2 (1 parametro)
                                        // e não vai remover ninguém (2 parâmetro)
console.log(pilotos)

// REmover elementos
pilotos.splice(3, 1) // No índice 3(1° param) vai remover somente 1 elemento (2° param)
console.log(pilotos)

// Método SLICE é diferente do método SPLICE.
//  Retora um novo array a partir do indice informado no 1° param
const algunsPilotos1 = pilotos.slice(2)
console.log('\n-------------------- Método SLICE --------------------')
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai criar um novo Array a partir do indice 1
                                // com intervalo até o indice 4. Obs: O último índice não entra
console.log(algunsPilotos2)
