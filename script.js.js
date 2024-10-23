
console.log("Script loaded")
let playerscore = 0; // Use let to allow score updates
let compscore = 0;

const gamename = document.getElementById("game-name");
const compscoretext = document.getElementById("computerScore");
const playerscoretext = document.getElementById("playerScore");
const gamemsg = document.getElementById("game-msg");

const choices = ["Rock", "Paper", "Scissors"];
document.getElementById("rock").addEventListener("click", () => play("Rock"));
document.getElementById("paper").addEventListener("click", () => play("Paper"));
document.getElementById("scissors").addEventListener("click", () => play("Scissors")); // Fixed ID

function play(playerchoice) {
    const compchoice = choices[Math.floor(Math.random() * 3)];
    determineWinner(playerchoice, compchoice);
}

function determineWinner(playerchoice, compchoice) {
    if (playerchoice === compchoice) {
        gamemsg.textContent = `It is a tie!`;
    } else if (
        (playerchoice === "Rock" && compchoice === "Scissors") ||
        (playerchoice === "Paper" && compchoice === "Rock") ||
        (playerchoice === "Scissors" && compchoice === "Paper")
    ) {
        playerscore++;
        gamemsg.textContent = `You Win! Your ${playerchoice} beats ${compchoice}`;
    } else {
        compscore++;
        gamemsg.textContent = `Computer Wins! Computer's ${compchoice} beats your ${playerchoice}`;
    }
    updatescore();
}

function updatescore() {
    playerscoretext.textContent = `Player Score: ${playerscore}`;
    compscoretext.textContent = `Computer Score: ${compscore}`;
}
console.log("Script loaded")