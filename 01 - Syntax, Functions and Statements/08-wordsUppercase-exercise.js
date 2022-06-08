function wordsUppercase(str) {
    let result = str.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(', ');

    return result;
}

// console.log(wordsUppercase('Hi, how are you?'));
// console.log(wordsUppercase('hello'));