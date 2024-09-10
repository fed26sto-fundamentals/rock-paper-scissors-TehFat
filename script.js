
let humanScore = 0;
let computerScore = 0;
// game will be palyed for 5 turns
let roundCount = 0;
const maxRounds = 5;
// make a function for computers random choice
function getComputerChoice() {
    const choicesArray = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}
// function for playround
function playRound(humanChoice, computerChoice) {
    let result = '';

    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
        result = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    return result;
}
// call the playround function in play game and assigen humainchoice 
function playGame(humanChoice) {
    if (roundCount < maxRounds){ 
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    roundCount++;
    // Update round result and score in the DOM and show resuls on webscreen
    document.getElementById('roundResult').textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${roundResult}`;
    document.getElementById('score').textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;

   
      if (roundCount === maxRounds) {
        declareWinner();
    }
}
}
function declareWinner() {
    let finalResult = '';
    if (humanScore > computerScore) {
        finalResult = `You won the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    }
   else if (humanScore < computerScore) {
        finalResult = `Computer won the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    }
     else {
        finalResult = `"It's a tie!";! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    }

    document.getElementById('finalResult').textContent = finalResult;

    // Reset the scores for the next game
    humanScore = 0;
    computerScore = 0;
    document.getElementById('score').textContent = `Score - Human: 0, Computer: 0`;
}



  
/*function getComputerChoice() {
    const choicesArray = ['rock', 'paper', 'scissors'];  // Store the choices in an array
    const randomIndex = Math.floor(Math.random() * choicesArray.length);  // Get a random index
    return choicesArray[randomIndex];  // Return random choice
}

   function getHumanChoice(rock, paper, scissors){
    const choicesArray = [rock, paper, scissors];
    return prompt("what is your number");
   }
   
   console.log(getHumanChoice());
   let humanScore = 0;
   let computerScore = 0;
   // Function to play round
   function playRound(humanChoice, computerChoice) { 
       if (humanChoice === "rock"  && computerChoice === "paper") { 
           console.log("You lose! Paper beats Rock");
           computerScore++;
       } 
       else if (humanChoice === "paper" && computerChoice === "rock") {
           console.log("You won");
           humanScore++;
       } 
       else if (humanChoice === "scissors" && computerChoice === "paper") {
           console.log("You won!");
           humanScore++;
       } 
       else if (humanChoice === "paper" && computerChoice === "scissors") {
           console.log("You lose! Scissors beats Paper");
           computerScore++;
       } 
       else if (humanChoice === "rock" && computerChoice === "paper") {
           console.log("You loss! paper beats rock");
           computerScore++;
       } 
       else if (humanChoice === "scissors" && computerChoice === "rock") {
           console.log("You lose! Rock beats Scissors");
           computerScore++;
       }
       else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won");
        humanScore++;
    }
    else if (humanChoice === computerChoice) {
    	console.log("play again");
	} 

  /*  else { 
    console.log("play again");
    }*/
      /* console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
   }
   
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);
   // Function to play 5 rounds of the game
   function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = prompt(); 
        let computerChoice = getComputerChoice();  // Generate random computer choice
        console.log(`Round ${i + 1}`);
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);  // Play a round
        console.log("----------------------------------");
    } // Declare the overall winner score
        if ( computerScore > humanScore){
            console.log(`Computer won the game! Final Score - Human: ${humanScore}, Computer: ${computerScore} `);
        } else if (humanScore > computerScore){
            console.log(`You won the game! Final Score - Human: ${humanScore}, Computer: ${computerScore} `);
        } else {
            console.log(`It's a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    playGame();*/


