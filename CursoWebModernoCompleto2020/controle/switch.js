const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // O .floor vai arredondar pra baixo
        case 10:
        case 9: // JS permite fazer isso, colocar uma determinada execução pra 2 cases
            console.log('Quadro de honra')
            break
        case 8: case 7: { // Também funcion a com bloco de chaves
            console.log('Aprovado')
            break
        }
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    // console.log('Fim') // Depois de sair da seleção SWITCH ai ele executa o bloco abaixo
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)