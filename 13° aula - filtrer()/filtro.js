let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let mostrar = document.getElementById("mostrar")
let input = document.getElementById("input")

function Apresentar(numeros){
    return numeros > parseFloat(input.value)
} 

function Teste(){
    mostrar.innerHTML = numeros.filter(Apresentar)
}


