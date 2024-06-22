import init, { TicTacToe } from "../pkg/tic_tac_toe.js";

async function run() {
    await init();
    const game = new TicTacToe();
    const boardElement = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");
    const player1ScoreElement = document.getElementById("player1-score");
    const player2ScoreElement = document.getElementById("player2-score");
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");
    const modalClose = document.getElementById("modal-close");

    function render() {
        const board = game.get_board();
        cells.forEach((cell, index) => {
            cell.textContent = board[index] === 1 ? "X" : board[index] === 2 ? "O" : "";
            cell.classList.remove("x", "o");
            if (board[index] === 1) {
                cell.classList.add("x");
            } else if (board[index] === 2) {
                cell.classList.add("o");
            }
        });
        player1ScoreElement.textContent = game.get_player1_score();
        player2ScoreElement.textContent = game.get_player2_score();
    }

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    }

    function hideModal() {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    modalClose.addEventListener("click", () => {
        hideModal();
        game.reset_board();
        render();
    });

    boardElement.addEventListener("click", (event) => {
        if (event.target.classList.contains("cell")) {
            const index = parseInt(event.target.getAttribute("data-index"), 10);
            if (game.make_move(index)) {
                render();
                const winner = game.check_winner();
                if (winner !== 0) {
                    setTimeout(() => {
                        if (winner === 3) {
                            showModal("It's a draw!");
                        } else {
                            showModal(`Player ${winner} wins!`);
                        }
                    }, 10);
                }
            }
        }
    });

    render();
}

run();