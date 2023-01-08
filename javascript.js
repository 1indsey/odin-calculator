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

operate('.', 10, 2);


//when a button is pressed, display that input to user (press 2, display 2)
//when another button is pressed, add that input to the current input display (press 4, display '24', press +, 'display 24 +' and so on)
//make clear button clear values and display

//the below code adds event listeners to each button & calls the "displayCurrentValue" function on click

let current;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        current = button.value;
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



