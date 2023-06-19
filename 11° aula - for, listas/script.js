let x = document.getElementById("nmr_inicio")
let y = document.getElementById("nmr_desejado")


function AREA(){
    while(parseInt(x.value) <= parseInt(y.value)){
        //Criar elemento p
        let p = document.createElement("p")
        //Criar um texto
        let texto = document.createTextNode(x.value)
        //adicionar um texto no elemento    
        p.appendChild(texto)
        //adicionar o elemento no section
        document.getElementById("contar").appendChild(p)
        x.value++
    }
}