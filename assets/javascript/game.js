// Array of words to be chosen.
var words = ["earth", "flare", "jupiter", "lunar", "mars", "planet", "pluto", "rocket", "star", "space", "venus",];

//Global Varibles
var currentWord = null;
var individualLetters = [];
var matchedLetters = [];
var underscore = '';
var guessedLetters = [];
var wins = 0;
var numberOfGuesses = 10;
var letterClicked = null;

// Displays number of guesses left.

// Picks a random word from words array.
// // currentWord = words[Math.floor(Math.random() * words.length)];
// 

// Counts wins/resets game.
function gameStart() {
    numberOfGuesses = 10;
    document.getElementById("guess-number").innerHTML = numberOfGuesses
    currentWord = words[Math.floor(Math.random() * words.length)];
    individualLetters = currentWord.split("");
    console.log(currentWord.split(""));
    underscore = '';
    console.log(currentWord);
    matchedLetters = [];
    guessedLetters = [];
    document.getElementById("letters-guessed").innerHTML = guessedLetters.join(" ");
    createUnderscores();

}
gameStart();



// Splits the chosen word into individual letters.


// Creates a funtion that prints the underscores representing how many letters are in the word.
function createUnderscores() {
    for (var k = 0; k < currentWord.length; k++) {
        matchedLetters.push(" _ ");

    }
    document.getElementById("current-word").innerHTML = matchedLetters.join("");
    console.log(matchedLetters.join())
}
// createUnderscores();

// Remove underscore and replace with letter clicked.
function replaceUnderscore(letterMatched) {
    var storedIndex = currentWord.indexOf(letterMatched)
    matchedLetters[storedIndex] = letterMatched;

    document.getElementById("current-word").innerHTML = matchedLetters.join('');
}

// Takes user input and compares it to the current word.
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letterClicked = event.key.toLowerCase();
        console.log('letter clicked ' + letterClicked)
        if (currentWord.includes(letterClicked) && !matchedLetters.includes(letterClicked)) {
            replaceUnderscore(letterClicked);
            console.log('matched letter ' + matchedLetters)
        }

        if (!guessedLetters.includes(letterClicked) && !currentWord.includes(letterClicked)) {
            guessedLetters.push(letterClicked);
            document.getElementById("guess-number").innerHTML = numberOfGuesses--
            document.getElementById("letters-guessed").innerHTML = guessedLetters.join(" ");
        }

        if (numberOfGuesses === -1) {
            alert("You lose!");
            gameStart();
        }

        if (currentWord == matchedLetters.join('')) {
            alert("You win! Congratulations!");
            console.log(currentWord.split(""))
            // document.location.reload()
            wins++;
            document.getElementById("wins").innerHTML = wins
            gameStart();
        }


    };




}




