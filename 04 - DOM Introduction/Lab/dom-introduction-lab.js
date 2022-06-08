function edit(ref, match, replacer) {
    let content = ref.textContent;
    let matcher = new RegExp (match, 'g');
    let edited = content.replace(matcher, replacer);
    ref.textContent = edited;
}

function collectListItems() {
    let textElements = document.querySelectorAll('#items li');
    // let textElements = document.getElementById('items');

    let result = '';
    for (let listItem of textElements) {
        result += listItem.textContent.trim() + '\n';
    };

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}