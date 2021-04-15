
var wins = 0;
var losses = 0;
var ties = 0;
var choices = ["R", "P", "S"];

function getUserChoice () {
    var userChoice = prompt("Choose rock, paper or scissors. Please enter R, P, or S.").toUpperCase();
    validateUserChoice(userChoice);
    return userChoice;
}

function validateUserChoice(choice) {
    if (!choices.includes(choice)) {
        alert("Not valid");
        playGame();
    }
}

function getComputerChoice () {
    var randomIndex = Math.floor(Math.random() * 3);
    var computerChoice = choices[randomIndex];
    return computerChoice;
}

function checkOutcomeAndAlert (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties += 1;
        alert("Tie");
    } else if (
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "S" && computerChoice === "P")
        ) {
        wins += 1;
        alert("Win");
    } else {
        losses += 1;
        alert("Loss");
    }
    showStats();
}

function showStats() {
    alert(
        "Wins: " + wins + "\n" + 
        "Losses:" + losses + "\n" + 
        "Ties: " + ties
        );
}

function playGame () {
    // get the user choice
    var userChoice = getUserChoice();
    // get the computer choice
    var computerChoice = getComputerChoice();
    // check for a win
    checkOutcomeAndAlert(userChoice, computerChoice);
    
    if (confirm("Play again?")) {
        playGame();
    }
}

// initialize
playGame();
