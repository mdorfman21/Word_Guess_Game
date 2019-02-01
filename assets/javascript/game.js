//array of 90's terms and setting wins and losses to 0
var wordsArray = ["savor", "fresh", "howdy", "burger"];

var answerArray = [];
var rightGuessArray = [];
var wrongGuessArray = [];

var wins = 0;
var losses = 0;
var guess = null;

//Create variables that hold html references
var winsText = document.getElementById("number-of-wins");
var lossesText = document.getElementById("number-of-losses");
var answerArrayText = document.getElementById("guess-this-word");
var numberOfGuesses = document.getElementById("number-of-guesses");
var listOfGuessed = document.getElementById("list-of-guessed");
var wrongGuessedText = document.getElementById("wrong-guessed");
var rightGuessedText = document.getElementById("right-guessed");

//picking a word out of the array
var computerPickedWord =
  wordsArray[Math.floor(Math.random() * wordsArray.length)];

//print the underscores
for (var i = 0; i < computerPickedWord.length; i++) {
  answerArray[i] = " _";
}

//Getting the user's guess
document.onkeyup = function(event) {
  var guess = event.key.toLowerCase();
  console.log(guess);

  //Checking if the guess is in the word
  if (computerPickedWord.toLowerCase().indexOf(guess) > -1) {
    rightGuessArray.push(guess);
    rightGuessedText.textContent = rightGuessArray;
  } else {
    wrongGuessArray.push(guess);
    wrongGuessedText.textContent = wrongGuessArray;
  }
//replace underscore with letter
  answerArray[computerPickedWord.indexOf(guess)] = guess;
  console.log(answerArray);
  answerArrayText.textContent = answerArray;


    console.log(answerArray.join());
  }
};
// document.addEventListener("keypress", event => {
//   var keycode = event.keyCode;
//   var keyLetter = String.fromCharCode(keycode);
//   console.log(keyLetter);
// });

answerArray.join(" ");

answerArrayText.textContent = answerArray;
