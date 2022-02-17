/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false
*/

/*function verificarDivisivel3(x) {
    if (x % 3 == 0) return true
    else return false
}

console.log(verificarDivisivel3(-3))*/

verificarDivisivel3 = x => x % 3 == 0 ? true : false

console.log(verificarDivisivel3(16))