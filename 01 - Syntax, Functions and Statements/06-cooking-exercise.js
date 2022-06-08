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
