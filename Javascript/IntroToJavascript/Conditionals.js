var age = Number(prompt("What is your age?"));

if(age < 0) {
    console.log("Error"); 
}

if(age === 21) {
    console.log("Happy 21st Birthday!!");
}

if(age % 2 !==0) {
    console.log("Your age is odd!");
}

if(Math.sqrt(age)%1===0) {
    console.log("perfect square!");

}