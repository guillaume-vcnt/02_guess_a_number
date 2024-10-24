function matchNumber(p1, p2) {
  console.log(typeof p1, typeof p2);
  if (p1 > p2) {
    console.log("👹 Bigger !");
    biggerMessage();
    wrongNumber();
  } else if (p1 < p2) {
    console.log("👹 Smaller!");
    smallerMessage();
    wrongNumber();
  } else {
    console.log("👹 Well done !");
    wellDoneMessage();
  }
}

function wrongNumber() {
  let attemptIsOn = document.querySelector("#attempt-message");
  if (attemptIsOn !== null) {
    attemptIsOn.remove();
  }
  playerAttempt = playerAttempt + 1;
  console.log(`"👻 " ${playerAttempt}`);
  let newElmAttempt = document.createElement("p");
  newElmAttempt.setAttribute("id", "attempt-message");
  newElmAttempt.textContent = `Attempt ${playerAttempt}`;
  newElmAttempt.style.textTransform = "uppercase";
  newElmAttempt.style.color = "orange";
  newElmAttempt.style.alignSelf = "center";
  mainContainer.appendChild(newElmAttempt);
}

function wellDoneMessage() {
  let smallerIsOn = document.querySelector("#smaller-message");
  if (smallerIsOn !== null) smallerIsOn.remove();
  let biggerIsOn = document.querySelector("#bigger-message");
  if (biggerIsOn !== null) biggerIsOn.remove();
  let attemptIsOn = document.querySelector("#attempt-message");
  if (attemptIsOn !== null) attemptIsOn.remove();
  let newElmWellDone = document.createElement("p");
  newElmWellDone.setAttribute("id", "wellDone-message");
  newElmWellDone.textContent = "Well done !";
  newElmWellDone.style.textTransform = "uppercase";
  newElmWellDone.style.fontSize = "25px";
  newElmWellDone.style.color = "green";
  newElmWellDone.style.alignSelf = "center";
  mainContainer.appendChild(newElmWellDone);
  player2Container.style.display = "none";
  let newElmRestartGame = document.createElement("button");
  newElmRestartGame.setAttribute("id", "restart-button");
  newElmRestartGame.setAttribute("onclick", "restartGame()");
  newElmRestartGame.innerText = "Restart Game";
  newElmRestartGame.style.height = "25px";
  newElmRestartGame.style.width = "100px";
  newElmRestartGame.style.marginTop = "1.5rem";
  newElmRestartGame.style.alignSelf = "center";
  mainContainer.appendChild(newElmRestartGame);
}

function biggerMessage() {
  let smallerIsOn = document.querySelector("#smaller-message");
  if (smallerIsOn !== null) smallerIsOn.remove();
  let biggerIsOn = document.querySelector("#bigger-message");
  if (biggerIsOn !== null) {
    biggerIsOn.remove();
    console.log("👽", biggerIsOn);
  }
  let newElmBigger = document.createElement("p");
  newElmBigger.setAttribute("id", "bigger-message");
  newElmBigger.textContent = "Bigger !";
  newElmBigger.style.textTransform = "uppercase";
  newElmBigger.style.alignSelf = "center";
  mainContainer.appendChild(newElmBigger);
}

function smallerMessage() {
  let biggerIsOn = document.querySelector("#bigger-message");
  if (biggerIsOn !== null) biggerIsOn.remove();
  let smallerIsOn = document.querySelector("#smaller-message");
  if (smallerIsOn !== null) {
    smallerIsOn.remove();
    console.log("👽", smallerIsOn);
  }
  let newElmSmaller = document.createElement("p");
  newElmSmaller.setAttribute("id", "smaller-message");
  newElmSmaller.textContent = "Smaller !";
  newElmSmaller.style.textTransform = "uppercase";
  newElmSmaller.style.alignSelf = "center";
  mainContainer.appendChild(newElmSmaller);
}

function restartGame() {
  location.reload();
}
