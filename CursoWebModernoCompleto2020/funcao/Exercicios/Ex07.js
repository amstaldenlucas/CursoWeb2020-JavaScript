function imprimir (valor, posicao) {
    console.log(`${posicao + 1}. ${valor}`)
}
function calcularBhaskara (ax2, bx, c) {
    let valores = []
    let delta = bx * bx - 4 * ax2 * c

    if (delta < 0)
        console.log('O delta é negativo. Valor =', delta)
    else {
        valores.push((-bx + Math.sqrt(delta)) / (2 *ax2))
        valores.push((-bx - Math.sqrt(delta)) / (2 * ax2))

        valores.forEach(imprimir)
    }
}
calcularBhaskara(-52, 5, 12)