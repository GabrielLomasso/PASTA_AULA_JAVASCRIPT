//Crie função para identificar se um numero é par ou impar

let imPar = (x) =>{
    if(x % 2 == 0){
       return console.log("O numero é par")
    }else{
       return console.log("O numero é impar")
    }
}

console.log(imPar(2))