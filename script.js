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

const playerNumber1 = document.querySelector("#choose-a-number");

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function () {
    let saveValuePlayer1 = playerNumber1.value;
    console.log("🥇", saveValuePlayer1)
    return saveValuePlayer1
});


const playerNumber2 = document.querySelector("#find-the-good-number");

playerNumber2.addEventListener("click", function () {
  let valuePlayerNumber2 = playerNumber2.value;
  console.log("🥈", valuePlayerNumber2);
});

const tryButton = document.querySelector("#start-button");
tryButton.addEventListener("click", function () {});


function choosingNumber() {}

function findingNumber() {}

function matchNumber() {}

function GameMessage() {}

function gamePlay() {}
