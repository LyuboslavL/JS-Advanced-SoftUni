function sumNtoM(n, m) {
    n = Number(n);
    m = Number(m);
    let result = 0;
    for (let i = n; i <= m; i++) {
        result += i;
    }
    return result;
}

// console.log(sumNtoM('1', '5'));
// console.log(sumNtoM('-8', '20'));