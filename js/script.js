// Guessed letters
const guessedLettersElement = document.querySelector(".guessed-letters");

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
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
        for (const letter of word) {
            console.log(letter);
            placeholderLetters.push("●");
    }
    wordProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    letterInput.value = "";    
    const goodGuess = validate(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
});

const validate = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "You need to enter something.";
    }
    else if (input.length > 1) {
        message.innerText = "Only enter one letter.";
    }
    else if (!input.match(acceptedLetter)) {
        message.innerText = "Only letters accepted.";
    }
    else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already tried that letter.";
    }
    else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};