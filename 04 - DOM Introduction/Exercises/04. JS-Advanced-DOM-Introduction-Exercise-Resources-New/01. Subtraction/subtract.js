function subtract() {
    let firstNumElement = document.getElementById('firstNumber').value;
    let secondNumElement = document.querySelector('#secondNumber').value;
    document.getElementById('result').textContent = Number(firstNumElement) - Number(secondNumElement);
}