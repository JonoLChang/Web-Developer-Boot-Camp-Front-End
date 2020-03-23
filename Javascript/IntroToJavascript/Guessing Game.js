var secretNumber = 4;

var stringGuess = prompt("Guess a number");

var guess = Number(stringGuess);

if(guess = secretNumber) {
    alert("You are correct!");
}
else if(guess < secretNumber) {
    alert("Too low. Guess again!");
}
else {
    alert22("Too high. Guess again!");
}