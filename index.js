const readline = require("readline-sync");

console.log('\nWelcome to the calulator!');
console.log('=========================');

console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log('\nPlease enter the first number:')
const operand1= readline.prompt();
const firstNumber = +operand1;

console.log('\nPlease enter the second number:');
const operand2 = readline.prompt();
const secondNumber = +operand2;

// var answer;
let answer;

// Example using if and else
/*if (operator == '+') {
    answer = firstNumber + secondNumber;
} else if (operator == '-') {
    answer = firstNumber - secondNumber;
} else if (operator == '*') {
    answer = firstNumber * secondNumber;
} else if (operator == '/') {
    answer = firstNumber / secondNumber;  
} else {
    console.log('\n' + operator + ' is not a valid operator');
}
*/

// Example using switch
switch (operator) {
    case '+':
        answer = firstNumber + secondNumber;
        break;
    case '-':
        answer = firstNumber - secondNumber;
        break;
    case '*':
        answer = firstNumber * secondNumber;
        break;
    case '/':
        answer = firstNumber / secondNumber;  
        break
    default:
        console.log(operator + ' is not a valid operator');
}

// console.log(answer);
// console.log('The answer is: ' + answer);
console.log('\nThe answer is: ' + firstNumber + operator + secondNumber + [" = "] + answer);