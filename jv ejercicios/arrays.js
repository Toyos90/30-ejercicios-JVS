const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
//--------funcion para añadir numero al array---------//
function addNumberToArray(arr, number) {
    arr.push(number);
  };
  //-------función que elimina los números pares del array------//
  removeEvenNumbers(arr);
  //---------función que devuelve el número mayor del array------//
  getMaxNumber(arr);
  //---------función que devuelve el número menor del array.....//
  getMinNumber(arr);
  //----------función que convierta en minúsculas todas las letras de un texto.-----//
  const texto = "TEXTO EN MAYÚSCULAS";
  texto.toLowerCase();
  //----------funcion para convertir las letras de un texto en mayusculas-----------//
  const textos = "texto en minusculas";
  convertirAMinusculas(textos);
  //-------función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula--//
  const nombres = ["juan", "ana", "pedro"];
  function convertirPrimerLetraMayuscula(nombres) {
    const nombresMayusculas = nombres.map(nombre => {
      const primeraLetra = nombre.charAt(0).toUpperCase();
      const restoNombre = nombre.slice(1);
      return primeraLetra + restoNombre;
    });
    return nombresMayusculas;
  };