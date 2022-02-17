/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido
*/

const aumentoSalario = function (plano, salarioAtual) {
    let novoSalario;
    switch (plano) {
        case "A":
            novoSalario = salarioAtual * 1.1;
            novoSalario = console.log(`O novo salário será de R$ ${novoSalario.toFixed(2)}`);
            break;
        case "B":
            novoSalario = salarioAtual * 1.15;
            novoSalario = console.log(`O novo salário será de R$ ${novoSalario.toFixed(2)}`);
            break;
        case "C":
            novoSalario = salarioAtual * 1.2;
            novoSalario = console.log(`O novo salário será de R$ ${novoSalario.toFixed(2)}`);
            break;
        default:
            console.log("Plano inválido.")
    }
}

aumentoSalario("A", 1500);
aumentoSalario("B", 1750);
aumentoSalario("C", 2400);