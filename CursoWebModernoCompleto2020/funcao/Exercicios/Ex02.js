function ClassificacaoTriangulo (lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3)
        return `O triângulo é EQUILÁTERO`
    else if (lado1 == lado2 || lado1 === lado3 || lado2 === lado3)
            return `O triàngulo é ISÓCELES`
    else
        return `O triângulo é ESCALENO`
}

console.log(ClassificacaoTriangulo(2, 2, 2))
console.log(ClassificacaoTriangulo(2,3,2))
console.log(ClassificacaoTriangulo(2,2,1))
console.log(ClassificacaoTriangulo(1,2,3))