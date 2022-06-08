// function extractText() {
//     let textElements = document.querySelectorAll('#items li');
//     // let textElements = document.getElementById('items');

//     let result = '';
//     for (let listItem of textElements) {
//         result += listItem.textContent.trim() + '\n';
//     };

//     let resultElement = document.getElementById('result');
//     resultElement.textContent = result;
// }

function extractText() {
    let resultArea = document.getElementById('result');
    let liItems = document.querySelectorAll('li');
    let liTexts = [...liItems].map(e => e.textContent);
    resultArea.value = liTexts.join('\n');
}
