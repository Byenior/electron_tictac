//  npm start (for test)
//  npm run build (for build program)

const board = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
let gameActive = true;
let gameState = Array(9).fill(null);

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(e) {
  const cellIndex = e.target.getAttribute("data-index");

  if (gameState[cellIndex] !== null || !gameActive) {
    return;
  }

  gameState[cellIndex] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (gameState.every((cell) => cell !== null)) {
    alert("It's a draw!");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function restartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState.fill(null);
  board.forEach((cell) => (cell.textContent = ""));
}

board.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartButton.addEventListener("click", restartGame);
