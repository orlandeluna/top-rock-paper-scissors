
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You loose, paper beats rock!";
    
    }   else if (playerSelection == "Rock" && computerSelection == "Rock") {
            return "It's a tie!";
        }
        else (playerSelection == "Rock" && computerSelection == "Scissors"); {
            return "You win, rock beats scissors!"
        }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



/* let options = ["option1", "option2", "option3"];
   let choice = options[Math.floor(Math.random()*options.length)];*/