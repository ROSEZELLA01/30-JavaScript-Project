const startGame = document.getElementById("start-game");
const gameContainer = document.getElementById("game-container");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const makeYourChoice = document.getElementById("make-your-choice");
const result = document.getElementById("result");
const choices = document.querySelectorAll(".choice")
const gameIntro = document.getElementById("game-intro");
const cancelButton = document.getElementById("cancel-button");


startGame.addEventListener("click", (event) => {
    event.preventDefault();
    gameContainer.style.display = "block";
    gameIntro.style.display = "none";

});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  gameContainer.style.display = "none";
  gameIntro.style.display = "block";
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerSelection = choice.getAttribute("data-choice");
    const computerSelection = getComputerChoice();
    playerChoice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;
    makeYourChoice.textContent = " ";
    if (playerSelection === computerSelection) {
      result.textContent = "It's a tie!";
       result.style.color = "yellow";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      result.textContent = "You win! Rock beats scissors.";
       result.style.color = "green";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      result.textContent = "You win! Scissors beats paper.";
       result.style.color = "green";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      result.textContent = "You win! Paper beats rock.";
       result.style.color = "green";
    } else {
      result.textContent = "You lose! Try again.";
      result.style.color = "red";
    }
    
// Rock beats Scissors

// Scissors beats Paper

// Paper beats Rock

// Same choice = Draw
  });

  
})

