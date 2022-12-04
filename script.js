
function getComputerChoice() {
    let options = ["option1", "option2", "option3"];
    return options[Math.floor(Math.random() * options.length)];
}

console.log(getComputerChoice());



/* let options = ["option1", "option2", "option3"];
   let choice = options[Math.floor(Math.random()*options.length)];*/