function toggle() {
    let hiddenDiv = document.querySelector('#extra');
    // console.log(hiddenDiv.textContent);
    let buttonEl = document.querySelector('.button');
    // console.log(buttonEl);
    
    buttonEl.textContent = buttonEl.textContent === 'More' ? 'Less' : 'More';
    hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block';
}