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

const operate = function(operator, a, b) {
    if (operator === '+') {
        return(add(a,b));
    } else if (operator === '-' ) {
        return(subtract(a,b));
    } else if (operator === '*') {
        return(multiply(a,b));
    } else if (operator === '/') {
        return(divide(a,b));
    } else {
        return 'ERROR - NOT AN ACCECTABLE OPERATOR';
    };
};

// operate('.', 10, 2);