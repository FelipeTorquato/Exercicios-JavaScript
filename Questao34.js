/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras
*/

function conferirStrings(string1, string2) {
    let estaContido = true;
    string1.toUpperCase();
    string2.toUpperCase();
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i);
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j);
            if (caractereString1 === caractereString2) {
                estaContido = true;
                break;
            } else {
                estaContido = false;
            }
        }
        if (!estaContido) {
            return estaContido;
        }
    }
    return estaContido;
}

let string1 = "ola";
let string2 = "Hola";
console.log(conferirStrings(string1, string2));