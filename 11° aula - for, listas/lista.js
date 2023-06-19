let tag = document.getElementById("Text_input")

function MinhaFuncao(){
    //Criar um elemento li
    let li = document.createElement('li');
    //Criar um texto
    let texto = document.createTextNode(tag.value)
    //adicionar um texto no elemento
    li.appendChild(texto);
    //adicionar o li na minha lista
    document.getElementById("minhalista").appendChild(li)

}