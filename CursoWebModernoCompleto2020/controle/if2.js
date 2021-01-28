function teste1(num) {
    if (num > 7)
        console.log(num)    // Ele respeita apenas a primeira linha com o código...
        console.log('Final') // O que vier abaixo continua fora do if
}

// Por conta disso é bom sempre utilizar chaves
teste1(6)
teste1(8)

function teste2(num) { // O ; 'finalizou' o bloco if, por conta disso vai imprimir sempre
    if (num > 7); { // Cuidado com o ;, não usar na definição das estruturas de controle
        console.log(num) // Esse bloco não está associado ao IF
    }
}

teste2(6)
teste2(8)