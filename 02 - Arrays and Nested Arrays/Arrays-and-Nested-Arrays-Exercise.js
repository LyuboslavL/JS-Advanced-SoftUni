function delimeter(arr, del) {
    return arr.join(del);
}

// console.log(delimeter(['One', 'Two', 'Three', 'Four', 'Five'], '-'));
// console.log(delimeter(['How about no?', 'I','will', 'not', 'do', 'it!'], '_'));;

function nthElement(arr, n) {
    let resultArr = arr.filter((x, i) => i % n === 0);
    return resultArr;
}

// console.log(nthElement(['5', '20', '31', '4', '20'], 2));
// console.log(nthElement(['dsa', 'asd', 'test', 'tset'], 2));
// console.log(nthElement(['1', '2','3', '4', '5'], 6));

function addRemove(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    if (result.length < 1) {
        return `Empty`; 
    } else {
        return result.join('\n');
    }
}

// console.log(addRemove(['add', 'add', 'add', 'add']));
// console.log(addRemove(['add', 'add', 'remove', 'add', 'add'])); 
// console.log(addRemove(['remove', 'remove', 'remove'])); 

function rotation(arr, n) {
    for (let i = 0; i < n; i++) {
        // let curr = arr.shift();
        let last = arr.pop();
        arr.unshift(last);
        // arr.pop(curr);
    }

    return arr.join(' ');
}

// console.log(rotation(['1', '2', '3', '4'], 2));
// console.log(rotation(['Banana', 'Orange', 'Coconut', 'Apple'], 15));

function sequence(arr) {
    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result[result.length - 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(sequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(sequence([1, 2, 3, 4]));
// console.log(sequence([20, 3, 2, 15, 6, 1]));

function sequenceAgain(arr) {
    let result = [arr[0]];
    
    // arr = arr.filter((x, i) => {
    //     if (x > result[result.length - 1]) {
    //         result.push(x);
    //     }
    // });

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        if (curr >= result[result.length - 1]) {
            result.push(curr);
        }
    }

    return result;
}

// console.log(sequenceAgain([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(sequenceAgain([1, 2, 3, 4]));
// console.log(sequenceAgain([20, 3, 2, 15, 6, 1]));

function sequenceReduce(arr) {
    // let result = [arr[0]];
    let resultArr = aggregate(arr, reducer, []);
       
    function reducer(acc, el) {
        if (acc.length === 0 || acc[acc.length - 1] <= el) {
            acc.push(el);
        }
        return acc;
    }

    function aggregate(arr, reducerFunc, initialValue) {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i];
            initialValue = reducerFunc(initialValue, curr);
        }
        return initialValue;
    }

    return resultArr;
}

// console.log(sequenceReduce([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(sequenceReduce([1, 2, 3, 4]));
// console.log(sequenceReduce([20, 3, 2, 15, 6, 1]));

function sequenceReduceAgain(arr) {
    let resultArr = arr.reduce((acc, el) => {
        if (acc.length === 0 || el >= acc[acc.length - 1]) {
            acc.push(el);
        }
        return acc;
    }, []);
    return resultArr;
}

// console.log(sequenceReduceAgain([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(sequenceReduceAgain([1, 2, 3, 4]));
// console.log(sequenceReduceAgain([20, 3, 2, 15, 6, 1]));

function namesList(arr) {
    let i = 0;
    let result = [];
    arr = arr.sort((a, b) => a.localeCompare(b))
            .forEach(x => {
                i++;
                result.push(`${i}.${x}`);
            });
    return result.join('\n');
}

// console.log(namesList(['John', 'Bob', 'Christina', 'Ema']));

function sortingNums(arr) {
    let array = arr.sort((a, b) => a - b);
    let result = [];

    while (array.length !== 0) {
        result.push(array[0]);
        array.shift();
        result.push(array[array.length - 1]);
        array.pop();
    }

    return result;
}

// console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function sortingNumsReduce(arr) {
    let array = arr.sort((a, b) => a - b);
    let end = array.length - 1;
    let result = [];
    result = array.reduce((acc, el) => {
        if (acc.length === array.length) {
            acc.push(el);
            if (acc.length !== array.length) {
                acc.push(array[end--]);
            }
        }
        return acc;
    }, []);

    return result;
}

// console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function sortByTwoCriteria(arr) {
    function sorting(x, y) {
        if (x.length === y.length) {
            return x.localeCompare(y);
        } else {
            return x.length - y.length;
        }
    };

    arr = arr.sort(sorting);
    return arr.join('\n');

}

// console.log(sortByTwoCriteria(['alpha', 'beta', 'gamma']));
// console.log(sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
// console.log(sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']));

function magicMatrices(arr) {
    let magicSum = 0;
    let isMagic = true;

    for (let row = 0; row < arr.length; row++) {
        let sum = 0; 
        for (let col = 0; col < arr[row].length; col++) {
            let el = arr[row][col];
            sum += el;
        }

        if (magicSum === 0) {
            magicSum = sum;
        }

        if (sum !== magicSum) {
            isMagic = false; 
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < arr.length; row++) {
            let el = arr[row][col];
            sum += el;
        }

        if (sum !== magicSum) {
            isMagic = false; 
        }
    }

    return isMagic;
}

// console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
// console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
// console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));

function magicMatricesReduce(arr) {
    let magicSum = 0;
    let isMagic = true;

    for (let row = 0; row < arr.length; row++) {
        let sum = arr[row].reduce((acc, el) => acc + el);
        if (magicSum === 0) {
            magicSum = sum;
        }

        if (sum !== magicSum) {
            isMagic = false; 
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < arr.length; row++) {
            let el = arr[row][col];
            sum += el;
        }

        if (sum !== magicSum) {
            isMagic = false; 
        }
    }

    return isMagic;
}

// console.log(magicMatricesReduce([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
// console.log(magicMatricesReduce([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
// console.log(magicMatricesReduce([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));

function ticTacToe(movesArr) {
    let dashboard = [[false, false, false],
                    [false, false, false],
                    [false, false, false]];

    let isPlayerX = true;
    for (let i = 0; i < movesArr.length; i++) {
        let [row, col] = movesArr[i].split(' ');
        row = Number(row);
        col = Number(col);

        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        dashboard[row][col] = isPlayerX ? 'X' : 'O';
        isPlayerX = !isPlayerX;
        let gameEnded = hasGameEnded(dashboard);

        if (gameEnded) {
            break;
        }
    }

    for (let row = 0; row < dashboard.length; row++) {
        console.log(dashboard[row].join('\t'));
    }

    function hasGameEnded(board) {
        for (let row = 0; row < board.length; row++) {
            let isSameX = board[row].every(x => x === 'X');
            let isSameO = board[row].every(x => x === 'O');
            if (isSameX || isSameO) {
                console.log(`Player ${isSameX ? 'X' : 'O'} wins!`);
                return true;
            }
        }

        for (let col = 0; col < board.length; col++) {
            if (board[0][col] === board[1][col] &&
                board[1][col] === board[2][col] &&
                board[0][col] !== false) {
                    console.log(`Player ${board[col][0]} wins!`);
                    return true;
            }
        }

        if (board[0][0] === board[1][1] &&
            board[1][1] === board[2][2] &&
            board[0][0] !== false) {
            console.log(`Player ${board[0][0]} wins!`);
            return true;
        }

        if (board[2][0] === board[1][1] &&
            board[1][1] === board[0][2] &&
            board[2][0] !== false) {
            console.log(`Player ${board[2][0]} wins!`);
            return true;
        }
        
        if (board[0].every(x => x !== false) &&
            board[1].every(x => x !== false) &&
            board[2].every(x => x !== false)) {
            console.log('The game ended! Nobody wins :(');
            return true;
        }

        return false;
    }
}


// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);


function demo(arr) {
    let result = arr[0].reduce((curr, next) => curr + next);
    let isMagical = false;

    for (let row = 0; row < arr.length; row++) {
        let sum = arr[row].reduce((curr, next) => curr + next);
        let colSum = 0;
        
        for (let col = 0; col < arr.length; col++) {
            colSum += arr[col][row];
        }        

        if (colSum == sum) {
            if (sum !== result) {
                isMagical = false;
                break;
            } else {
                isMagical = true;
            }    
        } else {
            isMagical = false;
            break;
        }   
    }

    return isMagical;

}

console.log(demo([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   ));

    

