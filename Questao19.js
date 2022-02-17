/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100    Cachorro Quente      R$ 3,00
200    Hambúrguer Simples   R$ 4,00
300    Cheeseburguer        R$ 5,50
400    Bauru                R$ 7,50
500    Refrigerante         R$ 3,50
600    Suco                 R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente
*/

const pedirLanche = function (codigoItem, quantidadeItens) {
    quantidadeItens = Math.floor(quantidadeItens);
    let precoASerPago;
    switch (codigoItem) {
        case "100":
            precoASerPago = quantidadeItens * 3;
            console.log(`Item ${codigoItem}: Cachorro Quente, Preço a ser pago: R$ ${precoASerPago.toFixed(2)}`);
            break;
        case "200":
            precoASerPago = quantidadeItens * 4;
            console.log(`Item ${codigoItem}: Hambúrguer Simples, Preço a ser pago: R$ ${precoASerPago.toFixed(2)}`);
            break;
        case "300":
            precoASerPago = quantidadeItens * 5.5;
            console.log(`Item ${codigoItem}: Cheeseburguer, Preço a ser pago: R$ ${precoASerPago.toFixed(2)}`);
            break;
        case "400":
            precoASerPago = quantidadeItens * 7.5;
            console.log(`Item ${codigoItem}: Bauru, Preço a ser pago: R$ ${precoASerPago.toFixed(2)}`);
            break;
        case "500":
            precoASerPago = quantidadeItens * 3.5;
            console.log(`Item ${codigoItem}: Refrigerante, Preço a ser pago: R$ ${precoASerPago.toFixed(2)}`);
            break;
        case "600":
            precoASerPago = quantidadeItens * 2.8;
            console.log(`Item ${codigoItem}: Suco, Preço a ser pago: R$ ${precoASerPago.toFixed(2)}`);
            break;
        default:
            console.log("Produto não existente.");
    }
}

pedirLanche("100", 3);
pedirLanche("200", 3);
pedirLanche("300", 2);
pedirLanche("400", 2);
pedirLanche("500", 1);
pedirLanche("600", 2);
pedirLanche("700", 5);