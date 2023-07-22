// create the board array
let boardArray = [];

// declare player variable
let player = "X";

// change player on any click
document.querySelector(".board").onclick = () => {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
};

// loop to add onclick to each box of add player

for (let i = 1; i < 10; i++) {
  document.querySelector(`.box${i}`).onclick = () => {
    document.querySelector(`.box${i}`).innerHTML = `${player}`;
    boardArray[i] = player;
    checkWinner();
  };
}

// Checks if there is a winner
let checkWinner = () => {
  if (
    boardArray[1] === boardArray[2] &&
    boardArray[1] === boardArray[3] &&
    boardArray[1] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[4] === boardArray[5] &&
    boardArray[4] === boardArray[6] &&
    boardArray[4] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[7] === boardArray[8] &&
    boardArray[7] === boardArray[9] &&
    boardArray[7] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[1] === boardArray[4] &&
    boardArray[1] === boardArray[7] &&
    boardArray[1] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[2] === boardArray[5] &&
    boardArray[2] === boardArray[8] &&
    boardArray[2] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[3] === boardArray[6] &&
    boardArray[3] === boardArray[9] &&
    boardArray[3] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[1] === boardArray[5] &&
    boardArray[1] === boardArray[9] &&
    boardArray[1] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  } else if (
    boardArray[3] === boardArray[5] &&
    boardArray[3] === boardArray[7] &&
    boardArray[3] === player
  ) {
    document.querySelector(".title").textContent = `Player ${player} wins!`;
  }
};
