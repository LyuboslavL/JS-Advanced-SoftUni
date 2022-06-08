window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.getElementById('submitBTN');
  
  submitBtn.addEventListener('click', function(e) {
    let fullNameField = document.getElementById('fname')
    let emailField = document.getElementById('email');
    let phoneNumberField = document.getElementById('phone');
    let addressField = document.getElementById('address');
    let postalCodeField = document.getElementById('code');

    // Check if fullName and email are not empty
    if (fullNameField.value === '' || fullNameField.value === undefined && emailField.value === '' || emailField.value === undefined) {
      return;
    } 

    // Get the preview section
    let previewFieldUl = document.getElementById('infoPreview');

    // Create the Li elements
    let fullNameLi = createListItem('Full Name', fullNameField.value);
    let emailLi = createListItem('Email', emailField.value);
    let phoneNumberLi = createListItem('Phone Number', phoneNumberField.value);
    let addressLi = createListItem('Address', addressField.value);
    let postalCodeLi = createListItem('Postal Code', postalCodeField.value);

    // Creating an array with all the values;
    let valuesArr = [fullNameField.value, emailField.value, phoneNumberField.value, addressField.value, postalCodeField.value];

    // Append the li elements to the ul in the preview section
    previewFieldUl.appendChild(fullNameLi);
    previewFieldUl.appendChild(emailLi);
    previewFieldUl.appendChild(phoneNumberLi);
    previewFieldUl.appendChild(addressLi);
    previewFieldUl.appendChild(postalCodeLi);

    fullNameField.value = '';
    emailField.value = '';
    phoneNumberField.value = '';
    addressField.value = '';
    postalCodeField.value = '';

    submitBtn.disabled = true;
    // Enable the disabled buttons
    let editBtn = document.getElementById('editBTN');
    editBtn.disabled = false;
    let continueBtn = document.getElementById('continueBTN');
    continueBtn.disabled = false;

    // Edit button functionality
    editBtn.addEventListener('click', function(e) {
      fullNameField.value = valuesArr[0];
      emailField.value = valuesArr[1];
      phoneNumberField.value = valuesArr[2];
      addressField.value = valuesArr[3];
      postalCodeField.value = valuesArr[4];

      continueBtn.disabled = true;
      editBtn.disabled = true;

      let child = previewFieldUl.lastElementChild;
      while (child) {
        previewFieldUl.removeChild(child);
        child = previewFieldUl.lastElementChild;
      }

      submitBtn.disabled = false;
    });

    continueBtn.addEventListener('click', function(e) {
      let blockDivElement = document.getElementById('block');
      let h3Element = document.createElement('h3');
      h3Element.textContent = 'Thank you for your reservation!';

      let child = blockDivElement.lastElementChild;
      while (child) {
        blockDivElement.removeChild(child);
        child = blockDivElement.lastElementChild;
      }

      blockDivElement.appendChild(h3Element);
    })
  });
  
  function createListItem(field, data) {
    let li = document.createElement('li');
    li.textContent = `${field}: ${data}`;
    return li;
  }
}
