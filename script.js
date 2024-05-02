// Element Variables
const displayText = document.querySelector('.displayText')
const miscButtons = document.querySelector('.miscButtonContainer');
const numberButtons = document.querySelector('.numberButtonContainer');
const operatorButtons = document.querySelector('.operatorButtonContainer');

const calculator = {
    initialMulDivTotal: 1,
    total: 0,
    number: '',
    isDecimal: false,
};

// Event Handlers

// Captures number input and prints it to display
numberButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('numberButton')) {
        calculator.number += Number(event.target.innerText);
        return displayText.innerText = calculator.number;
    }
    else {
        return;
    }
});
