const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function printWelcomeMessage() {
    console.log(`\nWelcome to the calulator!
=========================`);
}

function getStringInput(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}

function getNumber(prompt) {
    let response;
    do {
        response = +getStringInput(prompt);
    }
    while (isNaN(response));
    return response;
}

function getOperator() {
    let operator;
    do   {
        operator = getStringInput('Please enter the operator:');
    }
    while (!(operator === '+' || operator === '-' || operator === '*' || operator === '/'));
    return operator;
}

function getNumberArray(OPERATOR) {
    const ITERATIONS = getNumber(`How many numbers do you want to ${OPERATOR}?`);
    let myArray = [];
    myArray.length = ITERATIONS;
    for (let i = 0; i < myArray.length; i++) {  
        myArray[i] = getNumber(`Please enter number ${(i + 1)}:`);
    }
    return myArray;
}

function calculateAnswer(MYARRAY, OPERATOR) {
    let answer = MYARRAY[0];
    for (let i = 1; i < MYARRAY.length; i++) {
        if (OPERATOR === '+') {
            answer += MYARRAY[i];
        } else if (OPERATOR === '-') {
            answer -= MYARRAY[i];
        } else if (OPERATOR === '*') {
            answer *= MYARRAY[i];
        } else if (OPERATOR === '/') {
            answer /= MYARRAY[i];
        }
    }
    return answer;
}

function getVowelCounts(UPPERCASE_STRING) {
    let vowels = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (const CHARACTER of UPPERCASE_STRING) {
        if (vowels.hasOwnProperty(CHARACTER)) {
            vowels[CHARACTER]++;
        }
    }   
    return vowels;
}

function performOneArithmeticCalculation() {
    const OPERATOR = getOperator();
    const MYARRAY = getNumberArray(OPERATOR);
    const ANSWER = calculateAnswer(MYARRAY, OPERATOR);
    return console.log(`\nThe answer is: ${ANSWER}`);
}

function performOneVowelCountingCalculation() {
    const STRING = getStringInput('Please enter a string:');
    const UPPERCASE_STRING = STRING.toUpperCase();
    const VOWEL_COUNTS = getVowelCounts(UPPERCASE_STRING);

    console.log('\nThe vowel counts are:');
    for (const PROPERTY in VOWEL_COUNTS) {
        console.log(`     ${PROPERTY}: ${VOWEL_COUNTS[PROPERTY]}`);
    }
    return;
}

function getCalculationMode() {
    const MODE = getStringInput(`Which calculation mode do you want?
    ${ARITHMETIC_MODE}) Arithmetic
    ${VOWEL_COUNTING_MODE}) Vowel counting`);
    return MODE;
}

printWelcomeMessage();
while (true) {
    const CALCULATIONMODE = getCalculationMode();
    if (CALCULATIONMODE === ARITHMETIC_MODE) { 
        performOneArithmeticCalculation();
    } else if (CALCULATIONMODE === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}