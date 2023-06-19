let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0]

btn.addEventListener("click", Abrir)
function Abrir(){
    modal.style.display = "block"
}

span.addEventListener("click", Fechar)

function Fechar(){
    modal.style.display = "none"
}