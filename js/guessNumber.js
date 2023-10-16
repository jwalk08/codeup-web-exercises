// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize a variable to keep track of the number of attempts
let attempts = 0;

// Define a function to play the game
function guessNumber() {
    const userGuess = prompt("Guess a number between 1 and 100:");

    // Check if the user clicked "Cancel" or entered an invalid input
    if (userGuess === null || isNaN(userGuess)) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        const guess = parseInt(userGuess, 10);
        attempts++;

        if (guess < 1 || guess > 100) {
            alert("Please enter a number between 1 and 100.");
        } else if (guess === randomNumber) {
            alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
            guessNumber();
        } else {
            alert("Too high! Try again.");
            guessNumber();
        }
    }
}

// Start the game
guessNumber();
