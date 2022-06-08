function addItem() {
    let inputElement = document.getElementById('newItemText');
    let listElement = document.getElementById('items');
    
    /* Creating a new li element */
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;

    // Adding a Delete button
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    // Adding the Delete button to the Li item
    newLiElement.appendChild(deleteButton);
    listElement.appendChild(newLiElement);

    inputElement.value = '';
    deleteButton.addEventListener('click', function(e) {
        e.currentTarget.parentNode.remove();
    })
}