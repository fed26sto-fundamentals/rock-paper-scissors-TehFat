 

  
function getComputerChoice() {
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
           console.log("You wpo");
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
    else { 
    console.log("play again");
    }
       console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
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

    playGame();


