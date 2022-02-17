/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1
*/

const trocarDinheiro = function (valor) {
    let quant100 = 0;
    let quant50 = 0;
    let quant10 = 0;
    let quant5 = 0;
    let quant1 = 0;
    let valorAtual = valor;
    while (valorAtual !== 0) {
        if (valorAtual >= 100) {
            valorAtual = valorAtual - 100;
            quant100++;
            continue;
        } else if (valorAtual >= 50) {
            valorAtual = valorAtual - 50;
            quant50++;
            continue;
        } else if (valorAtual >= 10) {
            valorAtual = valorAtual - 10;
            quant10++;
            continue;
        } else if (valorAtual >= 5) {
            valorAtual = valorAtual - 5;
            quant5++;
            continue;
        } else if (valorAtual >= 1) {
            valorAtual = valorAtual - 1;
            quant1++;
            continue;
        }
    }
    if (quant100 > 0) {
        console.log(`${quant100} notas de R$ 100`);
    }
    if (quant50 > 0) {
        console.log(`${quant50} notas de R$ 50`);
    }
    if (quant10 > 0) {
        console.log(`${quant10} notas de R$ 10`);
    }
    if (quant5 > 0) {
        console.log(`${quant5} notas de R$ 5`);
    }
    if (quant1 > 0) {
        console.log(`${quant1} notas de R$ 1`);
    }
    console.log("\n");
}

trocarDinheiro(18);
trocarDinheiro(78);
trocarDinheiro(378);