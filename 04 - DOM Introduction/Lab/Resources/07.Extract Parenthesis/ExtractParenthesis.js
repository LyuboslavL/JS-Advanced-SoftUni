function extract(id) {
    let paragraph = document.getElementById(id).textContent;
    let regex = /\((.+?)\)/gm;
    let match = regex.exec(paragraph);
    let result = [];


    while (match) {
        result.push(match[1]);
        match = regex.exec(paragraph);
    }

    result.join('; ');
}