// const trainer = {
//   name: "Arturo",
//   age: 27,
//   badges: 7,
//   isPartner: true,
// };

const trainers = [
  {
    name: "Arturo",
    age: 27,
    badges: 7,
    isPartner: true,
  },
  {
    name: "Javier",
    age: 17,
    badges: 8,
    isPartner: true,
  },
  {
    name: "Edmundo",
    age: 13,
    badges: 8,
    isPartner: true,
  },
];

function accessValidation(trainer) {
  const trainerAge = trainer.age;
  const isPartner = trainer.isPartner;
  const badges = trainer.badges;

  if (trainerAge >= 17 && isPartner) {
    document.write(
      `${trainer.name}, tenés ${badges} medallas, podés entrar a nuestro humilde castisho`
    );
  } else if (trainerAge >= 17 && !isPartner) {
    document.write("Debes ser partner para entrar, andá pa cha bobo!");
  } else {
    document.write(
      "Para pertener al club, debés tener al menos 17 años, pibito."
    );
  }
}

const selectTrainer = document.getElementById("trainer-list");

let HTMLSelectAcc = "";

trainers.forEach((trainer) => {
  HTMLSelectAcc += `
    <option value="${trainer.name}">
      ${trainer.name}
    </option>
    `;
});

selectTrainer.innerHTML = HTMLSelectAcc;

selectTrainer.addEventListener("change", (e) => {
  const selectedTrainer = e.target.value
  
  const resultTrainer = trainers.find((trainer) => trainer.name === selectedTrainer)

  accessValidation(resultTrainer)
});
