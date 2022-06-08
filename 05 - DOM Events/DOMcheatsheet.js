// Selecting DOM elements
let elem1 = document.getElementById('test');
document.querySelector('#test');
document.querySelectorAll('#test li');

// Get/Set content
elem1.value;
elem1.textContent;

// Traversing DOM
elem1.parentElement;
elem1.children;

// Creating an element
let createdElement = document.createElement('p');

// Adding to DOM
elem1.appendChild(createdElement);

// Deleting from DOM
createdElement.remove();

// Events
elem1.addEventListener('click', function(e) {
    e.target;
}); 
elem1.removeEventListener('click', function(e) {
    e.target;
});