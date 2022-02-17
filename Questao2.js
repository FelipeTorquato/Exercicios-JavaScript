/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)
*/

function classificacaoTriangulo(a, b, c) {
    let resultado
    if (a == b && b == c && a == c) {
        resultado = 'O triângulo é Equilátero!'
    } else if ((a == b && b != c) || (a == c && b != c) || (b == c && c != a)) {
        resultado = 'O triângulo é Isósceles!'
    } else if (a != b && b != c && c != a) {
        resultado = 'O triângulo é Escaleno!'
    }
    return resultado
}

console.log(classificacaoTriangulo(5, 5, 5))
console.log(classificacaoTriangulo(2, 2, 4))
console.log(classificacaoTriangulo(2, 4, 4))
console.log(classificacaoTriangulo(2, 4, 2))
console.log(classificacaoTriangulo(1, 4, 6))