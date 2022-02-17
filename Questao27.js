/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
*/

/*function calcularAltura(alturaCrianca1, alturaCrianca2, taxaDeCrescimento1, taxaDeCrescimento2) {
    let menorCrianca;
    let menorAltura;
    let maiorAltura;
    let contAnos = 0;
    let taxaDeCrescimentoMenor;
    let taxaDeCrescimentoMaior;
    if (alturaCrianca1 == alturaCrianca2) {
        console.log("As duas crianças tem a mesma altura.");
    } else if (alturaCrianca1 > alturaCrianca2) {
        console.log("A menor criança é a 2.");
        menorCrianca = 2;
        menorAltura = alturaCrianca2;
        maiorAltura = alturaCrianca1;
        taxaDeCrescimentoMenor = taxaDeCrescimento2;
        taxaDeCrescimentoMaior = taxaDeCrescimento1;
    } else if (alturaCrianca1 < alturaCrianca2) {
        console.log("A menor criança é a 1.");
        menorCrianca = 1;
        menorAltura = alturaCrianca1;
        maiorAltura = alturaCrianca2;
        taxaDeCrescimentoMenor = taxaDeCrescimento1;
        taxaDeCrescimentoMaior = taxaDeCrescimento2;
    }
    while (menorAltura < maiorAltura) {
        menorAltura = menorAltura + taxaDeCrescimentoMenor;
        maiorAltura = maiorAltura + taxaDeCrescimentoMaior;
        contAnos++;
    }
    console.log(`A criança menor passará a outra em ${contAnos} anos.`)
}

calcularAltura(150, 2, 130, 4);*/

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));