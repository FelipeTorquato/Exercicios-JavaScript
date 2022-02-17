/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch
*/

function verDia(dia) {
    switch (dia) {
        case 1: case 7:
            console.log("Fim de Semana!!!");
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia útil.");
            break;
        default:
            console.log("Dia inválido.")
    }
}

verDia(1)
verDia(2)
verDia(3)
verDia(4)
verDia(5)
verDia(6)
verDia(7)
verDia(0)
verDia(8)