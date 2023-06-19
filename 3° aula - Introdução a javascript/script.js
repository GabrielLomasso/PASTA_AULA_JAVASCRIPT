var N1 = document.getElementById("N1");
var N2 = document.getElementById("N2");
var resultado = document.getElementById("resultado");
var soma;
var subtrair;
var dividir;
var multiplicar;

function SOMA(){
    soma = parseInt(N1.value) + parseInt(N2.value);
    resultado.innerHTML = soma;
}
function SUBTRAIR(){
    subtrair = parseInt(N1.value) - parseInt(N2.value);
    resultado.innerHTML = subtrair;
}
function MULTIPLICAR(){
    multiplicar = parseInt(N1.value) * parseInt(N2.value);
    resultado.innerHTML = multiplicar;
}
function DIVIDIR(){
    dividir = parseInt(N1.value) / parseInt(N2.value);
    resultado.innerHTML = dividir;
}







