/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo
*/

const calcularMediaPoderada = function (codigoAluno, notas) {
    let estadoAluno;
    let maiorNota = notas[0];
    let notasOrdenadas = [];
    while (codigoAluno > 0) {
        for (let i = 1; i < notas.length; i++) {
            if (notas[i] > maiorNota) {
                maiorNota = notas[i];
            }
        }
        if (notas.indexOf(maiorNota) === 0) {
            notasOrdenadas.push(maiorNota);
            notasOrdenadas.push(notas[1]);
            notasOrdenadas.push(notas[2]);
        } else if (notas.indexOf(maiorNota) === 1) {
            notasOrdenadas.push(maiorNota);
            notasOrdenadas.push(notas[0]);
            notasOrdenadas.push(notas[2]);
        } else if (notas.indexOf(maiorNota) === 2) {
            notasOrdenadas.push(maiorNota);
            notasOrdenadas.push(notas[0]);
            notasOrdenadas.push(notas[1]);
        }
        let mediaPonderada = ((notasOrdenadas[0] * 4) + (notasOrdenadas[1] * 3) + (notasOrdenadas[2] * 3)) / 10;
        if (mediaPonderada >= 5) {
            estadoAluno = "APROVADO";
        } else {
            estadoAluno = "REPROVADO";
        }
        console.log(`Codigo = ${codigoAluno}\nNotas = ${notas}\nMédia = ${mediaPonderada}\n${estadoAluno}`);
        break;
    }
}

calcularMediaPoderada(1, [8, 9, 10]);
calcularMediaPoderada(2, [5, 9, 7]);
calcularMediaPoderada(3, [4.5, 4.15, 5.1]);
calcularMediaPoderada(-1, [4, 6, 10]);