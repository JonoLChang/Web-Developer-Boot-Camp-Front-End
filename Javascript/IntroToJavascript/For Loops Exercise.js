//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");

for(var i = -9; i < 19; i++) {
    console.log(i);
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

for(var i = 10; i < 40; i+=1) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

for(var i = 300; i <333; i+=1) {
    if(i % 2 !==0) {
        console.log(i);  
    }
}

//Print all numbers divisible by 5 AND 3 between 5 and 50 
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50 ")

for(var i = 6; i <= 50; i++) {
    if(i % 5  === 0 && i % 3 ===0) {
        console.log(i);
    }
} 