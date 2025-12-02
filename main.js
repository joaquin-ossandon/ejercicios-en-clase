// const nombre = prompt("Cuál es tu nombre?"); // Angela
// const apellido = prompt("Ahora tu apellido"); // Berrios

// const resultado = calculateUserName(nombre, apellido); // aber67

// console.log(resultado);

// function calculateUserName(nombre, apellido) {
//   const inicialNombre = nombre.charAt(0); // A
//   const tresLetrasApellido = apellido.slice(0, 3); // Ber

//   const inicialAMinuscula = inicialNombre.toLocaleLowerCase(); // A -> a
//   const tresLetrasAMinuscula = tresLetrasApellido.toLocaleLowerCase(); // Ber -> ber

//   // calculo dos digitos a la vez
//   const dosDigitos = Math.floor(Math.random() * 100) + 10; // 0.678 -> 67.8 -> 67 -> 77
//   // 0.001 -> 0.1 -> 0 -> 10

//   // Primera forma de unificar nuestros resultados
//   const resultadoUserName =
//     inicialAMinuscula + tresLetrasAMinuscula + dosDigitos; // aber77

//   return resultadoUserName;
// }

const persona = {
  nombre: "Juanita",
  apellido: "Alpaca",
  edad: 47,
  toUserName: function () {
    const inicialNombre = this.nombre.charAt(0); // A
    const tresLetrasApellido = this.apellido.slice(0, 3); // Ber

    const inicialAMinuscula = inicialNombre.toLocaleLowerCase(); // A -> a
    const tresLetrasAMinuscula = tresLetrasApellido.toLocaleLowerCase(); // Ber -> ber

    const result = inicialAMinuscula.concat(tresLetrasAMinuscula, this.edad);

    return result;
  },
};

const personaUserName = persona.toUserName()

console.log(personaUserName)