// function addItem() {
//     let inputElement = document.querySelector('#newItemText');
//     let itemsElement = document.getElementById('items')
//     let newElement = document.createElement('li');
//     newElement.textContent = inputElement.value;
//     itemsElement.appendChild(newElement);
//     inputElement.value = '';
// }

function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');
    
    /* Creating a new li element */
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    listElement.appendChild(newLiElement);

    // Cloning an existing li element
    // let existingLiElement = listElement.children[0];
    // let clonedLiElement = existingLiElement.cloneNode();
    // clonedLiElement.textContent = inputElement.value;
    // listElement.appendChild(clonedLiElement);

    // Deleting last li element
    // let secondLiElement = listElement.children[1];
    // listElement.removeChild(secondLiElement);
    inputElement.value = '';
}