let idade = [20, 19, 17, 26, 27]
// filter() cria um vetor/array com o resultado do filtro aplicado pelo método, ou seja, os elementos que "passaram" na condição configurada no filtro

let mostrar = document.getElementById("demonstracao")

mostrar.innerHTML = idade.filter(MaiordeIdade)

function MaiordeIdade(idade){
    return idade > 17
}


