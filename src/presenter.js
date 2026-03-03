import Tennis from "./tennis.js";

const game = new Tennis();
const display = document.getElementById("score-display");
const btnP1 = document.getElementById("p1-btn");
const btnP2 = document.getElementById("p2-btn");
const btnReset = document.getElementById("reset");

function updateScore() {
    display.innerText = game.score();
}

btnP1.addEventListener("click", () => {
    game.player1Scores();
    updateScore();
});

btnP2.addEventListener("click", () => {
    game.player2Scores();
    updateScore();
});

btnReset.addEventListener("click", () => {
    location.reload(); // Forma rápida de reiniciar el estado
});
