/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5
*/

const multiplicarVetor = function (valores, num) {
    let vetorResultante = [];
    for (let i = 0; i < valores.length; i++) {
        vetorResultante.push(valores[i] * num);
    }
    console.log(vetorResultante);
}

const multiplicarVetorComRestricao = function (valores, num) {
    let vetorResultante = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > 5) {
            vetorResultante.push(valores[i] * num);
        }
    }
    console.log(vetorResultante);
}

let vetor = [1, 2, 5, 4, 8, 3, 10];

multiplicarVetor(vetor, 3);
multiplicarVetorComRestricao(vetor, 3);