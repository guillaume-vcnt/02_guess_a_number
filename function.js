function matchNumber(nbP1, nbP2) {
  console.log(typeof nbP1, typeof nbP2);
  if (nbP1 > nbP2) {
    console.log("Bigger !");
    grandMessage();
    wrongNumber();
  } else if (nbP1 < nbP2) {
    console.log("Smaller!");
    petitMessage();
    wrongNumber();
  } else {
    console.log("Well done !");
    bravoMessage();
  }
}

function wrongNumber() {
  let attemptsMessageIsOn = document.querySelector("#attempts-message");
  if (attemptsMessageIsOn !== null) {
    attemptsMessageIsOn.remove();
    console.log("👽 On", attemptsMessageIsOn);
  }
  playerAttempt = playerAttempt + 1;
  console.log(`"💋 " ${playerAttempt}`);
  let newDivMessage1 = document.createElement("p");
  newDivMessage1.setAttribute("id", "attempts-message");
  newDivMessage1.textContent = `Attempt ${playerAttempt}`;
  newDivMessage1.style.color = "orange";
  newDivMessage1.style.alignSelf = "center";
  newDivMessage1.style.textTransform = "uppercase";
  mainContainer.appendChild(newDivMessage1);
}

function bravoMessage() {
  let petitMessageIsOn = document.querySelector("#petit-message");
  if (petitMessageIsOn !== null) petitMessageIsOn.remove();
  let grandMessageIsOn = document.querySelector("#grand-message");
  if (grandMessageIsOn !== null) grandMessageIsOn.remove();
  let attemptsMessageIsOn = document.querySelector("#attempts-message");
  if (attemptsMessageIsOn !== null) attemptsMessageIsOn.remove();
  let newDivMessage2 = document.createElement("p");
  newDivMessage2.setAttribute("id", "bravo-message");
  newDivMessage2.textContent = "Well done !";
  newDivMessage2.style.color = "green";
  newDivMessage2.style.alignSelf = "center";
  newDivMessage2.style.textTransform = "uppercase";
  newDivMessage2.style.fontSize = "25px";
  mainContainer.appendChild(newDivMessage2);
  findingContainer.style.display = "none";
  let restartGame = document.createElement("button");
  restartGame.setAttribute("id", "restart-button");
  restartGame.setAttribute("onclick", "restartGame()");
  restartGame.innerText = "Restart Game";
  restartGame.style.alignSelf = "center";
  restartGame.style.height = "25px";
  restartGame.style.width = "100px";
  restartGame.style.marginTop = "1.5rem";
  mainContainer.appendChild(restartGame);
}

function grandMessage() {
  let petitMessageIsOn = document.querySelector("#petit-message");
  if (petitMessageIsOn !== null) petitMessageIsOn.remove();
  let grandMessageIsOn = document.querySelector("#grand-message");
  if (grandMessageIsOn !== null) {
    grandMessageIsOn.remove();
    console.log("👽 On", grandMessageIsOn);
  }
  let newDivMessageGrand = document.createElement("p");
  newDivMessageGrand.setAttribute("id", "grand-message");
  newDivMessageGrand.textContent = "Bigger !";
  newDivMessageGrand.style.alignSelf = "center";
  newDivMessageGrand.style.textTransform = "uppercase";
  mainContainer.appendChild(newDivMessageGrand);
}

function petitMessage() {
  let grandMessageIsOn = document.querySelector("#grand-message");
  if (grandMessageIsOn !== null) grandMessageIsOn.remove();
  let petitMessageIsOn = document.querySelector("#petit-message");
  if (petitMessageIsOn !== null) {
    petitMessageIsOn.remove();
    console.log("👽 On", petitMessageIsOn);
  }
  let newDivMessagePetit = document.createElement("p");
  newDivMessagePetit.setAttribute("id", "petit-message");
  newDivMessagePetit.textContent = "Smaller !";
  newDivMessagePetit.style.alignSelf = "center";
  newDivMessagePetit.style.textTransform = "uppercase";
  mainContainer.appendChild(newDivMessagePetit);
}

function restartGame() {
  location.reload();
}
