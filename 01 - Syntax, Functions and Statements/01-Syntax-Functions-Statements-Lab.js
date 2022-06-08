function echo(string) {
    console.log(string.length);
    console.log(string);
}

// echo('Hello, JavaScript!');
// echo('strings are easy');

function strLength(str1, str2, str3) {
    let result = str1.length + str2.length + str3.length;
    console.log(result);
    console.log(Math.floor(result / 3));
}

// strLength('chocolate', 'ice cream', 'cake');
// strLength('pasta', '5', '22.3');

function largestNum(num1, num2, num3) {
    let largest = 0;

    if (num1 > num2 && num1 > num3) {
        largest = num1;
    } else if (num2 > num1 && num2 > num3) {
        largest = num2;
    } else {
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`);
}

// largestNum(5, -3, 16);
// largestNum(-3, -5, -22.5);

function circleArea(input) {
    let type = typeof(input);
    if (type === "number") {
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

// circleArea(5);
// circleArea('name');

function mathOperations(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            break;
    }

    console.log(result);
}

// mathOperations(5, 6, '+');
// mathOperations(3, 5.5, '*');

function sumNtoM(n, m) {
    n = Number(n);
    m = Number(m);
    let result = 0;
    for (let i = n; i <= m; i++) {
        result += i;
    }
    return result;
}

// console.log(sumNtoM('1', '5'));
// console.log(sumNtoM('-8', '20'));

function dayOfWeek(str) {
    let result;
    if (str === 'Monday') {
        result = 1;
    } else if (str === 'Tuesday') {
        result = 2;
    } else if (str === 'Wednesday') {
        result = 3;
    } else if (str === 'Thursday') {
        result = 4;
    } else if (str === 'Friday') {
        result = 5;
    } else if (str === 'Saturday') {
        result = 6;
    } else if (str === 'Sunday') {
        result = 7;
    } else {
        result = `error`;
    }

    return result;
}

// console.log(dayOfWeek('Monday'));
// console.log(dayOfWeek('Friday'));
// console.log(dayOfWeek('OtherDay'));

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

function aggregateElements(arr) {
    function sumAll(array) {
        let result = 0;
        for (let el of array) {
            result += el;
        }
        return result;
    }
    function sumInverse(array) {
        let result = 0;
        for (let el of array) {
            el = 1 / el;
            result += el;
        }
        return result;
    }
    function concat(array) {
        let arrAsStr = array.map(x => x.toString());
        return arrAsStr.join('');
    }

    let summed = sumAll(arr);
    let inversed = sumInverse(arr);
    let concatenated = concat(arr);
    
    console.log(summed);
    console.log(inversed);
    console.log(concatenated);
}

// aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);