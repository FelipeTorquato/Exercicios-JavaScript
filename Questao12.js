/*
Faça um algoritmo que calcule o fatorial de um número
*/

function calcularFatorial(num) {
    let res = num;
    num--;
    while (num > 0) {
        res *= num;
        num--;
    }

    console.log(res);
}

calcularFatorial(3);
calcularFatorial(2);
calcularFatorial(1);
calcularFatorial(4);
calcularFatorial(5);
calcularFatorial(10);