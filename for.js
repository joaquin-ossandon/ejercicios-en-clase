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
const listElements = document.querySelectorAll("ul");

listElements.forEach((el) => {
  el.addEventListener("click", (e) => {
    const element = e.target.textContent;
    removeElement(element);
    e.target.remove()
  });
});

console.log(listElements);

function renderArrayElements(array, element) {
  for (let index = 0; index < array.length; index++) {
    element.innerHTML += `<li>${array[index]}</li>`;
  }
}

function removeElement(element) {
  if (animalitos.includes(element)) {
    const elementFound = animalitos.indexOf(element);
    animalitos.splice(elementFound, 1);
  } else if (compinches.includes(element)) {
    const elementFound = compinches.indexOf(element);
    compinches.splice(elementFound, 1);
  }
}

renderArrayElements(animalitos, animalListElement);
renderArrayElements(compinches, compinchesListElement);
