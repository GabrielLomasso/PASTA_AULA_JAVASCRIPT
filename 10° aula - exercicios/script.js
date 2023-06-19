let receber = document.getElementById("receber")
let dia = document.getElementById("dia")

function DIA(){
    switch(receber.value){
        case "1":
            dia.innerHTML = ("Hoje é segunda-feira, e é dia útil")
        break
        case "2":
            dia.innerHTML = ("Hoje é terça-feira, e é dia útil")
        break
        case "3":
            dia.innerHTML = ("Hoje é quarta-feira, e é dia útil")
        break
        case "4":
            dia.innerHTML = ("Hoje é quinta-feira, e é dia útil")
        break
        case "5":
            resposta.innerHTML = ("Hoje é sexta-feira, e é dia útil")
        break
        case "6":
            dia.innerHTML = ("Hoje é sabado, e é final de semana")
        break
        case "7":
            dia.innerHTML = ("Hoje é domingo, e é final de semana")
        break
        default:
            dia.innerHTML = ("Inválido")
    }
}

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let operador = document.getElementById("operador")
let apresentacao = document.getElementById("apresentacao")
let resposta

function CALCULADORA(){
    switch(operador.value) {
        case "+":
            resposta = parseFloat(num1.value)  + parseFloat(num2.value);
            apresentacao.innerHTML = "O resultado da soma é: " + resposta
        break
        case "-":
            resposta = parseFloat(num1.value)  - parseFloat(num2.value);
            apresentacao.innerHTML = "O resultado da subtração é: " + resposta
        break
        case "*":
            resposta = parseFloat(num1.value)  * parseFloat(num2.value);
            apresentacao.innerHTML = "O resultado da multiplicação é: " + resposta
        break
        case "/":
            resposta = parseFloat(num1.value)  / parseFloat(num2.value);
            apresentacao.innerHTML = "O resultado da divisao é: " + resposta
        break
        default:
            apresentacao.innerHTML("Inválido")
    }
}