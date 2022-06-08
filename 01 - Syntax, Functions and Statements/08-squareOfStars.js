function squareOfStars(input) {
    if (typeof(input) === 'number') {
        let rows = 0;
        while (rows < input) {
            console.log('* '.repeat(input));
            rows++;
        }
    } else {
        input = 5;
        let rows = 0;
        while (rows < input) {
            console.log('* '.repeat(input));
            rows++;
        }
    }
}

// squareOfStars(1);
// squareOfStars(2);
// squareOfStars(5);
// squareOfStars();