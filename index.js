const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('\nWelcome to the calulator!');
    console.log('=========================');
}

function enterResponse(prompt) {
    console.log('\n' + prompt);
    return readline.prompt();
}

function convertNumber(prompt) {
    let response;
    do {
        response = +enterResponse(prompt);
    }
    while (isNaN(response));
    return response;
}

function getOperator() {
    do   {
        operator = enterResponse('\nPlease enter the operator: ');
    }
    while (!(operator == '+' || operator == '-' || operator == '*' || operator == '/'));
    return operator;
}

function getNumberArray() {
    const iterations = convertNumber('\nHow many numbers do you want to ' + operator + ' ?');
    let myArray = [];
    myArray.length = iterations;
    for (let i = 0; i < myArray.length; i++) {  
        myArray[i] = convertNumber('\nPlease enter number ' + (i + 1) + ':');
    }
    console.log(myArray);
    return myArray;
}

function calculateAnswer(myArray, operator) {
    let answer = myArray[0];
    for (let i = 1; i < myArray.length; i++) {
        if (operator === '+') {
            answer += myArray[i];
        } else if (operator === '-') {
            answer -= myArray[i];
        } else if (operator === '*') {
            answer *= myArray[i];
        } else if (operator === '/') {
            answer /= myArray[i];
        }
    }
    return answer;
}

function performOneCalculation() {
    const operator = getOperator();
    const myArray = getNumberArray();
    const answer = calculateAnswer(myArray, operator);
    return console.log('\nThe answer is: ' + answer);
}

printWelcomeMessage();
while (true) {
    performOneCalculation();
}