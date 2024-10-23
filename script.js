findingContainer.style.display = "none";

startButton.addEventListener("click", function () {
  saveValuePlayer1 = parseInt(playerNumber1.value);
  console.log("🥇", saveValuePlayer1);
  if (
    saveValuePlayer1 < 1 ||
    saveValuePlayer1 > 50 ||
    isNaN(saveValuePlayer1)
  ) {
    let newDivAlert1IsOn = document.querySelector("#alert-message1");
    if (newDivAlert1IsOn !== null) newDivAlert1IsOn.remove();
    let newDivAlert1 = document.createElement("p");
    newDivAlert1.setAttribute("id", "alert-message1");
    newDivAlert1.textContent = "Choose a valid number !";
    newDivAlert1.style.color = "red";
    newDivAlert1.style.alignSelf = "center";
    newDivAlert1.style.textTransform = "uppercase";
    mainContainer.appendChild(newDivAlert1);
  } else {
    let newDivAlert1IsOn = document.querySelector("#alert-message1");
    if (newDivAlert1IsOn !== null) newDivAlert1IsOn.remove();
    choosingContainer.style.display = "none";
    findingContainer.style.display = "flex";
  }
});

tryButton.addEventListener("click", function () {
  let saveValuePlayer2 = parseInt(playerNumber2.value);
  console.log("🥈", saveValuePlayer2);
  if (
    saveValuePlayer2 < 1 ||
    saveValuePlayer2 > 50 ||
    isNaN(saveValuePlayer2)
  ) {
    let newDivAlert2IsOn = document.querySelector("#alert-message2");
    if (newDivAlert2IsOn !== null) newDivAlert2IsOn.remove();
    let newDivAlert2 = document.createElement("p");
    newDivAlert2.setAttribute("id", "alert-message2");
    newDivAlert2.textContent = "Choose a valid number !";
    newDivAlert2.style.color = "red";
    newDivAlert2.style.alignSelf = "center";
    newDivAlert2.style.textTransform = "uppercase";
    mainContainer.appendChild(newDivAlert2);
  } else {
    let newDivAlert2IsOn = document.querySelector("#alert-message2");
    if (newDivAlert2IsOn !== null) newDivAlert2IsOn.remove();
    matchNumber(saveValuePlayer1, saveValuePlayer2);
  }
});

// Note : Un paramètre Javascript ne fait que stocker la valeur qui lui est passée au moment de l'appel d'une fonction. Il ne garde pas d'information au-delà de cette exécution, à moins qu'il ne stocke cette valeur ailleurs, par exemple dans une variable globale, un objet, ou une base de données.

//Note : La fonction isNaN() peut être utilisée pour vérifier si une valeur est un "Not-a-Number" (NaN), ce qui inclut les cas où l'input est vide. En JavaScript, lorsqu'un champ de saisie (input) est vide, il est traité comme une chaîne vide "", qui, lorsqu'elle est convertie en nombre avec parseInt(), donne NaN.
