// Element Variables
const displayText = document.querySelector('.displayText')
const miscButtons = document.querySelector('.miscButtonContainer');
const numberButtons = document.querySelector('.numberButtonContainer');
const operatorButtons = document.querySelector('.operatorButtonContainer');

const calculator = {
    total: 0,
    number: '',
    operator: '',
    isEvalulate: false,
    isClear: true,
    isDecimal: false,
};

// Event Handlers

// Captures number input and prints it to display
numberButtons.addEventListener('click', event => {
    if (event.target.classList.contains('numberButton')) {
        calculator.number += event.target.innerText;
        return displayText.innerText = Number(calculator.number);
    }
    else {
        return;
    }
});


operatorButtons.addEventListener('click', event => {
    if (event.target.classList.contains('operatorButton')) {
        switch (event.target.innerText) {
            case '/':
                division();
                break;
            case 'X':
                multiplication();
                break;
            case '-':
                subtraction();
                break;
            case '+':
                addition();
                break;
        }
    } else {
        return;
    }
    return;
});

miscButtons.addEventListener('click', event => {
    if (event.target.classList.contains('miscButton')) {
        switch (event.target.innerText) {
            case 'AC':
                resetCalculator();
                break;
            case '+/-':
                calculator.number = Number(calculator.number) * -1;
                displayText.innerText = calculator.number;
                break;
            case '%':
                
                break;
        }
    }
})


// Functions

function addition() {
    calculator.number = Number(calculator.number);
    calculator.operator = '+';

    if (calculator.isClear) {
        calculator.total = calculator.number + 0;
        calculator.isClear = false;
    } else {
        calculator.total = calculator.number + calculator.total;
    }

    calculator.number = '';
    displayText.innerText = calculator.total;
}

function subtraction() {
    calculator.number = Number(calculator.number);
    calculator.operator = '-';

    if (calculator.isClear) {
        calculator.total = calculator.number - 0;
        calculator.isClear = false;
    } else {
        calculator.total = calculator.total - calculator.number;
    }

    calculator.number = '';
    displayText.innerText = calculator.total;
}

function multiplication() {
    calculator.operator = 'X';

    if (!calculator.isClear && calculator.number === ''){
        displayText.innerText = calculator.total;
    } 
    else if (calculator.isClear) {
        calculator.total = Number(calculator.number) * 1;
        calculator.isClear = false;

    } else {
        calculator.total = calculator.total * Number(calculator.number);
    }

    calculator.number = '';
    displayText.innerText = calculator.total;
}

function division() {
    calculator.operator = '/';

    if (!calculator.isClear && calculator.number === ''){
        displayText.innerText = calculator.total;
    } 
    else if (calculator.isClear) {
        calculator.total = Number(calculator.number) / 1;
        calculator.isClear = false;

    } else {
        calculator.total = calculator.total / Number(calculator.number);
    }

    calculator.number = '';
    displayText.innerText = calculator.total;
}

function resetCalculator() {
    calculator.total = 0;
    calculator.number = '';
    calculator.operator = '';
    calculator.isEvalulate = false;
    calculator.isClear = true;
    calculator.isDecimal = false;
    displayText.innerText = calculator.total;
}