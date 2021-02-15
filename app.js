document.addEventListener("DOMContentLoaded", () => {
  let machineSelection;
  let playerSelection;
  let machineScore = 0;
  let playerScore = 0;
  let buttons = document.querySelectorAll(".button");

  const container = document.querySelector(".log");

  const weapons = ["Rock", "Paper", "Scissors"];

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();

      playRound(playerSelection, machineSelection);

      if (playerScore === 5 || machineScore === 5) {
        declareWinner();
      }
    });
  });

  function computerPlay() {
    return weapons[~~(Math.random() * weapons.length)];
  }

  function playRound(playerSelection, machineSelection) {
    playerSelection = playerSelection.toLowerCase();
    machineSelection = computerPlay().toLowerCase();

    if (playerSelection === machineSelection) {
      displayResults("Tie game!");
    } else if (
      (machineSelection == "rock" && playerSelection == "scissors") ||
      (machineSelection == "scissors" && playerSelection == "paper") ||
      (machineSelection == "paper" && playerSelection == "rock")
    ) {
      machineScore = ++machineScore;
      keepMachineScore();
      if (machineScore === 1) {
        displayResults(
          `Oh no! You lost.
          ${capitalize(machineSelection)} beats ${playerSelection}.`
        );
      } else if (machineScore === 2) {
        displayResults(
          `Arghh. ${capitalize(
            machineSelection
          )} beats ${playerSelection}. Give it another shot!`
        );
      } else if (machineScore === 3) {
        displayResults(
          `${capitalize(
            machineSelection
          )} beats ${playerSelection}. It's ok. You got this!!`
        );
      } else if (machineScore === 4) {
        displayResults(
          `Oh no. It's match point!! ${capitalize(
            machineSelection
          )} beats ${playerSelection}. Don't let us down!`
        );
      } else {
        displayResults(`${machineSelection} beats ${playerSelection}`);
      }
    } else {
      playerScore = ++playerScore;
      keepHumanScore();
      if (playerScore === 1) {
        displayResults(
          `Lets go!!! You won.
          ${capitalize(playerSelection)} beats ${machineSelection}.`
        );
      } else if (playerScore === 2) {
        displayResults(
          `You're pretty good at this. ${capitalize(
            playerSelection
          )} beats ${machineSelection}.`
        );
      } else if (playerScore === 3) {
        displayResults(
          `${capitalize(
            playerSelection
          )} beats ${machineSelection}! Has mankind found its savior??`
        );
      } else if (playerScore === 4) {
        displayResults(
          `${capitalize(
            playerSelection
          )} beats ${machineSelection}. One more and you're a hero!`
        );
      } else {
        displayResults(`${playerSelection} beats ${machineSelection}`);
      }
    }
  }

  function displayResults(str) {
    container.textContent = str;
  }

  function declareWinner() {
    if (playerScore > machineScore) {
      container.textContent = "You won the machine! Congragulations!";
    } else {
      container.textContent = "You lose! No problem!";
    }

    playerScore = 0;
    machineScore = 0;
    keepMachineScore();
    keepHumanScore();
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function keepMachineScore() {
    let computerScoreBox = document.querySelector("#machine-score");
    computerScoreBox.textContent = machineScore;
  }

  function keepHumanScore() {
    let humanScoreBox = document.querySelector("#player-score");
    humanScoreBox.textContent = playerScore;
  }
});
