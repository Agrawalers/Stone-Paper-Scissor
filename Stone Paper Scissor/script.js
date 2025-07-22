
let userScore = document.querySelector(".player-points");
let compScore = document.querySelector(".computer-points");
let userMove = document.querySelectorAll(".choice-button");
let result = document.querySelector(".result-display");
let userPoint = 0;
let compPoint = 0;
userMove.forEach((move) => {
  move.addEventListener("click", (compMove) => {
    let userChoice = move.getAttribute("id");
    const compArray = ["rock", "paper", "scissor"];
    compMove = compArray[Math.floor(Math.random() * 3)];

    playGame(userChoice, compMove);
  })
});

function playGame(userChoice, compMove) {
  if (userChoice === compMove) {
    result.innerText = "Match is draw";
  } else if (userChoice === "rock") {
    (compMove === "paper")
      ? (result.innerText = "Computer Won! Computer chose paper", compPoint++)
      : (result.innerText = "User Won! Computer chose scissor", userPoint++);
  } else if (userChoice === "paper") {
    (compMove === "scissor")
      ? (result.innerText = "Computer Won! Computer chose scissor", compPoint++)
      : (result.innerText = "User Won! Computer chose rock", userPoint++);
  } else {
    (compMove === "rock")
      ? (result.innerText = "Computer Won! Computer chose rock", compPoint++)
      : (result.innerText = "User Won! Computer chose paper", compPoint++);
  }

  userScore.innerText = userPoint;
  compScore.innerText = compPoint;
};