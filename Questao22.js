/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido
*/

const valorASerPago = function (mesASerPago, valorUnidade) {
    let mesesPendentes;
    let valorComJuros;
    if (mesASerPago === 1) {
        console.log(`Pagando no mês ${mesASerPago}, o valor é de R$ ${valorUnidade}`);
    } else {
        mesesPendentes = mesASerPago - 1;
        valorComJuros = (valorUnidade * Math.pow(1.05, mesesPendentes)).toFixed(2);
        console.log(`Pagando no mês ${mesASerPago}, o valor é de R$ ${valorComJuros}`);
    }
}

valorASerPago(4, 100);