let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")


function CLICAR(){
    switch(numero.value){
        case "": 
            resposta.innerHTML = ("Voce nao escolheu uma fruta");
        break
        case "1": 
            resposta.innerHTML = ("Voce escolheu maça");
        break
        case "2": 
            resposta.innerHTML = ("Voce escolheu melancia");
        break
        case "3": 
            resposta.innerHTML = ("Voce escolheu pera");
        break
        case "4": 
            resposta.innerHTML = ("Voce escolheu abacaxi");
        break
        default: 
            resposta.innerHTML = ("Nao tem essa parada aqui")


    }

}