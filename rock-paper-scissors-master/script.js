const buttons = document.querySelectorAll(".btn-circle");
const choices = ["paper", "rock", "scissors"];
const scoreEl = document.getElementById("score");

// console.log(pickRandomChoice());

let userChoice = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    console.log(userChoice);
  });
});

function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
