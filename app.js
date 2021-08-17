const convertButton = document.getElementById("convert-button");
const resetButton = document.getElementById("reset-button");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const result = document.getElementById("result");

const reset = () => {
  heightInput.value = "";
  weightInput.value = "";
};

const calculateBMI = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = enteredHeight / (enteredHeight * enteredWeight);

  if (isNaN(bmi)) {
    alert("Not a number, please check inputs");
    return;
  }

  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
  <ion-card-content>
    <h2>${bmi}</h2>
  </ion-card-content>
  `;
  result.innerHTML = "";
  result.appendChild(resultElement);
};

convertButton.addEventListener("click", calculateBMI);
resetButton.addEventListener("click", reset);
