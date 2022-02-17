/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const precoPlanoDeSaude = function (idade) {
    let taxaInicial = 100;
    let precoFinal;
    if (idade < 0) {
        console.log("Idade inválida.");
    } else {
        if (idade < 10 && idade >= 0) {
            precoFinal = taxaInicial + 80;
        } else if (idade >= 10 && idade <= 30) {
            precoFinal = taxaInicial + 50;
        } else if (idade > 30 && idade <= 60) {
            precoFinal = taxaInicial + 95;
        } else if (idade > 60) {
            precoFinal = taxaInicial + 130;
        }
        console.log(`O preço a ser pago pelo plano de saúde é de R$ ${precoFinal}`);
    }
}

precoPlanoDeSaude(-1);
precoPlanoDeSaude(7);
precoPlanoDeSaude(20);
precoPlanoDeSaude(45);
precoPlanoDeSaude(61);