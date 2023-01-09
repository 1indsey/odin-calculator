const add = function(a, b) {
    return a + b;
};

// add(3,5);

const subtract = function(a, b) {
    return a - b;
};

// subtract(10,4); 

const multiply = function(a, b) {
    return a * b;
};

// multiply(4,5);

const divide = function(a, b) {
    return a / b;
};

// divide(10,2);

let result; 

const operate = function(operator, a, b) {
    if (operator === '+') {
        result = (add(a,b));
    } else if (operator === '-' ) {
        result = (subtract(a,b));
    } else if (operator === '*') {
        result = (multiply(a,b));
    } else if (operator === '/') {
        result = (divide(a,b));
    } else {
        result = 'ERROR - NOT AN ACCECTABLE OPERATOR';
    };
};

operate('.', 10, 2); //FUNCTION TEST


//the below code adds event listeners to each button & calls the "displayCurrentValue" function on click

let current = "";

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        current += button.value;
        displayCurrentValue();
})});

//the below code populates a 'running display' that shows the value of the button most recently clicked

const runningDisplay = document.querySelector('.running-display');
let displayCurrentValue = function() {
runningDisplay.innerHTML = "";
const currentValue = document.createElement('h3');
currentValue.textContent = `${current}`;
runningDisplay.appendChild(currentValue);
};

//the below code populates the final result on the screen

const display = document.querySelector('.display');
const displayValue = document.createElement('h2');
displayValue.textContent = `EQUALS ${result}`;
display.appendChild(displayValue);

//the below code makes the Clear button resets the 'current' value & empties the runningDisplay div 

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    clear();
});

const clear = function() {
    current = "";
    runningDisplay.innerHTML = "";
};



//store first number that user enters in a variable
//if multiple numbers are pressed in a row, concat them and turn them into a #
//store the operator in a variable
//store the number(s) after the operator is selected in another variable - possibly need some sort of event listener that captures #s entered before & after operator?
//perform the correct operation when equals button is pressed
//display results

//the below code stores the value of the buttons clicked, converts them to a number, and stores it in another variable

let enteredDigit = "";
let convertedDigit = 0;

const digitButtons = document.querySelectorAll('#digits');

digitButtons.forEach((digit) => {
    digit.addEventListener('click', () => {
        enteredDigit += digit.value;
        convertedDigit = Number(enteredDigit);
        console.log(convertedDigit);
        console.log(typeof convertedDigit);
})});

//the below code stores which operator is selected in variable selectedOperator

let selectedOperator;

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        selectedOperator = operator.value;
        console.log(selectedOperator);
    });
});