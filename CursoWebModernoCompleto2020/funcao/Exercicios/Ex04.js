var dividendoDivisor = (dividendo, divisor) => {
    if (divisor === 0)
        console.log(`Não é possível dividir ${dividendo} por 0 `)
    else {
        console.log('Divisão = ', Math.floor(dividendo/divisor))
        console.log('Resto = ', dividendo % divisor)
    }
    console.log('------------------------------')
}

dividendoDivisor(3,0)
dividendoDivisor(8,3)