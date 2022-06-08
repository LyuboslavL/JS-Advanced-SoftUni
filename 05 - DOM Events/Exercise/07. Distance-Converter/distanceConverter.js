function attachEventsListeners() {
    let button = document.querySelector('#convert');
    let inputUnits = document.querySelector('#inputUnits');
    let outputUnits = document.querySelector('#outputUnits');

    button.addEventListener('click', function (e) {
        let userInputedDigit = Number(document.querySelector('#inputDistance').value);
        let resultField = document.querySelector('#outputDistance');

        function convertToMetres(digit, unit) {
            if (unit === 'm') {
                return digit;
            } else if (unit === 'km') {
                return digit * 1000;
            } else if (unit === 'cm') {
                return digit * 0.01;
            } else if (unit === 'mm') {
                return digit * 0.001;
            } else if (unit === 'mi') {
                return digit * 1609.34; 
            } else if (unit === 'yrd') {
                return digit * 0.9144;
            } else if (unit === 'ft') {
                return digit * 0.3048;
            } else if (unit === 'in') {
                return digit * 0.0254;
            }
        }

        function convertToResult(metres, unit) {
            if (unit === 'm') {
                return metres;
            } else if (unit === 'km') {
                return metres / 1000;
            } else if (unit === 'cm') {
                return metres * 100;
            } else if (unit === 'mm') {
                return metres * 1000;
            } else if (unit === 'mi') {
                return metres / 1609.34;
            } else if (unit === 'yrd') {
                return metres / 0.9144;
            } else if (unit === 'ft') {
                return metres / 0.3048;
            } else {
                return metres / 0.0254;
            }
        }

        let initialValue = convertToMetres(userInputedDigit, inputUnits.value);
        let result = convertToResult(initialValue, outputUnits.value);

        resultField.value = result;
    });

}