function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateFormHandler);
    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', onIsCompanyHandler);

    function validateFormHandler(e) {
        e.preventDefault();
        let usernameInput = document.getElementById('username');
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid);

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);

        let passwordRegex = /^\w{5,15}$/;
        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let passwordsAreOkay = passwordIsValid && passwordInput.value === confirmPasswordInput.value;
        setBorder(passwordInput, passwordsAreOkay);
        setBorder(confirmPasswordInput, passwordsAreOkay);

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
        let mainInputsAreValid = usernameIsValid && emailIsValid && passwordsAreOkay;
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = mainInputsAreValid && companyInfoIsValid;
        hiddenValidElement.style.display = shouldShowValidDiv ? 'block' : 'none';
    }

    function onIsCompanyHandler(e) {
        let companyInfoField = document.getElementById('companyInfo');
        companyInfoField.style.display = e.target.checked ? 'block' : 'none';
    }
   
    function setBorder(element, isValid) {
        if (!isValid) {
            element.style.setProperty('border', '2px solid red');
        } else {
            element.style.setProperty('border', 'none');
        }
    }
}