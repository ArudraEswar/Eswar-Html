let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cellClick = (cellIndex) => {
  if (gameState[cellIndex] !== "" || !gameActive) return;

  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;

  if (checkWin()) {
    document.getElementById("result-message").innerText = `Player ${currentPlayer} wins!`;
    document.getElementById("result-screen").classList.add("show");
    gameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    document.getElementById("result-message").innerText = "It's a draw!";
    document.getElementById("result-screen").classList.add("show");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

const checkWin = () => {
  for (let condition of winningConditions) {
    let a = gameState[condition[0]];
    let b = gameState[condition[1]];
    let c = gameState[condition[2]];
    if (a === "" || b === "" || c === "") continue;
    if (a === b && b === c) return true;
  }
  return false;
};

const resetGame = () => {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
  document.getElementById("result-screen").classList.remove("show");
};
