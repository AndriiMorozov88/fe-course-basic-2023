const firstString = +prompt('Enter the first number:', '').trim();
const sign = prompt('Enter mathematic sign (+, -, *, /, %, **):', '').trim();
const secondString = +prompt('Enter the second number:', '').trim();

const firstNumber = +firstString;
const secondNumber = +secondString;

function calculator() {
    let result;

    if (sign === '+') {
        result = firstNumber + secondNumber;
    } else if (sign === '-') {
        result = firstNumber - secondNumber;
    } else if (sign === '*') {
        result = firstNumber * secondNumber;
    } else if (sign === '/') {
        result = firstNumber / secondNumber;
    } else if (sign === '%') {
        result = firstNumber % secondNumber;
    } else if (sign === '**') {
        result = firstNumber ** secondNumber;
    } else {
        result = 'Ups! Something went wrong...';
    }
    return result;
}
const equal = calculator();
alert(`Your result: ${Number.isNaN(equal) || equal === undefined || equal === '' ? 'Ups! Something went wrong...' : equal}`);
window.location.reload();
