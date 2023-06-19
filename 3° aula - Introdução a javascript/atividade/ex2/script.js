var conversao = document.getElementById("conversao");
var dolar = document.getElementById("dolar");
var mult;
var resultado = document.getElementById("resultado");

function CONVERSAO(){
    mult = parseFloat(conversao.value) * parseFloat(dolar.value);
    resultado.innerHTML = mult;
}