/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

function verificarMaiorEMenor(numeros) {
    let maiorNumero = numeros[0];
    let menorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        } else if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    console.log(`Maior número: ${maiorNumero} / Menor número: ${menorNumero}`);
}

verificarMaiorEMenor([1, 2, 3, 4, 5, 6, 7, 8]);
verificarMaiorEMenor([12, 5, 8, 9, 4, 4, 6, 7, 2, 15]);