// Rock Paper Scissors Game

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementsByClassName("txth2")[0];
let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerScoreValue = 0;
let computerScoreValue = 0;
let playerChoice = 0;
let computerChoice = 0;


computerChoice = Math.floor(Math.random() * 3) + 1;
playerScore.textContent = playerScoreValue;
computerScore.textContent = computerScoreValue;





















function setpic2() {
  if (computerChoice === 1) {
    pic2.style.backgroundImage = "url('/images/rock.png')";
  } else if (computerChoice === 2) {
    pic2.style.backgroundImage = "url('/images/paper.png')";
  } else if (computerChoice === 3) {
    pic2.style.backgroundImage = "url('/images/scissors.png')";
  }
  else {
    pic2.style.backgroundImage = "url('/images/error.png')";
  }
}






function playGame() {
  if (playerChoice === 1 && computerChoice === 3) {
    playerScoreValue++;
    playerScore.textContent = playerScoreValue;
    result.textContent = "🎉 You win! Rock crushes scissors.";
  } else if (playerChoice === 2 && computerChoice === 1) {
    playerScoreValue++;
    playerScore.textContent = playerScoreValue;
    result.textContent = "🎉 You win! Paper covers rock.";
  } else if (playerChoice === 3 && computerChoice === 2) {
    playerScoreValue++;
    playerScore.textContent = playerScoreValue;
    result.textContent = "🎉 You win! Scissors cut paper.";
  } else if (computerChoice === 1 && playerChoice === 3) {
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
    result.textContent = "You lose! Rock crushes scissors.";
  } else if (computerChoice === 2 && playerChoice === 1) {
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
    result.textContent = "You lose! Paper covers rock.";
  } else if (computerChoice === 3 && playerChoice === 2) {
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
    result.textContent = "You lose! Scissors cut paper.";
  } else if (playerChoice === null) {
    result.textContent = "Please select a choice!";
    result.style.color = "#C1121F";
    return;
  } else {
    result.textContent = "It's a tie!";
  }
}



















rock.addEventListener("click", function () {
  playerChoice = 1;
  pic1.style.backgroundImage = "url('/images/rock.png')";
});


paper.addEventListener("click", function () {
  playerChoice = 2;
  pic1.style.backgroundImage = "url('/images/paper.png')";
});


scissors.addEventListener("click", function () {
  playerChoice = 3;
  pic1.style.backgroundImage = "url('/images/scissors.png')";
});






reset.addEventListener("click", function () {


  playerScore.textContent = "0";
  computerScore.textContent = "0";

  pic2.style.backgroundImage = "url('/images/scissors.png')";
  pic1.style.backgroundImage = "url('/images/rock.png')";

  playerChoice = null;
  computerChoice = null;

  result.textContent = "Your Choice";
  result.style.color = "black";

});







start.addEventListener("click", function () {
  if (playerChoice === null) {
    result.textContent = "Please select a choice!";
    result.style.color = "#C1121F";
    return;
  }
  computerChoice = Math.floor(Math.random() * 3) + 1;
  playerScore.textContent = playerScoreValue;
  computerScore.textContent = computerScoreValue;
  playGame();
  setpic2();
});




