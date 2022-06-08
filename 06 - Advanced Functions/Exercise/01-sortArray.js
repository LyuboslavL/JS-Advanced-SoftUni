function solve(arr, type) {
    function asc(arr) {
        return arr.sort((a, b) => a - b);
    };

    function desc(arr) {
        return arr.sort((a, b) => b - a);
    };

    if (type === 'asc') {
        return asc(arr);
    } else {
        return desc(arr);
    }
}

// console.log(solve([14, 7, 17, 6, 8], 'asc'));
// console.log(solve([14, 7, 17, 6, 8], 'desc'));

function solve2(arr, type) {
    let map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };

    return arr.sort(map[type]);
}

console.log(solve2([14, 7, 17, 6, 8], 'asc'));
console.log(solve2([14, 7, 17, 6, 8], 'desc'));