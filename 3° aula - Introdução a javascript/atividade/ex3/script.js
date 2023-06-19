var metro = document.getElementById("metros");
var resultado = document.getElementById("resultado");
var centimetros;

function METROS(){
    centimetros = parseFloat(metro.value) * 100
    resultado.innerHTML = centimetros;
}