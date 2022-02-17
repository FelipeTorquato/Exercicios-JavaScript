/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
*/

const mediaAritmeticaVetor = function (numeros) {
    let totalDeNumeros = numeros.length;
    let somaDosNumeros = 0;
    for (let i = 0; i < totalDeNumeros; i++) {
        somaDosNumeros += numeros[i];
    }
    let media = somaDosNumeros / totalDeNumeros;
    console.log(`A média do vetor é ${media}`);
}

vetor = [1, 2, 3, 4, 5];
mediaAritmeticaVetor(vetor);