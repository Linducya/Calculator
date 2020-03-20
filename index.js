const readline = require("readline-sync");

console.log('\nWelcome to the calulator!');
console.log('=========================');

console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log ('\nHow many numbers do you want to ' + operator + ' ?');
const response = readline.prompt();
const arrayLength = +response;

// ways to create an array giving arrayLength a number
    // let myArray = new Array(arrayLength);
    // let myArray = Array(arrayLength);
let myArray = [];
myArray.length = arrayLength;
console.log('let myArray = ' + myArray); // shows myArray empty
console.log('myArray.length = ' + myArray.length); //outputs length

//Loop to push entered numbers to myArray 
for (let i=0; i < arrayLength; i++) {
    console.log('\nPlease enter number ' + (i + 1) + ':');
    const operand = readline.prompt();
    const number = +operand; //turns string into number
    myArray[i] = number;
    // myArray.push(number); //set myArray.length to zero using push
}

// let answer = myArray.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
// console.log('testing reduce iterative method ' + answer);

//Read the array by index for calculations
let answer = myArray[0];
for (let i = 1; i < myArray.length; i++) {
    // Example using if and else
    if (operator === '+') {
        answer += myArray[i];
    } else if (operator === '-') {
        answer -= myArray[i];
    } else if (operator === '*') {
        answer *= myArray[i];
    } else if (operator === '/') {
        answer /= myArray[i];
    } else {
        console.log('\n' + operator + ' is not a valid operator');
    }
// Example using switch
// switch (operator) {
//     case '+':
//         answer += myArray[i];
//         break;
//     case '-':
//         answer -= myArray[i];
//         break;
//     case '*':
//         answer *= myArray[i];
//         break;
//     case '/':
//         answer /= myArray[i];
//         break
//     default:
//         console.log(operator + ' is not a valid operator');
// }
}

console.log('\nThe answer is: ' + answer);