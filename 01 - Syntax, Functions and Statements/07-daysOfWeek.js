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