let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let conta
let resultado = document.getElementById("resultado");

function Calculo(){
    conta = (parseFloat(num1.value) * parseFloat(num2.value))/2
    resultado.innerHTML = (conta + "m²")
}