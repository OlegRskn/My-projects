let score = 0;
let timer = 4;
let timerActive = false;

function finishTheGame() {
  const parent = document.createElement("div");
  parent.classList.add("endgame");
  parent.classList.add("active");

  const finalScore = document.createElement("div");
  const clicksPerSec = document.createElement("div");
  finalScore.classList.add("endgame__score");
  clicksPerSec.classList.add("endgame__score");

  const scoreElement = document.querySelector(".container__info-score");
  const scoreText = scoreElement.textContent;
  finalScore.textContent = scoreText;
  clicksPerSec.textContent = `Clicks per second: ${score / timer}`;

  const newGameButton = document.createElement("button");
  newGameButton.classList.add("endgame__button");
  newGameButton.textContent = "New Game";

  const body = document.querySelector("body");
  body.appendChild(parent);
  parent.appendChild(finalScore);
  parent.appendChild(clicksPerSec);
  parent.appendChild(newGameButton);
  newGameButton.addEventListener("click", deleteActiveBlocks);
  score = 0;
}

function deleteActiveBlocks() {
  document.querySelector(".container__info-score").textContent = "Score: 0";
  const parents = document.querySelectorAll(".endgame");
  parents.forEach((parent) => parent.remove());
}

function startTimer(timer) {
  if (timer === 0) {
    document.querySelector(".container__info-timer").textContent =
      "Time: " + timer;
    timerActive = false;
    finishTheGame();
  } else {
    document.querySelector(".container__info-timer").textContent =
      "Time: " + timer;
    setTimeout(function () {
      startTimer(timer - 1);
    }, 1000);
  }
}
function clickHandler() {
  let newScore = ++score;
  if (!timerActive) {
    timerActive = true;
    startTimer(timer);
  }

  document.querySelector(".container__info-score").textContent =
    "Score: " + newScore;
}

function setTime() {
  const time = new Date();
  const newDiv = document.createElement("div");
  const footer = document.querySelector("footer");
  newDiv.textContent = time.toLocaleTimeString();
  footer.appendChild(newDiv);
}
function changeTime() {
  const time = new Date();
  const newDiv = document.querySelector("footer div");
  newDiv.textContent = time.toLocaleTimeString();
  setTimeout(changeTime, 1000);
}

function init() {
  const button = document.querySelector(".button");
  button.addEventListener("click", clickHandler);

  setTime();
  changeTime();
}

window.addEventListener("DOMContentLoaded", init);
