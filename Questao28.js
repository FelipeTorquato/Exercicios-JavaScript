/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
*/

const checarVetor = function (numeros) {
    let contPares = 0;
    let contImpares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contPares++;
        } else {
            contImpares++;
        }
    }
    console.log(`Pares = ${contPares}, Impares = ${contImpares}`);
}

checarVetor([1, 2, 3, 4, 5, 6, 7]);
checarVetor([23, 65, 2, 74, 4, 6, 23, 1, 23, 44, 6]);