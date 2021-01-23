function compras(trabalho1, trabalho2) {
    const comprarSorve = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)   // Ou exclusivo.. Obrigatoriamente 1 é true e outro false
    const comprarTv32 = trabalho1 != trabalho2 // funciona da mesma forma que o de cima
    const manterSaudavel = !comprarSorve // Operador unário
    return { comprarSorve, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))