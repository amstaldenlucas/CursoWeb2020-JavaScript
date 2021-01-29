const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break           // O break não age sobre if, então procura o mais próximo
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('\n Usando Continue')
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // Isso aqui serve pra criar um rótulo para a extrutura de repetição
for (a in nums) {       // é como se fosse um apelido pra ela
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

console.log(`Fim!`)