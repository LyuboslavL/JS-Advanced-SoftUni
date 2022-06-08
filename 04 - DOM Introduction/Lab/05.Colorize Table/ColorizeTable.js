function colorize() {
    // let rowsToColorize = Array.from(document.querySelectorAll('table tr'));
    // rowsToColorize.shift();

    // for (let i = 0; i < rowsToColorize.length; i += 2) {
    //     rowsToColorize[i].style.backgroundColor = 'teal';
    // };
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(x => x.style.backgroundColor = 'teal');
}