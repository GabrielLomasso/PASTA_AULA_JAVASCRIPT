let num = document.getElementById("recebeValor")
let resultado = document.getElementById("parOuImpar") 

function PAR(){
    if(num.value % 2 == 0){
        resultado.innerHTML = ("Esse numero é par");
        }else{
        resultado.innerHTML = ("Esse numero é impar");
    }
}

