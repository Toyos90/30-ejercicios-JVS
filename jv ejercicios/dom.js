function mostrarMensaje() {
    window.alert("¡Hola! Has hecho clic en el botón.")
};
    //---------------//
    document.getElementById("parrafo").innerHTML = "Este es mi nuevo párrafo.";
//-------------------------------//
function mostrar() {
    document.getElementById("mitexto").style.display = "block";
}

function ocultar() {
    document.getElementById("mitexto").style.display = "none";
}
//---------------------------------//
var nombres = [ "Juan", "Pedro", "Maria", "Ana", "Luis", "Sofia", "Carlos", "Lucia", "Jorge", "Laura"];
function imprimirNombres() {
    var lista = "<ul>";
    for (var i = 0; i < nombres.length; i++) {
      lista += "<li>" + nombres[i] + "</li>";
    }
    lista += "</ul>";
    document.write(lista);
  }

  imprimirNombres();
  //---------------------------------------------------------//
  var numeros = [1, 2, 3, 4 ,5 ,6 ,7];
  function contarNumeros () {
    document.write("El array tiene " + numeros.length + " numeros.");
  }
  contarNumeros();
  //----------------------------------------------------------//
  var form = document.createElement("form");

var nombreLabel = document.createElement("label");
nombreLabel.innerHTML = "Nombre:";
form.appendChild(nombreLabel);

var nombreInput = document.createElement("input");
nombreInput.type = "text";
nombreInput.name = "nombre";
form.appendChild(nombreInput);

var apellidoLabel = document.createElement("label");
apellidoLabel.innerHTML = "Apellido:";
form.appendChild(apellidoLabel);

var apellidoInput = document.createElement("input");
apellidoInput.type = "text";
apellidoInput.name = "apellido";
form.appendChild(apellidoInput);

var emailLabel = document.createElement("label");
emailLabel.innerHTML = "Email:";
form.appendChild(emailLabel);

var emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
form.appendChild(emailInput);

var telefonoLabel = document.createElement("label");
telefonoLabel.innerHTML = "Teléfono:";
form.appendChild(telefonoLabel);

var telefonoInput = document.createElement("input");
telefonoInput.type = "tel";
telefonoInput.name = "telefono";
form.appendChild(telefonoInput);

var enviarButton = document.createElement("button");
enviarButton.type = "submit";
enviarButton.innerHTML = "Enviar";
form.appendChild(enviarButton);

document.body.appendChild(form);
//--------------------------------------------//
var table = document.createElement("table");

var row1 = table.insertRow();
var cell11 = row1.insertCell();
cell11.innerHTML = "nombre";
var cell12 = row1.insertCell();
cell12.innerHTML = "Apellido";
var cell13 = row1.insertCell();
cell13.innerHTML = "Email";

var row2 = table.insertRow();
var cell21 = row2.insertCell();
cell21.innerHTML = "Juan";
var cell22 = row2.insertCell();
cell22.innerHTML = "Pérez";
var cell23 = row2.insertCell();
cell23.innerHTML = "juan";

var row3 = table.insertRow();
var cell31 = row3.insertCell();
cell31.innerHTML = "Marí";
var cell32 = row3.insertCell();
cell32.innerHTML = "González";
var cell33 = row3.insertCell();
cell33.innerHTML = "maria.gonz";

document.body.appendChild(table);
//----------------------------------------------------//
var array = [
    { id: 1, name: "andres", status: "medio-vivos", species: "Humanos", type: "asd", gender: "mascu" },
    { id: 2, name: "JJ", status: "medio-vivos", species: "Humanos", type: "asd", gender: "mascu" },
    { id: 3, name: "verano", status: "medio-vivos", species: "Humanos", type: "asd", gender: "estacion" },
    { id: 4, name: "tom", status: "medio-vivos", species: "Humanos", type: "asd", gender: "gato" },
    { id: 5, name: "andres", status: "medio-vivos", species: "Human", type: "asd", gender: "vikingo" },
    { id: 6, name: "vicky", status: "medio-vivos", species: "humanos", type: "asd", gender: "vikinga" },
    { id: 7, name: "mario", status: "medio-vivos", species: "humanos", type: "asd", gender: "bros" },
    { id: 8, name: "bea", status: "medio-vivos", species:"humanos", type:"asd", gender:"serie"},
    { id: 9, name:"josefa", status:"medio-vivos", species:"humanos", type:"asd", gender:"antonia"},
    { id :10, name:"Nando", status:"medio-vivos", species:"humanos", type:"asd", gender:"indeterminado"}
  ];
  //_---------------------------------------------------------//
for(var i = 0; i < array.length; i++) {
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = array[i].id;
    cell2.innerHTML = array[i].name;
    cell3.innerHTML = array[i].status;
    cell4.innerHTML = array[i].species;
    cell5.innerHTML = array[i].type;
    cell6.innerHTML = array[i].gender;
}