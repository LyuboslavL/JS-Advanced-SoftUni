function deleteByEmail() {
    let searchedEmailElement = document.querySelector('label input');
    let resultElement = document.querySelector('#result');
    let allEmailsElements = document.querySelectorAll('#customers tbody tr td:nth-child(even)');

    let isFound = false;
    
    for (let email of allEmailsElements) {
        if (searchedEmailElement.value === email.textContent) {
            email.parentNode.remove();
            isFound = true;
            break;
        } else {
            isFound = false;
        }
    }

    if (isFound) {
        resultElement.textContent = 'Deleted';
    } else {
        resultElement.textContent = 'Not found.'   
    }
}