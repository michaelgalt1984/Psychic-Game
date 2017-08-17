var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = null; 
//this will be a function, which randomly draws a letter from the alphabet array
var userGuess = null; 
//this will be a onkeyup capture from inside the form box
var missedGuesses = []; 
//this will be all the letters which the user guessed which didn't match the randomLetter, also max length of 3
var guessesRemaining = ["3", "2", "1", "No more guesses left- you lose!"]; 
//this is an array which get draws from if userGuess === false
var wins = 0;
//this will get iterated if userGuess === randomLetter
var losses = 0;
//this will get iterated if guessesRemaining === "No more guesses left- you lose!"
var text = "";

var updateGuessesRemaining = function() {
	document.getElementById("#guessesRemainingBox").innerHTML = guessesRemaining;
};

var updateRandomLetter = function() {
	randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var updateMissedGuesses = function() {
	document.getElementById("#guessBoxFeedback").innerHTML = missedGuesses.join(", ");
};

function getGuesses() {
	var userGuess = document.getElementById("letterGuesses").value;
};

var reset = function() {
	guessesRemaining = 0;
	userGuess = [];
	missedGuesses = [];
	updateRandomLetter();
	updateGuessesRemaining();
	updateMissedGuesses();
      // randomLetter = new;
  };

updateRandomLetter();
updateGuessesRemaining();

document.onkeyup = function(event) {
	guessesRemaining++;
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	userGuess.push(letter);
	guessesRemaining();
	updateGuessesSoFar();

	if (letter === randomLetter) {

	wins++;
	document.getElementById("#wins").innerHTML = wins;

	reset();
	}


	if (guessesRemaining === "No more guesses left- you lose!") {

	losses++;
	document.querySelector("#losses").innerHTML = losses;

	reset();
	}
};



