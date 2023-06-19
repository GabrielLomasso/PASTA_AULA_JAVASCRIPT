let idade = document.getElementById("idade")
let titulo = document.getElementById("titulo")
let resultado = document.getElementById("resultado")

function FUNCTION() {
    
    if (idade.value >= 16 && titulo.value == "sim") {
        resultado.innerHTML = "Voce pode votar"
    }else{
        resultado.innerHTML = "Voce nao pode votar"
    }
    
}


let minutos;
let preco;

if(minutos <= 200){
    preco = 0.2;
}else if( minutos <= 400){
    preco = 0.18
}else{
    preco = 0.15
}