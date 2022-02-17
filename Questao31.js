/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

function contarNumerosNegativos(numeros) {
    let contNegativos = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            contNegativos++;
        }
    }
    console.log(`Quantidade de números negativos do vetor: ${contNegativos}`);
}

vetor = [10, 1, -12, 11, 4, 5, -1, -8, 72, -9];
contarNumerosNegativos(vetor);