let mostrar = document.getElementById("mostrar")

let car = {
    nome: "Fiat", 
    cor: "Vermelho",
    modelo: "Uno",
}

const aluno = {
    PrimeiroNome:'Johan',
    SegundoNome: 'Carlos',
    idade: 18,
    nacionalidade: 'Bolivia',

}

mostrar.innerHTML = aluno.PrimeiroNome

const pessoa = { 
    PrimeiroNome: "Brunão",
    SegundoNome: "Ruiz",
    id: 335214,
    fullNome: function(){
        return this.PrimeiroNome + " " + this.SegundoNome
    }
}


mostrar.innerHTML = pessoa.fullNome()


//vetor

let cor = ["Azul", "Vermelho"]

const tarefas = [
    {
        id: 1,
        texto: "Levar o lixo para fora",
        Completado: true,
    },
    {
        id: 2,
        texto: "Encontrar com o chefe",
        Completado: true,
    },
    {
        id: 3,
        texto: "Consuta no dentista",
        Completado: false,
    }
]

tarefas.forEach(teste)

function teste(tarefas){
    console.log(tarefas.texto)
}