// CTRL + SHIFT + ALT - пише на няколко реда!

function evenPosition(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result.join(' ');
}

// console.log(evenPosition(['20', '30', '40', '50', '60']));
// console.log(evenPosition(['5', '10']));

function evenAgain(arr) {
    arr = arr.filter((x, i) => i % 2 === 0);
    return arr.join(' ');
}

// console.log(evenAgain(['20', '30', '40', '50', '60']));
// console.log(evenAgain(['5', '10']));



function lastKNums(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        if (result.length >= k) {
            let newSeq = [];
            let resultInside = 0;
            for (let j = i - k; newSeq.length < k; j++) {
                resultInside += result[j];
                newSeq.push(j);
            }
            result.push(resultInside);
        } else {
            let resultInside = 0;
            for (let j = 0; j < result.length; j++) {
                resultInside += result[j];
            }
            result.push(resultInside);
        }
    }

    return result;
}

// console.log(lastKNums(6, 3));
// console.log(lastKNums(8, 2));

function firstLast(arr) {
    arr = arr.map(Number);
    // let result = arr[0] + arr[arr.length - 1];
    let result = arr.shift() + arr.pop();
    return result;
}

// console.log(firstLast(['20', '30', '40']));
// console.log(firstLast(['5', '10']));

function negativePositive(arr) {
    let newArr = [];
    for (let num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    return newArr.join('\n');
}

// console.log(negativePositive([7, -2, 8, 9]));
// console.log(negativePositive([3, -2, 0, -1]));

function twoSmallest(arr) {
    let result = [];
    arr = arr.sort((a, b) => a - b);
    result.push(arr[0], arr[1]);
    return result.join(' ');
}

// console.log(twoSmallest([30, 15, 50, 5]));
// console.log(twoSmallest([3, 0, 10, 4, 7, 3]));

function biggerHalf(arr) {
    arr = arr.sort((a, b) => a - b);

    let half = Math.floor(arr.length / 2);
    let result = [];
    for (let i = half; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

function pieceOfPie(arr, flavour1, flavour2) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === flavour1) {
    //         let indexOfFlavour = arr.indexOf(flavour2);
    //         arr = arr.slice(i, indexOfFlavour + 1);
    //         break;
    //     }
    // }

    let firstIndex = arr.indexOf(flavour1);
    let lastIndex = arr.indexOf(flavour2);
    return arr.slice(firstIndex, lastIndex + 1);
}

// console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));
// console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));

function oddPositions(arr) {
    arr = arr.filter((x, i) => i % 2 !== 0)
            .map(x => x *= 2)
            .reverse();
    return arr.join(' ');
}

// console.log(oddPositions([10, 15, 20, 25]));
// console.log(oddPositions([3, 0, 10, 4, 7, 3]));

function biggestElement(matrix) {
    let biggest = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (biggest <= matrix[row][col]) {
                biggest = matrix[row][col];
            }
        }
    }
    return biggest;
}

// console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
// console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));

function equalNeighbors(matrix) {
    let pairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let inner = 0; inner < matrix.length; inner++) {
            let curr = matrix[row][inner];
            let next = matrix[row][inner + 1];
            if (curr === next) {
                pairs++;
            }
        }

        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 >= matrix.length) {
                break;
            } else if (matrix[row][col] === matrix[row + 1][col]) {
                pairs++;
                continue;
            } 
        }

    }

    return pairs;
}

// console.log(equalNeighbors([['2', '3', '4', '7', '0'], 
//                             ['4', '0', '5', '3', '4'], 
//                             ['2', '3', '5', '4', '2'], 
//                             ['9', '8', '7', '5', '4']]));
// console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
//                             ['well', 'done', 'yo', '6'],
//                             ['not', 'done', 'yet', '5']]));
// console.log(equalNeighbors([['2', '2', '5', '7', '4'],
                            // ['4', '0', '5', '3', '4'],
                            // ['2', '5', '5', '4', '2']]));

function diagonalSums(matrix) {
    let firstSum = 0;
    let col = 0;
    for (let row = 0; row < matrix.length; row++) {

        while (col < matrix[row].length) {
            let curr = Number(matrix[row][col]);
            let next = Number(matrix[row + 1][col + 1]);
            firstSum += curr + next;
            row++;
            col++;
        }
    }
}

// diagonalSums([['20', '40'], ['10', '60']]);
// diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);



function demo(matrix) {
    let matches = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let row = 0; row < matrix[i].length; row++) {
            if (matrix[i][row] === matrix[i][row+1]) {
                matches++;
            }
            
            if (i+1 < matrix.length) {
                if (matrix[i][row] === matrix[i+1][row]) {
                    matches++;
                }
            }
        }
    }

    return matches;
}

console.log(demo([  [2, 2, 5, 7, 4],
                    [4, 0, 5, 3, 4],
                    [2, 5, 5, 4, 2]]
));


