var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < colors.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];    

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of picked square 
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColor(color) {
    //loop through all squares 
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length); //N.B. Math.random() gives a number between 0 and 1 (inclusive of 0 but exclusive of 1). Multiply i.e "*" by a number for the upper limit (e.g.colors.length will include the last index and not the last number of the actual length)
    return colors[random];
}