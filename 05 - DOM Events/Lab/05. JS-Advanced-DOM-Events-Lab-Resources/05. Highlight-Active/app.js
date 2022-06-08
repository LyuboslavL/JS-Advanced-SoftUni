function focused() {
    let focusedElements = Array.from(document.querySelectorAll('div input'));
    
    focusedElements.forEach((element) => {
        element.addEventListener('focus', focus);
    })

    focusedElements.forEach((element) => {
        element.addEventListener('blur', blur);
    })

    function focus(e) {
        let parent = e.target.parentNode;
        parent.setAttribute('class', 'focused');
    }

    function blur(e) {
        let parent = e.target.parentNode;
        parent.classList.remove('focused');
    }
}