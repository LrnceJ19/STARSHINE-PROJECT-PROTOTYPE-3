// menu interactions
const playBtn = document.getElementById("playBtn");
const mainmenu = document.getElementById("mainMenu");
const returnBtn1 = document.getElementById("backBtn1");
const diffMenu = document.getElementById("difficultyMenu");

document.addEventListener("DOMContentLoaded", () => {
  mainmenu.style.animation = "fadeSlideUp 2s ease forwards";
});

playBtn.onclick = () => {
  mainmenu.style.animation = "fadeOut 0.1s ease forwards";
  diffMenu.style.animation = "fadeIn 1s ease forwards";
};

returnBtn1.onclick = () => {
  diffMenu.style.animation = "fadeOut 0.1s ease forwards";
  mainmenu.style.animation = "fadeIn 1s ease forwards";
};

/* ready set solve! */
const start = document.getElementById("startingSignal");
const signalText = document.getElementById("signal");
const easyMode = document.getElementById("easyMode");
const mediumMode = document.getElementById("mediumMode");
const hardMode = document.getElementById("hardMode");

let difficulty = 0;

easyMode.onclick = () => {
  difficulty = 1;
  diffMenu.style.animation = "fadeOut 0.5s ease forwards"
  startSignal();
  console.log("easy mode")
}

mediumMode.onclick = () => {
  difficulty = 2;
  diffMenu.style.animation = "fadeOut 0.5s ease forwards"
  startSignal();
  console.log("medium mode")
}

hardMode.onclick = () => {
  difficulty = 3;
  diffMenu.style.animation = "fadeOut 0.5s ease forwards"
  startSignal();
  console.log("hard mode")
}

function fadeOut() {
  signalText.style.animation = "fadeOut 1s ease forwards"
}

function resetAnimation() {
  signalText.opacity = "1";
  signalText.style.animation = "none";
  signalText.offsetHeight;
}

function startSignal() {
  start.style.opacity = "1";
  setTimeout(() => {signal.textContent = "Ready", fadeOut()}, 1000);
  setTimeout(() => signal.textContent = "Set", 2000);
  setTimeout(() => {resetAnimation(), fadeOut()}, 2000);
  setTimeout(() => signal.textContent = "Solve!", 3000);
  setTimeout(() => resetAnimation(), 3000);
  setTimeout(() => {start.style.opacity = "0", start.style.pointerEvents = "none"}, 3500);
  setTimeout(() => {game.style.opacity = "1", game.style.pointerEvents = "auto"}, 3475);
  
  switch(difficulty) {
    default:
    console.log("error");
    break;
    
    case 1:
      diff.textContent = "Easy Mode";
      break;
      
    case 2:
      diff.textContent = "Medium Mode";
      break;
      
      case 3:
       diff.textContent = "Hard Mode";
      break;
  }
}

const diff = document.getElementById("difficulty");
const game = document.getElementById("gameUi");