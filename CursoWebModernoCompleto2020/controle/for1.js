let contador = 1

console.log('Contador com o WHILE')
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

console.log('\nContador com o FOR')
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

console.log('\nNavegar em um Array')
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++){
    console.log(`Nota = ${notas[i]}`)
}