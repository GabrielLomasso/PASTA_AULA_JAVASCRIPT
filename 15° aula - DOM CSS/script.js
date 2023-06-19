//document.getElementById(id).style.

let titulo = document.getElementById("titulo")
titulo.style.backgroundColor = '#CCC'
titulo.style.textAlign = 'center'
titulo.style.borderBottom = '3px solid black'
titulo.style.margin = '20px'

let items = document.getElementsByClassName('item')
console.log(items)
items[0].innerHTML = "Hello World"
items[0].style.fontWeight = 'bold'
items[0].style.backgroundColor = 'yellow'

