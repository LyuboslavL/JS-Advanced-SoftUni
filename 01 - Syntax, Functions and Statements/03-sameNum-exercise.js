function sameNum(num) {
    let numStr = num.toString();
    let result = 0;
    let isSame = true;

    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] != numStr[i + 1] && i + 1 < numStr.length) {
            isSame = false;
        }
        let numb = Number(numStr[i]);
        result += numb;
    }

    if (isSame) {
        console.log('true');
    } else {
        console.log('false');
    }

    console.log(result);
}

// sameNum(2222222);
// sameNum(1234);