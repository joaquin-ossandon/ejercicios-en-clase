const formBtn = document.querySelector("button");

const inputPetName = document.getElementById("pet-name");
const inputPetAge = document.getElementById("pet-age");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const petName = inputPetName.value;
  const inputPetAge = inputPetAge.value;

  petAgeToHumanAgeConversion(petName, petAge);
});

function petAgeToHumanAgeConversion(petName, petAge) {
  const CONVERSION_FACTOR = 7;
  const ageResult = petAge * CONVERSION_FACTOR;
  const OLD_LIMIT = 30;

  console.log(
    `Tu perrito "${petName}" que tiene ${petAge} años. 
Tiene como ${ageResult} años humanos.`
  );

  if (ageResult > OLD_LIMIT) {
    console.log(`Tu perrito ${petName} está viejito`);
  } else {
    console.log(`Tu perrito ${petName} está chiquito`);
  }
}
