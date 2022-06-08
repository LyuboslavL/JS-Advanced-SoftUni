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
