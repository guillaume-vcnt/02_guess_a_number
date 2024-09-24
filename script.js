//02_guess_a_number

function didIWin(number) {
  if (parseInt(number) < 22) {
    alert("Plus grand !");
    return false;
  } else if (parseInt(number) > 22) {
    alert("Plus petit !");
    return false;
  } else if (parseInt(number) === 22) {
    alert("Bravo !");
    return true;
  } else {
    return false;
  }
}

function gamePlay() {
  const givenNumber = prompt("Choose a number");
  console.log(givenNumber);
  const result = didIWin(givenNumber);
  // Note : Un paramètre en JS ne fait que stocker la valeur qui lui est passée au moment de l'appel d'une fonction. Il ne garde pas d'information au-delà de cette exécution, à moins qu'il ne stocke cette valeur ailleurs, par exemple dans une variable globale, un objet, ou une base de données.
  if (result !== true) {
  // Autre écriture : if (!result)
    gamePlay();
  }
}

gamePlay();
