function validate() {
    let emailInputElement = document.querySelector('#email');
    let emailRegEx = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/; 
    let value = emailInputElement.value;

    emailInputElement.addEventListener('change', checkMail);

    function checkMail(e) {
        if (emailRegEx.test(e.target.value)) {
            e.target.removeAttribute('class');
            return;
        }

        e.target.className= 'error';
    }
}