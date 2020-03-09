// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself)

function printReverse(array) {
    for(var i = array.length - 1; i >= 0; i--){
      console.log(array[i]);  
    } 
}

printReverse([1, 2, 3]);

// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

function isUniform(arr) {
    var first = arr[0];
    
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
        return true;
        }
}

isUniform([1, 1, 1, 1]);

// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(arr) {
    var total = 0; 
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

sumArray([5,1,1,1]);

// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr){
    var maxNum = arr[0];
    arr.forEach(function(element){
        if(maxNum < element){
            maxNum = element;
        }
    })
    return maxNum;
}

max([1,2,3,4]);