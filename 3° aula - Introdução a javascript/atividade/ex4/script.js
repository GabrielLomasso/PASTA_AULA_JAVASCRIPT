var mult1 = document.getElementById("multiplicacao1")
var mult2 = document.getElementById("multiplicacao2")
var mult3 = document.getElementById("multiplicacao3")
var mult4 = document.getElementById("multiplicacao4")
var acabado
var resultado = document.getElementById("resultado")

function CONTA(){
    acabado = parseFloat(mult1.value) * parseFloat(mult2.value) * parseFloat(mult3.value) * parseFloat(mult4.value)
    resultado.innerHTML = acabado

}