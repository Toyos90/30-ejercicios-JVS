// accediendo a un nodo
let saludo_coders = document.getElementById("saludo");
console.log(saludo_coders);

//accediendo al valor de un nodo
let saludo_coders2 = document.getElementById("saludo").textContent;
console.log(saludo_coders2);

//crear elementos
let contenedor = document.getElementById("contenedor");

let parrafo = document.createElement("p");

parrafo.textContent="este es el parrafo 2";

let texto_parrafo = document.createTextNode("este es el parrafo 1");

contenedor.appendChild(parrafo);
parrafo.appendChild(texto_parrafo);

//contenedor.innerHTML = "<h2>subtitulo</h2>";

//estilo

document.querySelector("#saludo").style.color = "red";
document.querySelector("header").style.backgroundcolor = "yellow";