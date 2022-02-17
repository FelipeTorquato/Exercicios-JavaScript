/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações
*/

function checarIntervalo(numeros) {
    let numerosNoIntervalo = 0;
    let numerosForaDoIntervalo = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            numerosNoIntervalo++;
        } else {
            numerosForaDoIntervalo++;
        }
    }
    console.log(`Números dentro do intervalo [10, 20] = ${numerosNoIntervalo}\nNúmeros fora do intervalo = ${numerosForaDoIntervalo}`);
}

checarIntervalo([7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]);