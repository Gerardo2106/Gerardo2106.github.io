console.log("running code");
let max = 99;
let min = 1;
let correctNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let correctMessage = 'Yuh';
let toohigh = 'nah, too high';
let toolow = 'nah, too low';
let out_of_bound = 'its out of bound, needs to be 1-99';
let attempts = 0;


let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let attemptsDisplay = document.querySelector("#attemptsDisplay");


guessButton.addEventListener("click", function displayWin() {
    attempts++;
    let guess = guessInput.value;
    if (guess == correctNumber) {
        guessResult.textContent = correctMessage;
        guessResult.style.color = "#0059ff";
    }
    else if(guess>99 || guess<1){
        guessResult.textContent = out_of_bound;
        guessResult.style.color = '#ea00ff';
    }
    else if (guess > correctNumber) {
        guessResult.textContent = toohigh;
        guessResult.style.color = '#ff0000';
    }
    else {
        guessResult.textContent = toolow;
        guessResult.style.color = '#ffffff';
    }
     if (attemptsDisplay) {
            attemptsDisplay.textContent += `Attempt ${attempts}: ${guess}\n`;
            attemptsDisplay.style.color = '#c42280';
    }
})

