/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos
*/

function jurosSimples(cI, tJ, tA) {
    let total = (cI * tJ * tA)
    console.log(`R$ ${cI + total} em juros simples.`)
}

function jurosCompostos(cI, tJ, tA) {
    let total = (cI * (Math.pow(1 + tJ, tA))).toFixed(2)
    console.log(`R$ ${total} em juros compostos.`)
}

jurosSimples(1000, 0.1, 5)
jurosCompostos(1000, 0.1, 5)