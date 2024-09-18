// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}
// Function to delete the last character from the display
function deleteLast() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}
// Function to append a number or decimal point to the display
function appendNumber(number) {
    let display = document.getElementById('display').innerText;
    if (display === '0') {
        document.getElementById('display').innerText = number;
    } else {
        document.getElementById('display').innerText += number;
    }
}
// Function to append an operator to the display 
function appendOperator(operator) {
    let display = document.getElementById('display').innerText;
    let lastChar = display[display.length - 1];
    switch (lastChar) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            document.getElementById('display').innerText = display.slice(0, -1) + operator;
            break;
        default:
            document.getElementById('display').innerText += operator;
    }
}
// Function to perform calculation
function calculate() {
    let display = document.getElementById('display').innerText;
    let result = eval(display);
    document.getElementById('display').innerText = result;
}
