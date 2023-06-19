let VidaHeroi
let AtaqueHeroi
let XPHeroi
let NvlHeroi
let ClassesHerois = ["Mago", "Ninja", "Viking"]
let NickName
let mensagemNome



NickName = document.getElementById("NomeDoPersonagem")
mensagemNome = document.getElementById("Mensagem")

function Enviar(){
    if(NickName.value == ""){
        mensagemNome.innerHTML = "Escreva seu nome para iniciarmos a aventura"
    }else{
        mensagemNome.innerHTML = "Olá, " + NickName.value + ". Seja bem vindo ao jogo! Agora escolha sua classe"
    }
}