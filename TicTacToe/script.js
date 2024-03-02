document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");
    const restartButton = document.getElementById("restart-button");
    const newGameButton = document.getElementById("new-game-button");
    const winnerModal = document.getElementById("winner-modal");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = cell.dataset.index;

            if (gameBoard[index] === "" && !isGameOver()) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;

                if (checkWinner()) {
                    displayWinnerModal(`${currentPlayer} wins!`);
                } else if (isBoardFull()) {
                    displayWinnerModal("It's a tie!");
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    restartButton.addEventListener("click", resetGame);
    newGameButton.addEventListener("click", function () {
        winnerModal.style.display = "none";
        resetGame();
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }

    function isBoardFull() {
        return !gameBoard.includes("");
    }

    function isGameOver() {
        return checkWinner() || isBoardFull();
    }

    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        cells.forEach(cell => {
            cell.textContent = "";
        });
    }

    function displayWinnerModal(message) {
        alert(message); // For testing purposes, replace with your modal display logic
        resetGame(); // For testing purposes, reset the game after displaying the winner
    }
});