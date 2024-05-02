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
        return displayText.innerText = calculator.number;
    }
    else {
        return;
    }
});


operatorButtons.addEventListener('click', event => {
    if (event.target.classList.contains('operatorButton')) {
        switch (event.target.innerText) {
            case '/':
                break;
            case 'X':
                break;
            case '-':
                break;
            case '+':
                break;
        }
    } else {
        return;
    }
});


