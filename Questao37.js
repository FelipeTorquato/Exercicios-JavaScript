/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos
*/

const progressaoAritmetica = function (n, a1, r) {
    let termoInicial = a1;
    let termoFinal;
    console.log("Progressão aritmetica");
    console.log(a1);
    for (let i = 0; i < n - 1; i++) {
        a1 = a1 + r;
        console.log(a1);
        termoFinal = a1;
    }
    let soma = ((termoInicial + termoFinal) * n) / 2;
    console.log(`A soma dos termos da PA é ${soma}\n`);
}

const progressaoGeometrica = function (n, a1, r) {
    let termoInicial = a1;
    let soma = a1;
    let termoFinal;
    console.log("Progressão aritmetica");
    console.log(a1);
    for (let i = 0; i < n - 1; i++) {
        a1 = a1 * r;
        console.log(a1);
        soma += a1;
    }
    console.log(`A soma dos termos da PG é ${soma}\n`);
}

progressaoAritmetica(5, 2, -2);
progressaoGeometrica(5, 2, -2);