// This challenge is to rewrite code utilizing the .forEach() method with a for loop

// Original code with .forEach() method

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color){
    if(color % 3 === 0) {
        console.log(color);
    }
})

// for loop code

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0){
        console.log(numbers[i]);
    } 
}