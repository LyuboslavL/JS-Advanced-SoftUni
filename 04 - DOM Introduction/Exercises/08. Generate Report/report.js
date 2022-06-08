function generateReport() {
    let outputElement = document.getElementById('output');
    let checkboxesElement = document.querySelectorAll('table thead tr th input');
    let rowsElement = document.querySelectorAll('tbody tr');

    let output = [];
    for (let i = 0; i < rowsElement.length; i++) {
        let obj = {};
        let values = Array.from(rowsElement[i].getElementsByTagName('td')).map(el => el.textContent);
        for (let j = 0; j < checkboxesElement.length; j++) {
            if (checkboxesElement[j].checked) {
                obj[checkboxesElement[j].name] = values[j];
            }
        }
        output.push(obj);
    }

    outputElement.value = JSON.stringify(output);
}