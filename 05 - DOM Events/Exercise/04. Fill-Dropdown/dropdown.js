function addItem() {
    let newItemText = document.getElementById('newItemText');
    // console.log(newItemText);
    let newItemValue = document.getElementById('newItemValue');
    // console.log(newItemValue);
    let selectItem = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    selectItem.appendChild(optionElement);
    newItemText.value = '';
    newItemValue.value = '';
}