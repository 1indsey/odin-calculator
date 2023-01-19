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

//the below code populates the final result on the screen

const display = document.querySelector('.display');
let displayResult = function() {
    display.innerHTML = "";
    const displayValue = document.createElement('h2');
    displayValue.textContent = `EQUALS ${result}`;
    display.appendChild(displayValue);
};

//below code is the main operate function - attached to equals button

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
        result = 'ERROR - NOT AN ACCEPTABLE OPERATOR';
    };
};

// operate('+', 10, 2); //FUNCTION TEST

//the below code attaches the operate function to the equals button

const equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', () => {
    operate(selectedOperator, convertedDigit, convertedDigit2);
    displayResult();
    console.log(result);
});

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

//the below code makes the Clear button resets the 'current' value & empties the runningDisplay div 

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    clear();
});

const clear = function() {
    current = "";
    runningDisplay.innerHTML = "";
    result = 0;
    display.innerHTML = "";
    selectedOperator = "";
    enteredDigit = "";
    convertedDigit = 0;
    enteredDigit2 = "";
    convertedDigit2 = 0;
    selectedOperator === "";
    countOperatorButtonClicks = 0;
};


//the below code stores the value of the buttons clicked, converts them to a number, and stores it in another variable
//if a number is pressed after an operation is selected, the operate function is executed

let selectedOperator;

let enteredDigit = "";
let convertedDigit = 0;
let enteredDigit2 = "";
let convertedDigit2 = 0;

const digitButtons = document.querySelectorAll('#digits');


digitButtons.forEach((digit) => {
    digit.addEventListener('click', () => {
        if (selectedOperator === '+' || selectedOperator === '-' || selectedOperator === '*' || selectedOperator === '/') {
            enteredDigit2 += digit.value;
            convertedDigit2 = Number(enteredDigit2);
            console.log(convertedDigit2);
            console.log(typeof convertedDigit2);
        } else {
            enteredDigit += digit.value;
            convertedDigit = Number(enteredDigit);
            console.log(convertedDigit);
            console.log(typeof convertedDigit);
        };
        if (convertedDigit2 > 0) {
            operate(selectedOperator, convertedDigit, convertedDigit2);
        };
})});

//the below code stores which operator is selected in variable selectedOperator
//it also counts the number of clicks on an operator button
//if # of clicks is greater than 1, the first operation is automatically performed & resulting value displayed


const operatorButtons = document.querySelectorAll('.operator');
let countOperatorButtonClicks = 0;
// let selectedOperator2 = "";

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        countOperatorButtonClicks += 1;
        selectedOperator = operator.value;
        console.log(selectedOperator);
        console.log(typeof selectedOperator);
        console.log(`OPERATOR CLICKS: ${countOperatorButtonClicks}`);
    if (countOperatorButtonClicks > 1) {
        displayResult();
        convertedDigit = result;
        enteredDigit2 = "";
        convertedDigit2 = 0;
    };
    });
});



// operate(selectedOperator, convertedDigit, convertedDigit2); 

//when any operator is clicked a second time, the first operation should be evaluated and the value stored DONE
//AND DISPLAYED DONE
//possibly count number of clicks on an operator button? DONE
//when # of clicks is equal or greater than 2, the operate function is excuted, the resulting value is stored in 'convertedDigit', and the 'convertedDigit2' variable is reset DONE
//the clear button would have to reset the number of operator clicks - DONE