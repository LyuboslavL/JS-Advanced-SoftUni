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