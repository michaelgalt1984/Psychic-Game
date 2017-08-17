var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter; 
//this will be a function, which randomly draws a letter from the alphabet array
var userGuess; 
//this will be a onkeyup capture from inside the form box
var missedGuesses = []; 
//this will be all the letters which the user guessed which didn't match the randomLetter, also max length of 3
var guessesRemaining = ["3", "2", "No more guesses left- you lose!"]; 
//this is an array which get draws from if userGuess === false
var guessIndex = 0;
var wins = 0;
//this will get iterated if userGuess === randomLetter
var losses = 0;
//this will get iterated if guessesRemaining === "No more guesses left- you lose!"
// var text = "";

var updateGuessesRemaining = function() {
	document.getElementById("guessesRemainingBox").innerHTML = guessesRemaining[guessIndex];
	console.log(guessIndex);
};

var updateRandomLetter = function() {
	randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(randomLetter);
};

var updateMissedGuesses = function() {
	document.getElementById("guessBoxFeedback").innerHTML = missedGuesses.push(userGuess);
};

// function getGuesses() {
// 	var userGuess = document.getElementById("letterGuesses").value;
// };

var reset = function() {
	guessIndex = 0;
	userGuess;
	missedGuesses = [];
	updateRandomLetter();
	updateGuessesRemaining();
	updateMissedGuesses();
      // randomLetter = new;
  };


  document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  reset();
  document.onkeyup = function(event) {
  	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  	console.log(userGuess);


  	if (userGuess === randomLetter) {

  		wins++;
  		document.getElementById("wins").innerHTML = wins;

  		reset();
  	}

  	else {
  		
  		if (guessIndex === 3) {

  			losses++;
  			document.getElementById("losses").innerHTML = losses;

  			reset();
  		}
  		updateGuessesRemaining();
  		updateMissedGuesses();
  		guessIndex++;
  	}


  };
});


