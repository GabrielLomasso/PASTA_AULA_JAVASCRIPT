let nomeAluno = document.getElementById("nome")
let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2")
let nota3 = document.getElementById("nota3")
let media
let abaDireia = document.getElementById("abaDireita")
let nomeFinal = document.getElementById("Nome_result")
let mediaFinal = document.getElementById("media_result")
let situacao = document.getElementById("situacao_result")


function Media(){
    media = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3
    abaDireia.style.display = "block"
    nomeFinal.innerHTML = nomeAluno.value
    mediaFinal.innerHTML = media

    if(media >= 7){
        situacao.innerHTML = "Aprovado"
        situacao.style.backgroundColor ="green"
    }else{
        situacao.innerHTML = "Reprovado"
        situacao.style.backgroundColor ="red"
    }
}