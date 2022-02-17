/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console
*/

let vetorInteiro = [1, 2, 3, 4];
let vetorString = ["Olá", "Oi", "Bom", "Dia"];
let vetorDouble = [1.5, 2.4, 3.5, 4.2];

function concatenar(...args) {
    let vetorResultante = [];
    for (let i = 0; i < arguments.length; i++) {
        vetorResultante = vetorResultante.concat(arguments[i]);
    }
    console.log(vetorResultante);
}

concatenar(vetorInteiro, vetorDouble);
concatenar(vetorDouble, vetorString);