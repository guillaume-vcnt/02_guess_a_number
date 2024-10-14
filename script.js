// //02_guess_a_number

// function didIWin(number) {
//   if (parseInt(number) < 22) {
//     alert("Plus grand !");
//     return false;
//   } else if (parseInt(number) > 22) {
//     alert("Plus petit !");
//     return false;
//   } else if (parseInt(number) === 22) {
//     alert("Bravo !");21
//     return true;
//   } else {
//     return false;
//   }
// }

// function gamePlay() {
//   const givenNumber = prompt("Choose a number");
//   console.log(givenNumber);
//   const result = didIWin(givenNumber);

//   // Note : Un paramètre Javascript ne fait que stocker la valeur qui lui est passée au moment de l'appel d'une fonction. Il ne garde pas d'information au-delà de cette exécution, à moins qu'il ne stocke cette valeur ailleurs, par exemple dans une variable globale, un objet, ou une base de données.

//   if (result !== true) {

//   // Autre écriture : if (!result)

//     gamePlay();
//   }
// }

// gamePlay();

let playerAttempt = 0;
let saveValuePlayer1;
let saveValuePlayer2;

const playerNumber1 = document.querySelector("#choose-a-number");
const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function () {
  saveValuePlayer1 = parseInt(playerNumber1.value);
  console.log("🥇", saveValuePlayer1);
});

const playerNumber2 = document.querySelector("#find-the-good-number");
const tryButton = document.querySelector("#try-button");

tryButton.addEventListener("click", function () {
  let saveValuePlayer2 = parseInt(playerNumber2.value);
  console.log("🥈", saveValuePlayer2);
  matchNumber(saveValuePlayer1, saveValuePlayer2);
});

function matchNumber(nbP1, nbP2) {
  console.log(typeof nbP1, typeof nbP2);
  if (nbP1 > nbP2) {
    console.log("Plus Grand !");
    grandMessage();
    wrongNumber();
  } else if (nbP1 < nbP2) {
    console.log("Plus Petit !");
    petitMessage();
    wrongNumber();
  } else {
    console.log("Bravo !");
    bravoMessage();
  }
}

function wrongNumber() {
  playerAttempt = playerAttempt + 1;
  console.log(`"💋 " ${playerAttempt}`);
  let newDivMessage1 = document.createElement("p");
  newDivMessage1.setAttribute("id", "attempts-message");
  newDivMessage1.textContent = `Tentative ${playerAttempt}`;
  document.body.appendChild(newDivMessage1);
}

function bravoMessage() {
  let newDivMessage2 = document.createElement("p");
  newDivMessage2.setAttribute("id", "alert-message");
  newDivMessage2.textContent = "Bravo !";
  document.body.appendChild(newDivMessage2);
}

function grandMessage() {
  let valueGrandMessage = document.querySelector("#grand-message")
  if (valueGrandMessage)
    { valueGrandMessage.remove()
  console.log("👽 ok", valueGrandMessage)
};
  let newDivMessagegGrand = document.createElement("p");
  newDivMessagegGrand.setAttribute("id", "grand-message");
  newDivMessagegGrand.textContent = "Plus Grand !";
  document.body.appendChild(newDivMessagegGrand);
  }

function petitMessage() {
  let newDivMessagegPetit = document.createElement("p");
  newDivMessagegPetit.setAttribute("id", "petit-message");
  newDivMessagegPetit.textContent = "Plus Petit !";
  document.body.appendChild(newDivMessagegPetit);
}
