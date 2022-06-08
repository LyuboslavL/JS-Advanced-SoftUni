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