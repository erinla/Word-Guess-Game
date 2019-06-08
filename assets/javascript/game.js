// Array of words to be chosen.
var words = ["astronaut", "astronomy", "cosmos", "earth", "flare", "interstellar", "jupiter", "lunar", "mercury", "mars", "meteor", "nasa", "observatory", "planet", "pluto", "eclipse", "rocket", "star", "space", "telescope", "terrestrial", "universe", "uranus", "venus",];

//Global Varibles
var currentWord = null;
var individualLetters = [];
var matchedLetters = [];
var underscore = '';
var guessedLetters = [];
var wins = 0;
var numberOfGuesses = 10;
var letterClicked = null;

// Picks a random word from words array.
currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);

// Splits the chosen word into individual letters.
individualLetters = currentWord.split("");
console.log(currentWord.split(""));

// Creates a funtion that prints the underscores representing how many letters are in the word.
function printUnderscores() {
    for (var i = 0; i < individualLetters.length; i++) {


        if (matchedLetters.includes(individualLetters[i])) {
            underscore += individualLetters[i]
        } else {
            underscore += " _ "
        }

    }
    document.getElementById("current-word").innerHTML = underscore;
}

// Takes user input and compates it to the current word.
document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var letterClicked = event.key.toLowerCase();
        console.log('letter clicked ' + letterClicked)

        if (!guessedLetters.includes(letterClicked) && !currentWord.includes(letterClicked)) {
            guessedLetters.push(letterClicked);
        }

        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord.includes(letterClicked) && !matchedLetters.includes(letterClicked)) {
                matchedLetters.push(letterClicked)
                console.log('matched letter ' + matchedLetters)
            }
        }



    } else {
        alert('click a letter from the alphabet')
    } printUnderscores();


    console.log("incorrect guessed letters " + guessedLetters)
}



