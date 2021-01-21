console.log(7 / 0) // Não gera erro, gera infinito
console.log("10" / 2) // Se for número o JS vai calcular da mesma forma
console.log('3' + 2) // Ele vai concatenar, a string ganha
console.log('3' - 2) // Nesse caso vai subtrair
console.log("Show!" * 2) // Vai gerar NaN - Not a Number
console.log(0.1 + 0.7) // Por conta do ponto flutuante não vai dar 0.98, vai ser 0.7999999999
console.log((0.1 + 0.7).toFixed(2))

//console.log(10.toString())
console.log((10.345).toFixed(2))