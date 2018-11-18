
// Variables
var options = ["apple", "banana", "car"]; // Array of word options to randomly choose from
var alphabet = "abcdefghijklmnopqrstuvwxyz"; // All the possible valid key presses (alphabet)
var answer = ""; /// Chosen word (empty string to start with)
var numRemain = 10;
var numCorrect = 0;
var incorrectGuesses = [];
var underscores = [];

// Display in HTML
var displayMysteryWord = document.getElementById("mysteryWord");
var displayGuessLeft = document.getElementById("guessLeft");
var displayGuessedLetters = document.getElementById("guessedLetters");


// Function resetGame refresh counters and display
function resetGame() {
    numRemain = 10;
    numCorrect = 0;
    incorrectGuesses = [];
    displayGuessLeft.textContent = numRemain;
    displayGuessedLetters.textContent = incorrectGuesses;
}

// Function newUnderscore randomly chooses an answer from the options array and generates an equal array of underscores
function newUnderscore() {
    answer = options[Math.floor(Math.random() * options.length)];
    underscores = []; // reset the underscores
    // Number of letters in answer correspond to the number of underscores
    for (var i = 0; i < answer.length; i++) {
        underscores.push(" _");
    }

    // displays without commas separating each item
    displayMysteryWord.textContent = underscores.join("");
}


// Generate the initial answer to Mystery word by calling function newUnderscore
newUnderscore();

// Displays the initial number of guesses remaining (should be 10)
displayGuessLeft.textContent = numRemain;

// This function is run whenever the user presses a key
document.onkeyup = function (event) {

    // Determines which key was pressed
    var pressedKey = (event.key).toLowerCase();

    if (alphabet.indexOf(pressedKey) == -1) { // Not an alphabet key
        alert("Pressed a key that is not a letter of the alphabet");
    } else if (incorrectGuesses.indexOf(pressedKey) > -1) { // Key already listed in incorrect guesses
        alert("Already guessed this incorrect letter");
    } else if (underscores.indexOf(pressedKey) > -1) { // Key already used and was correct
        alert("Already guessed this correct letter");
    } else if (answer.indexOf(pressedKey) > -1) { // Key matches answer
        for (var i = 0; i < answer.length; i++) { // Checks each letter
            if (answer[i] === pressedKey) {
                underscores[i] = answer[i];
                numCorrect++;
            }
        }
    } else { // Key doesn't match the answer
        incorrectGuesses.push(pressedKey);
        numRemain--;
    }

    // update display with every key press
    displayMysteryWord.textContent = underscores.join("");
    displayGuessLeft.textContent = numRemain;
    displayGuessedLetters.textContent = incorrectGuesses;

    // End game conditions and reset if player ran out of guesses or got the answer
    if (numRemain <= 0) { // no more guesses remaining
        confirm("GAME OVER!! Mystery word was: " + answer);
        resetGame();
        newUnderscore();
    } else if (numCorrect == answer.length) { // answered all the characters in the mystery word
        confirm("YOU WON! Mystery word was: " + answer);
        resetGame();
        newUnderscore();
    }

}; // close key event

