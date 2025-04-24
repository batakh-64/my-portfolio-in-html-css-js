let guessButton = document.getElementById("guessButton");
let rangeButton = document.getElementById("rangeButton");
let setDefault = document.getElementById("setDefault");
let rangeMessage = document.getElementById("heading2txt");
let guess = document.getElementById("guess");
let message1 = document.getElementById("message");
let message2 = document.getElementById("message2");
let minInput = document.getElementById("range1");
let maxInput = document.getElementById("range2");
let min = 1;
let max = 100;
let secretNumber = Math.floor(Math.random() * (max - min + 1)) + 1;
let attempts = 0;
let userGuess = null;








// Function to generate a random number between min and max

generateSecretNumber = () => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}




// set default values for min and max

setDefault.addEventListener("click", () => {
  min = 1;
  max = 100;
  try {
    minInput.value = 1;
    maxInput.value = 100;

  } catch (error) {
    alert("Error resetting to default values: " + error.message);
  }
  secretNumber = generateSecretNumber();
  rangeMessage.textContent = `Guess a number between ${min} and ${max}`;
  message1.textContent = "";
  message2.textContent = "";
  attempts = 0;
});





// range button to set the range

rangeButton.addEventListener("click", () => {

  if (minInput.value === "" || maxInput.value === "") {
    message2.textContent = `Please enter both min and max values.`;
    message2.style.color = "#C1121F";
    return;
  }
  else if (minInput.value >= maxInput.value) {
    message2.textContent = `Please enter min value lower then max value.`;
    message2.style.color = "#C1121F";
    return;
  }

  try {
    min = minInput.value;
    max = maxInput.value;
  } catch (error) {
    alert("Error resetting to default values: " + error.message);
  }
  secretNumber = Math.floor(Math.random() * max);
  rangeMessage.textContent = `Guess a number between ${min} and ${max}`;
  message1.textContent = "";
  message2.textContent = "";
  attempts = 0;
});






guessButton.addEventListener("click", () => {
  userGuess = guess.value;
  if (guess.value === "") {
    message1.textContent = `Please enter a valid number.`;
    message1.style.color = "#C1121F";
    return;
  }
  let difference = Math.abs(userGuess - secretNumber);

  try {
    if (userGuess < min || userGuess > max) {
      message1.textContent = `Number must be between ${min} and ${max}.`;
      message1.style.color = "#C1121F";
    }
    
    attempts++;
    
    if (userGuess < secretNumber) {
      if (difference <= 5) {
        message1.textContent = "A little low! Getting close.";
        message1.style.color = "#780000";
      } else {
        message1.textContent = "Too low! Try again.";
        message1.style.color = "#780000";
      }
    } else if (userGuess > secretNumber) {
      if (difference <= 5) {
        message1.textContent = "A little high! Getting close.";
        message1.style.color = "#780000";
      } else {
        message1.textContent = "Too high! Try again.";
        message1.style.color = "#780000";
      }
    } else {
      message1.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
      message1.style.color = "black";
    }

  } catch (error) {
    alert("Error processing guess: " + error.message);
  }
  guess.value = "";

});









