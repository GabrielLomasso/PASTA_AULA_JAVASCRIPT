console.log("soma +, subtração - , multiplicação * , divisão / ")
console.log(" potencia **, resto %, raiz de 2 = 2**(1/2), raiz cubica de 2 = 2**(1/3)")

let resultadoSoma = document.getElementById("soma")
let resultadoSub = document.getElementById("subtracao")
let resultadoMult = document.getElementById("multiplicacao")
let resultadoDiv = document.getElementById("divisao")
let resultadoPot = document.getElementById("potencia")
let resultadoResto = document.getElementById("resto")
let x;
let y;
let z;

x = 5;
y = 2;
z = x + y;

resultadoSoma.innerHTML = z;

let a = x - y;

resultadoSub.innerHTML = a;

let b = x * y;

resultadoMult.innerHTML = b;

let c = x / y;

resultadoDiv.innerHTML = c;

let d = x ** y;

resultadoPot.innerHTML = d;

let e = x % y;

resultadoResto.innerHTML = e;



