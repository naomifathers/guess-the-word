// Guessed letters
const guessedLetters = document.querySelector(".guessed-letters");

// "Guess!" button 
const guessButton = document.querySelector(".guess");

// Letter input
const letterInput = document.querySelector(".letter");

// Progress paragraph 
const wordProgress = document.querySelector(".word-in-progress");

// Remaining guesses
const remainingGuesses = document.querySelector(".remaining");

// Remaining guesses span
const remainingGuessesSpan = document.querySelector(".remaining span");

// Paragraph that displays a message when a letter is entered
const message = document.querySelector(".message");

// "Play again!" button (hidden)
const playAgainButton = document.querySelector(".play-again hide");

const word = "magnolia";

const circles = function () {
    wordProgress.innerText = "●";
};

circles(word);