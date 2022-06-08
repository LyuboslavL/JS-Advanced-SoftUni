function validate() {
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', function(e) {
        let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!emailInput.value.match(emailRegex)) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    })
}