//Version 1

// var ques = prompt("Are we there yet?");

// while(ques !== "yes" && ques !== "yeah") {
//     var ques = prompt("Are we there yet?");
// }

// alert("Yay, we made it!!!");

//Version 2

var ques = prompt("Are we there yet?");

while(ques.indexOf("yes") === -1 && ques.indexOf("yeah") === -1 ) {
     var ques = prompt("Are we there yet?");
}

alert("Yay, we made it!!!");