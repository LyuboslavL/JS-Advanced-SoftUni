function functionalSum(num) {
    sum = 0;
    sum += num;
    
    function adding(y) {
        sum += y;
        return adding;
    }
    adding.toString = () => sum;
    return adding;
}

console.log(functionalSum(1).toString());
console.log(functionalSum(1)(6)(-3).toString());
