const escola = 'Cod3r'

console.log(escola.charAt(4)) // Vai trazer a letra que está no índice 4, lembrando que o primeiro índice é 0
console.log(escola.charAt(5)) // Se não existir o índice então ele vai retornar vazio
console.log(escola.charCodeAt(3)) // Pegar o valor da tabela ASCII
console.log(escola.indexOf('3')) // Vai retornar o índice associado ao caractere 3

console.log(escola.substring(1)) // Vai imprimir do índice 1 até o final
console.log(escola.substring(0 , 3)) // Vai imprimir dó índice 0 até o índice 3, não incluindo o 3

console.log('Escola '.concat(escola).concat("!")) // Vai concatenar direto um literal e uma variável
console.log(escola.replace('3', 'e')) // O replace serve pra trocar um caractere ou palavras por outro
console.log(escola.replace(3, 'e')) // O replace serve pra trocar um caractere ou palavras por outro

console.log('Ana,Maria,Pedro'.split(',')) // o split serve pra separar uma string por um Array