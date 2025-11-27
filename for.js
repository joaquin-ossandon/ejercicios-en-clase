const lists = [
  {
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
  {
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
  {
    sectionName: "Mis hobbies",
    list: ["Escuchar música", "Trotar", "Programar"],
  },
];

const formatId = (text) => text.replace(" ", "-").toLocaleLowerCase();

const htmlRender = (array, htmlElement, htmlToRender) => {
  array.forEach((el) => {
    htmlElement.innerHTML += htmlToRender(el);
  });
};

htmlRender(
  lists,
  document.body,
  (el) => `<section>
        <header>
          <h1>${el.sectionName}</h1>
        </header>
        <ul id=${formatId(el.sectionName)}>
        </ul>
      </section>`
);

lists.forEach((el) => {
  const listElement = document.getElementById(formatId(el.sectionName));

  htmlRender(el.list, listElement, (el) => `<li>${el}</li>`);
});

// refactorizar:
// la linea 53-55 hace lo mismo que la linea 38-47
// necesitamos una función que reemplace el comportamiento de ambos para seguir el principio DRY (don't repeat yourself)

// const animalListElement = document.querySelector("section > ul");
// const compinchesListElement = document.querySelector("section > div > ul");
// const listElements = document.querySelectorAll("ul");

// listElements.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     const element = e.target.id;
//     removeElement(element);
//     e.target.remove();
//   });
// });

// console.log(listElements);

// function renderArrayElements(array, idArray, HTMLElement) {
//   for (let index = 0; index < array.length; index++) {
//     HTMLElement.innerHTML += `<li id=${idArray}-${array[index]}>${array[index]}</li>`;
//   }
// }

// function removeElement(element) {
//   const splittedElement = element.split("-");
//   const idArray = splittedElement[0];
//   const value = splittedElement[1];

//   const elementFound = lists[idArray].indexOf(value);
//   lists[idArray].splice(elementFound, 1);
// }

// renderArrayElements(lists.animalitos, "animalitos", animalListElement);
// renderArrayElements(lists.compinches, "compinches", compinchesListElement);
