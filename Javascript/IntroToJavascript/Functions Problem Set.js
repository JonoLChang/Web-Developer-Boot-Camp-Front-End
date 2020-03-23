// isEven() function 

function isEven(num) {
    if(num % 2 === 0) {
        return true ;
    }
    else {
        return false ;
    }
}

isEven();

// isEven function Shortcut

function isEven(num) {
    return num % 2 === 0;
}

isEven() ;

// factorial() function

function factorial(num) {
    if(num === 0 || num === 1) {
        return 1 ;
    }
    for(i = num - 1; i >= 1; i--) {
        num *= i ; // num = num * i ;
    }
    return num
}

factorial();

// factorial() function Shortcut 

function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i; 
    }
} 

factorial();

// kebabToSnake()

function kebabToSnake(string) {
    var kebabStr = string ;
    var snakeStr = kebabStr.replace(/-/g, "_") ;
    return snakeStr ;
}

kebabToSnake() ;