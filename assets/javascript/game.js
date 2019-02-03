//array of 90's terms and setting wins and losses to 0
var wordsArray = [
  "booyah",
  "fresh",
  "howdy",
  "slater",
  "bangin",
  "dip",
  "crunk",
  "phat",
  "stylin",
  "kapowski"
];

var answerArray = [];
var rightGuessArray = [];
var wrongGuessArray = [];

var wins = 0;
var losses = 0;
var guess = null;
var numberOfGuesses = 10;
var checkAnswer = null;

//Create variables that hold html references
var winsText = document.getElementById("number-of-wins");
var lossesText = document.getElementById("number-of-losses");
var answerArrayText = document.getElementById("guess-this-word");
var numberOfGuessesText = document.getElementById("number-of-guesses");
var listOfGuessed = document.getElementById("list-of-guessed");
var wrongGuessedText = document.getElementById("wrong-guessed");
var rightGuessedText = document.getElementById("right-guessed");

function newGame() {
  //initialize variables
  var guess = null;
  var numberOfGuesses = 10;
  var checkAnswer = null;
  var answerArray = [];
  var rightGuessArray = [];
  var wrongGuessArray = [];

  numberOfGuessesText.textContent =
    "Wrong Guesses Remaining:" + numberOfGuesses;
  wrongGuessedText.textContent = "Wrong Guesses:  " + wrongGuessArray;
  rightGuessedText.textContent = "Correct Guesses:  " + rightGuessArray;

  //picking a word out of the array
  var computerPickedWord =
    wordsArray[Math.floor(Math.random() * wordsArray.length)];
  console.log(computerPickedWord);

  //print the underscores
  for (var i = 0; i < computerPickedWord.length; i++) {
    answerArray[i] = " _";
  }

  answerArrayText.textContent = answerArray.join(" ");
  //Getting the user's guess
  document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    console.log(guess);

    //Checking if the guess is in the word
    if (computerPickedWord.toLowerCase().indexOf(guess) > -1) {
      //if correct guess, add to the correct guess array

      rightGuessedText.textContent = "Correct Guesses:  " + rightGuessArray;
      if (rightGuessArray.indexOf(guess) == -1) {
        rightGuessArray.push(guess);
        rightGuessedText.textContent = "Correct Guesses:  " + rightGuessArray;
      }
    } else {
      //if the wrong guess add to the wrong guesses array
      wrongGuessedText.textContent = "Wrong Guesses:  " + wrongGuessArray;
      if (wrongGuessArray.indexOf(guess) == -1) {
        wrongGuessArray.push(guess);
        wrongGuessedText.textContent = "Wrong Guesses:  " + wrongGuessArray;

        //if it's a wrong guess, take away a number of guesses remaning
        numberOfGuesses = numberOfGuesses - 1;
        numberOfGuessesText.textContent =
          "Wrong Guesses Remaining:  " + numberOfGuesses;
      }
    }
    //if you get to 0 guesses, you get an alert and you also go up a loss
    if (numberOfGuesses == 0) {
      alert("You lose!");
      losses = losses + 1;
      lossesText.textContent = "Losses: " + losses;

      newGame();
    }

    //replace underscore with letter
    answerArray[computerPickedWord.indexOf(guess)] = guess;
    console.log(answerArray);
    answerArrayText.textContent = answerArray.join(" ");
    var checkAnswer = answerArray.join("");
    console.log(answerArray.join(""));

    //alert that you won and increase the score of wins
    if (checkAnswer == computerPickedWord) {
      alert("You win");
      wins = wins + 1;
      winsText.textContent = "Wins: " + wins;

      newGame();
    }
  };
}

newGame();
//Starting the game with the correct wins and losses and guesses remaining

numberOfGuessesText.textContent =
  "Wrong Guesses Remaining:  " + numberOfGuesses;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
