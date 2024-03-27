let num1 = 2
const num2 = 3
var msg = "Olá amigos! Esse é o número:"

console.log(msg , num1)
console.log(num1 + num2)
console.log(typeof num1)
console.log(typeof msg)
//Métodos são funcionalidades prontas da linguagem e que 
//podem receber parâmetros


function Somar () {
    n1 = 2
    n2 = 5
    console.log("O resultado é:", n1 + n2)
} //Função é algo que eu crio! mas... tudo no js
// é função

Somar() // Aqui ela é executada

function SomarComParametros (n1 , n2) {
    let resultado = "O resultado é:" + (n1 + n2)
    console.log(resultado)
}  

SomarComParametros(16, 30)
SomarComParametros(24, 24)
SomarComParametros(11, 11)

const Teste = (n) => {
    let result =  n % 2

    if (result == 1 ) {
        return "Número ímpar"
    } else {
        return "Número par"
    }  
}

console.log(Teste(2))
console.log(Teste(9))
Teste(5) //Essa linha não vai executar pq não tem console
