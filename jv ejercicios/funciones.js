//--------fuciones-------------//
function saludar(nombre) {
    var mensaje = "Hola, " + nombre;
    console.log(mensaje);
    document.write(mensaje);
  }
//------------------------------//
function sumar(numero1, numero2) {
    var resultado = numero1 + numero2;
    console.log(resultado);
    document.write(resultado);
    return resultado;
  }
  //-----------------------------//
  function esPar(numero) {
    if (numero % 2 === 0) {
      console.log("El número es par");
      document.write("El número es par");
      return true;
    } else {
      console.log("El número es impar");
      document.write("El número es impar");
      return false;
    }
  }
