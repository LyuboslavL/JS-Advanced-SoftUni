// Change heading
let headingElement = document.getElementById("superhero-list-heading");
headingElement.textContent += ' from DCU and MCU';

// Show inner HTML or text only
let superheroSectionElement = document.getElementById("superhero-section");
console.log(superheroSectionElement.innerHTML);
console.log(superheroSectionElement.textContent);

// Change background
let siteWrapper = document.getElementById('wrapper');
siteWrapper.style.backgroundColor = 'pink';

// Get value from input
function addSuperhero() {
    let superheroNameInputElement = document.getElementById('superhero-name');
    console.log(superheroNameInputElement.value);
    
    superheroNameInputElement.value = '';
}

// Targeting elements
let goodSuperheroeLiElements = document.getElementsByClassName('good');
console.log(goodSuperheroeLiElements);
goodSuperheroeLiElements[1].textContent += ' - Robin\'s lover';

let allSuperheroesLiElements = document.querySelectorAll('#superhero-list li');
for (let el of allSuperheroesLiElements) {
    console.log(`cool superheroes: ${el.textContent}`);
}

// Convert HTMLCollection and NodeList to JS Array
let goodSuperheroesArr = Array.from(allSuperheroesLiElements);
// another method
let goodSuperheroesArr2 = [...allSuperheroesLiElements];
console.log(goodSuperheroesArr);
console.log(goodSuperheroesArr2);

// Get parent element
siteWrapper = document.getElementById('wrapper');
siteWrapper.style.backgroundColor = 'pink';
let bodyElement = siteWrapper.parentElement;
bodyElement.style.backgroundColor = 'lightblue';

// Get child element
let superheroListElement = document.getElementById('superhero-list');
let childrenElement = superheroListElement.children;
console.log(`Children elements: ${childrenElement}`);

// Hiding an element
let hidingEvilElement = document.querySelector('#superhero-list .evil');
hidingEvilElement.style.display = 'none';

// Returning an invisible element
hidingEvilElement.style.display = '';

// Show/Hide object
function toggleSuperheroes() {
    let toggleHeroesButtonElement = document.getElementById('toggle-heroes-button');

    if (superheroListElement.style.display == 'none') {
        superheroListElement.style.display = 'block';
        toggleHeroesButtonElement.textContent = 'Hide Heroes';

    } else {
        superheroListElement.style.display = 'none'
        toggleHeroesButtonElement.textContent = 'Show Heroes';
    }
}

// Add striped style
let evenHeroes = document.querySelectorAll('#superhero-section li:nth-of-type(2n)');
for (let hero of evenHeroes) {
    hero.style.backgroundColor = 'orangered';
}