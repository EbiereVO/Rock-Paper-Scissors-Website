const buttons = document.querySelectorAll(".btn-circle");
const choices = ["paper", "rock", "scissors"];
const scoreEl = document.getElementById("score");
let score = 0;

// console.log(pickRandomChoice());

let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();

    // console.log(userChoice);
  });
});

function checkWinner() {
  const computerChoice = pickRandomChoice();
  if (userChoice === computerChoice) {
    // draw
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    // user won
    updateScore(1);
  } else {
    // user lost
    updateScore(-1);
  }
}

function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
