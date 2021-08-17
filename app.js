const convertButton = document.getElementById("convert-button");
const resetButton = document.getElementById("reset-button");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const reset = () => {
  heightInput.value = "";
  weightInput.value = "";
};

const calculateBMI = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = enteredHeight / (enteredHeight * enteredWeight);

  console.log(bmi);
};

convertButton.addEventListener("click", calculateBMI);
resetButton.addEventListener("click", reset);
