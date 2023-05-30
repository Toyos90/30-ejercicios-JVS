//---------------objetos-------------------//
var coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "rojo",
    motor: {
      tipo: "gasolina",
      cilindros: 4,
      potencia: "150 hp"
    },
    puertas: 4
  };
  
  function obtenerMarca(objetoCoche) {
    return objetoCoche.marca;
  }
  
  function obtenerCantidadDePuertas(objetoCoche) {
    return objetoCoche.puertas;
  }
  
  function obtenerTipoDeMotor(objetoCoche) {
    return objetoCoche.motor.tipo;
  }
  
  console.log(obtenerMarca(coche));
  console.log(obtenerCantidadDePuertas(coche));
  console.log(obtenerTipoDeMotor(coche));
  alert(obtenerMarca(coche));
  alert(obtenerCantidadDePuertas(coche));
  alert(obtenerTipoDeMotor(coche));
  