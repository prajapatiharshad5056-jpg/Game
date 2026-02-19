alert(" ︻デ═一💥    Informing Players that the game is a simulation and to play in moderation".toUpperCase());

const btn = document.getElementById("gameBtn");
const cells = document.querySelectorAll(".cell");

let gameStarted = false;
let currentPlayer = "X";
 

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    cell.style.pointerEvents = "none";
    cell.style.color = "rgb(237, 226, 226)";
});

btn.addEventListener("click", function () {

    if (!gameStarted) {
        gameStarted = true;
        btn.innerText = "Reset Game";
        currentPlayer = "X";

        cells.forEach(cell => {
            cell.style.pointerEvents = "auto";
        });

        alert("Game Started 🔫 & 🚨");

    } else {
        resetGame();
        alert("Game Reset 🤢 & 🔄");
    }

});

function resetGame() {
    gameStarted = false;
    btn.innerText = "Start Game";

    cells.forEach(cell => {
        cell.innerText = "";
        cell.style.pointerEvents = "none";
        cell.style.color = "rgb(237, 226, 226)";
    });

    currentPlayer = "X";
}

cells.forEach((cell) => {
    cell.addEventListener("click", function () {

        if (!gameStarted) return;
        if (cell.innerText !== "") return;

        cell.innerText = currentPlayer;

        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        
    });
});

function checkWinner() {

    for (let pattern of winPatterns) {

        let a = cells[pattern[0]].innerText;
        let b = cells[pattern[1]].innerText;
        let c = cells[pattern[2]].innerText;

        if (a !== "" && a === b && b === c) {
            // alert("Meow gop gop gop 😹 "+ a + " Wins! 🏆");
            alert("Player " + a + " Wins! 😱 👍");
            resetGame();
            return;
        }
    }
}
