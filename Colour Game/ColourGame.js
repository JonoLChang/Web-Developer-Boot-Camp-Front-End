var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            //The above code (called ternary operator) is the same as the following code:
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // }
            // else{
            //     numSquares = 6;
            // }
            reset();
    
            //figure out how many squares to show
            //pick new colours
            //pick a new pickedColor
            //update page to reflect changes 
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];    
    
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of picked square 
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //generate all new colours
    colors = generateRandomColors(numSquares);
    //pick a new random colour from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    //change colours of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";   
}

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i=0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";  
//     }
// });

resetButton.addEventListener("click", function() {
    reset();
});

function changeColor(color) {
    //loop through all squares 
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//function to call an element from the "colors array"
function pickColor() {
    var random = Math.floor(Math.random() * colors.length); //N.B. Math.random() gives a number between 0 and 1 (inclusive of 0 but exclusive of 1). Multiply i.e "*" by a number for the upper limit (e.g.colors.length will include the last index and not the last number of the actual length)
    return colors[random]; //random will call an index of the "colors array"
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
};