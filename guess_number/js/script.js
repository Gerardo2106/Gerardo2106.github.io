//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);


//Global variables
let randomNumber;
let attempts = 0;
let totalWins = 0;
let totalLosses = 0;



initializeGame();

function updateAttemptsLeft() {
    let attemptsLeft = 7 - attempts;
    document.querySelector("#attemptsLeft").textContent = attemptsLeft;
}

function updateWinLossDisplay() {
    document.querySelector("#wins").textContent = totalWins;
    document.querySelector("#losses").textContent = totalLosses;
}

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

    updateAttemptsLeft()

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";
    
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    document.querySelector("#guesses").textContent = "";

}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts: " + attempts);

    updateAttemptsLeft()

    feedback.style.color = "orange";

    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You Won!";
        feedback.style.color = "darkgreen";
        totalWins++;
        updateWinLossDisplay();
        gameOver();
    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost. The number was " + randomNumber;
            feedback.style.color = "red";
            totalLosses++;  
            updateWinLossDisplay();
            gameOver();
        }
        else if(guess> randomNumber){
            feedback.textContent = "Guess was high";
        }else{
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}

