const lists = {
  animalitos: {
    sectionName: "Mis animalitos",
    list: [
      "gatito",
      "perrito",
      "conejito",
      "cocodrilito",
      "gusanito",
      "pollito",
      "periquito",
      "mapachito",
      "patito",
    ],
  },
  compinches: {
    sectionName: "Mis compinches",
    list: [
      "Axel",
      "Trillo",
      "Oliver",
      "Valentina",
      "David",
      "Guillermo",
      "Alexander",
      "Nicolas",
      "Noemy",
    ],
  },
};

const animalListElement = document.querySelector("section > ul");
const compinchesListElement = document.querySelector("section > div > ul");
const listElements = document.querySelectorAll("ul");

listElements.forEach((el) => {
  el.addEventListener("click", (e) => {
    const element = e.target.id;
    removeElement(element);
    e.target.remove();
  });
});

console.log(listElements);

function renderArrayElements(array, idArray, HTMLElement) {
  for (let index = 0; index < array.length; index++) {
    HTMLElement.innerHTML += `<li id=${idArray}-${array[index]}>${array[index]}</li>`;
  }
}

function removeElement(element) {
  const splittedElement = element.split("-");
  const idArray = splittedElement[0];
  const value = splittedElement[1];

  const elementFound = lists[idArray].indexOf(value);
  lists[idArray].splice(elementFound, 1);
}

renderArrayElements(lists.animalitos, "animalitos", animalListElement);
renderArrayElements(lists.compinches, "compinches", compinchesListElement);
