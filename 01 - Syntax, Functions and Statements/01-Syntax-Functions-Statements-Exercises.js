function fruit(type, weight, price) {
    let kgWeight = weight / 1000;
    let money = kgWeight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${type}`);
}

// fruit('orange', 2500, 1.80);
// fruit('apple', 1563, 2.35);

function gcd(num1, num2) {
    let result = 0;
    for (let i = 0; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = i;
        }
    }
    return result;
}

// console.log(gcd(15, 5));
// console.log(gcd(2154, 458));

function sameNum(num) {
    let numStr = num.toString();
    let result = 0;
    let isSame = true;

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] != numStr[i + 1] && i + 1 < numStr.length) {
            isSame = false;
        }
        let numb = Number(numStr[i]);
        result += numb;
    }

    if (isSame) {
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(result);
}

// sameNum(2222222);
// sameNum(1234);

function timeToWalk(steps, stepLength, speedKmH) {
    const distance = steps * stepLength;
    const speed = speedKmH * 1000 / 3600;

    let restsNeeded = Math.floor(distance / 500);
    let restInSec = restsNeeded * 60;

    const time = distance / speed + restInSec;
    let hours = Math.trunc(time / 3600);
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = Math.trunc(time / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let seconds = Math.ceil(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
}

// console.log(timeToWalk(4000, 0.60, 5));
// console.log(timeToWalk(2564, 0.70, 5.5));

function radar(speed, area) {
    let limit = 0;
    if (area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else if (area === 'residential') {
        limit = 20;
    }

    let difference = speed - limit;
    let status = '';

    if (difference <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    } else if (difference <= 20) {
        status = 'speeding'
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
    } else if (difference <= 40) {
        status = 'excessive speeding';
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
    } else {
        status = 'reckless driving';
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;

    }
}

// console.log(radar(40, 'city'));
// console.log(radar(21, 'residential'));
// console.log(radar(120, 'interstate'));
// console.log(radar(200, 'motorway'));

function cooking(num, oper, oper2, oper3, oper4, oper5) {
    num = Number(num);
    let operation = [oper, oper2, oper3, oper4, oper5];
    let result = [];

    for (let i = 0; i < operation.length; i++) {
        if (operation[i] === 'chop') {
            num /= 2;
        } else if (operation[i] === 'dice') {
            num = Math.sqrt(num);
        } else if (operation[i] === 'spice') {
            num += 1;
        } else if (operation[i] === 'bake') {
            num *= 3;
        } else {
            num -= num * 0.2;
        }
        result.push(num);
    }

    return result.join('\n');
}

// console.log(cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
// console.log(cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));

function validityChecker(x1, y1, x2, y2) {
    function getResult(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        return (distance === Math.round(distance)) ? 'valid' : 'invalid';
        // return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1} to {0, 0} is ${getResult(x1, y1, 0, 0)}\n{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`;
}

// console.log(validityChecker(3, 0, 0, 4));
// console.log(validityChecker(2, 1, 1, 1));

function wordsUppercase(str) {
    let result = str.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(', ');

    return result;
}

// console.log(wordsUppercase('Hi, how are you?'));
// console.log(wordsUppercase('hello'));

function testing() {
    function running() {
        return 'Running';
    }

    function fast(run, type) {
        console.log(run() + ' ' + type);
    }

    fast(running, 'slow');
}

// testing();