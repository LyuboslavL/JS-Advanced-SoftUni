function add(x) {
    let sum = 0;
    sum += x;
    // this === global context

    function calc(y) {
        sum += y;
        // this === global context
        return calc;
    }

    calc.toString = () => sum; // every function is an Object and therefore it has a .toString() method. We convert it to another function and the point of the new .toString function is to return the sum!
    return calc;
}

console.log(add(1).toString()); // 1
console.log(add(1)(6)(-3).toString()); // 4

// for the closure to work, we should call the same function. Otherwise it will rewrite the closure and it will start all over again and sum will always start from 0. 

let calc = add(1);
console.log(calc(2)(3).toString()); // 6
console.log(calc(3).toString()); // 12

let newCalc = add(1);
console.log(newCalc.toString()); // 1


