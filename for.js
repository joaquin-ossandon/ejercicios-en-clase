const animalitos = [
  "gatito",
  "perrito",
  "conejito",
  "cocodrilito",
  "gusanito",
  "pollito",
  "periquito",
  "mapachito",
  "patito",
];

const animalListElement = document.querySelector("section > ul");

console.log(animalListElement);

for (let index = 0; index < animalitos.length; index++) {
  animalListElement.innerHTML += `<li>${animalitos[index]}</li>`;
}

animalListElement.innerHTML += "<li>-----------------</li>";

for (const animalito of animalitos) {
  animalListElement.innerHTML += `<li>${animalito}</li>`;
}

console.log("Terminó a ejecuciónn");

const array = [
  ["Juan", 19, "masculino"],
  ["Maria", 24, "femenino"],
];

const maria = array[1][1];

const personas = [
  { nombre: "juan", edad: 19, sexo: "masculino" },
  { nombre: "maria", edad: 24, sexo: "femenino" },
];

console.log(personas[0]);
