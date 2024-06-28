let score = 0;
let timer = 4;
let timerActive = false;

function finishTheGame(event) {
  const element = document.querySelector(".container__info-score");
  element.classList.toggle("active");
  if (event.target.classList == "container__info-score") {
    event.target.classList.toggle("active");
    if (!event.target.classList.contains("active")) {
      event.target.classList.toggle("active");
    }
  }
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
  //   const score = document.querySelector(".info");
  //   score.addEventListener("click", finishTheGame);
}

window.addEventListener("DOMContentLoaded", init);
