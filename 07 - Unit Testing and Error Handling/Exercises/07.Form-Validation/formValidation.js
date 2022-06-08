function validate() {
    let submitBtnElement = document.getElementById('submit');
    let isCompanyElement = document.getElementById('company');

    submitBtnElement.addEventListener('click', function (e) {
        e.preventDefault();

        let usernameElement = document.querySelector('#username');
        let emailElement = document.querySelector('#email');
        let passwordElement = document.getElementById('password');
        let confirmPasswordElement = document.getElementById('confirm-password');

        function usernameCheck() {
            let username = usernameElement.value;
            let correctUsername = true;

            if (username.length < 3 || username.length > 20 && !username.match(/^[a-zA-Z0-9]{3,20}$/)) {
                correctUsername = false;
                // usernameElement.style.borderColor = 'red';
            } else {
                correctUsername = true;
                // usernameElement.style.borderColor = 'none';
            }

            return correctUsername;
        }

        function emailCheck() {
            let email = emailElement.value;
            let correctEmail = true;

            if (!email.match(/^[a-zA-Z0-9\W]*@.+.$/)) {
                correctEmail = false;
                // emailElement.style.borderColor = 'red';
            } else {
                correctEmail = true;
                // emailElement.style.borderColor = 'none';
            }

            return correctEmail;
        }
               
        function passwordCheck() {
            let password = passwordElement.value;
            let repeatPassword = confirmPasswordElement.value;
            let correctPassword = true;

            if (!password.match(/\w{5,15}/) || password !== repeatPassword) {
                correctPassword = false;
                // passwordElement.style.borderColor = 'red';
                // confirmPasswordElement.style.borderColor = 'red';
            } else {
                correctPassword = true;
                // passwordElement.style.borderColor = 'none';
                // confirmPasswordElement.style.borderColor = 'none';
            }

            return correctPassword;
        }

        function setBorder(element, boolean) {
            if (boolean === false) {
                element.style.setProperty('border', '2px solid red');
            } else {
                element.style.setProperty('border', 'none');
            }
        }

        setBorder(usernameElement, usernameCheck());
        setBorder(emailElement, emailCheck());
        setBorder(passwordElement, passwordCheck());
        setBorder(confirmPasswordElement, passwordCheck());

        let isCompanyCheckbox = document.getElementById('company');
        let companyNumberIsValid = false;
        if (isCompanyCheckbox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');
            if (companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }

            setBorder(companyNumberInput, companyNumberIsValid);
        }

        let hiddenValidElement = document.getElementById('valid');
        let mainInputsAreValid = usernameCheck() && emailCheck() && passwordCheck();
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = mainInputsAreValid && companyInfoIsValid;
        hiddenValidElement.style.display = shouldShowValidDiv ? 'block' : 'none';
    })

    isCompanyElement.addEventListener('change', function (e) {
        let companyInfoField = document.getElementById('companyInfo');
        companyInfoField.style.display = e.target.checked ? 'block' : 'none';
    });
}
