function gcd(num1, num2) {
    let result = 0;
    for (let i = 0; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            result = i;
        }
    }
    return result;
}

// console.log(gcd(15, 5));
// console.log(gcd(2154, 458));
