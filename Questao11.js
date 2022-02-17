/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false
*/

function checarBissexto(ano) {
    let eBissexto
    if (ano <= 0) {
        eBissexto = false
        console.log(`O ano ${ano} NÂO É bissexto!`)
    } else if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        eBissexto = true
        console.log(`O ano ${ano} É bissexto!`)
    } else {
        eBissexto = false
        console.log(`O ano ${ano} NÂO É bissexto!`)
    }
    return eBissexto
}

checarBissexto(0)
checarBissexto(4)
checarBissexto(100)
checarBissexto(400)
checarBissexto(800)
checarBissexto(2020)
checarBissexto(2021)