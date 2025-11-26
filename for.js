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

const compinches = [
  "Axel",
  "Trillo",
  "Oliver",
  "Valentina",
  "David",
  "Guillermo",
  "Alexander",
  "Nicolas",
  "Noemy",
];

const animalListElement = document.querySelector("section > ul");
const compinchesListElement = document.querySelector("section > div > ul");

function renderArrayElements(array, element) {
  for (let index = 0; index < array.length; index++) {
    element.innerHTML += `<li>${array[index]}</li>`;
  }
}

renderArrayElements(compinches, compinchesListElement);
renderArrayElements(animalitos, animalListElement);
