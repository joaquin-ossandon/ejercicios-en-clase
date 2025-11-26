function saludarFamilia(apellido, saludo) {
  return function (nombre) {
    // La función anidada 'saludarMiembro' puede usar 'saludo' y 'apellido'
    // que pertenecen a la función externa 'saludarFamilia'.
    console.log(`${saludo} ${nombre} ${apellido}`);
  };
}

const saludoFamiliaGonzalez = saludarFamilia("González", "Holandas!");

saludoFamiliaGonzalez("Sebastian");

saludoFamiliaGonzalez("Anibal");

saludoFamiliaGonzalez("Macarena");

function mapArray(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element, index, array);
  }
}

// [1, 2, 3, 4].forEach((el, index, arr) => {
//   console.log(el, index, arr);
// });

mapArray([6, 7, 8, 9], (el, index, arr) => {
  console.log(el, index, arr);
});
