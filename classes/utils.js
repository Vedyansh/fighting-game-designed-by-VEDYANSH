function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x &&
      rectangle1.attackBox.position.x <=
        rectangle2.position.x + rectangle2.dimensions.width &&
      rectangle1.attackBox.position.y <=
        rectangle2.position.y + rectangle2.dimensions.height &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
        rectangle2.position.y
    );
  }
  function determineWinner({ player, enemy, timerID }) {
    if (player.health === enemy.health) {
      document.querySelector("#endGameText").innerHTML = "TIE!";
    } else if (player.health > enemy.health) {
      document.querySelector("#endGameText").innerHTML = "samuraiVedyansh WINS!";
    } else {
      document.querySelector("#endGameText").innerHTML = " kenji WINS!";
    }
    document.querySelector("#endGameText").style.display = "flex";
    clearTimeout(timerID)
  }
  let timer = 60;
  let timerID
  function decreaseTimer() {
    if (timer > 0) {
      timerID = setTimeout(decreaseTimer, 1000);
      document.querySelector("#timer").innerHTML = timer;
      timer--;
    } else {
      determineWinner({player, enemy, timerID})
    }
  }
  