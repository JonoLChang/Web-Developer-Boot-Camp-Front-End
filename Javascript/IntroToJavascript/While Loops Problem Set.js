//Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");

var num = -9 

while(num < 19) {
    console.log(num);
    num++
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

var num = 12

while(num < 40) {
    console.log(num);
    num+=2
}

//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

var num = 300 

while(num < 333) {
    if(num % 2 === 1) {
        console.log(num);
    }
    num++
}

//Print all numbers divisible by 5 AND 3 between 5 and 50 
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50 ");

var num = 6

while(num < 50) {
    if(num % 3 === 0 && num % 5 ===0) {
        console.log(num);
    }
    num++
}