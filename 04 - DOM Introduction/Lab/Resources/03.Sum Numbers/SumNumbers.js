function calc() {
    let resultElement = document.getElementById('sum');
    let numOneElement = document.querySelector('#num1').value;
    let numTwoElement = document.getElementById('num2').value;

    resultElement.value = Number(numOneElement) + Number(numTwoElement);
}
