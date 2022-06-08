(function () {
    String.prototype.ensureStart = function (str) {
        // let toCompare = this.slice(0, str.length);

        // if (str !== toCompare) {
        //     return str + this;
        // }

        // return this;

        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this;
        }
    };

    String.prototype.ensureEnd = function (str) {
        // let toCompare = this.slice(this.length - str.length);

        // if (str !== toCompare) {
        //     return this + str;
        // }

        // return this;

        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return this + str;
        }
    };

    String.prototype.isEmpty = function () {
        if (this.toString() === '') {
            return true;
        } else {
            return false;
        }
    };

    String.prototype.truncate = function (n) {
        // if string.length is less than n
        if (this.length <= n) {
            return this.toString();
        }

        // if string.length is greater than n and the string contains spaces
        if (this.includes(' ')) {
            let result = this.split(' ');

            while (result.join(' ').length + 3 > n) {
                result.pop();
            }

            let sentence = `${result.join(' ')}...`;
            return sentence;
        }

        // if string.length is greater than n but the string doesn't contains spaces
        if (n > 3) {
            let string = `${this.slice(0, n - 3)}...`;
            return string;
        };

        // if n < 4
        return '.'.repeat(n);
    };

    String.format = function (str, ...params) {
        let replaceRegex = /{(\d+)}/g;
        let replacedString = str.replace(replaceRegex, (match, group1) => {
            let index = Number(group1);
            if (params[index] !== undefined) {
                return params[index];
            }

            return match;
        });

        return replacedString;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.ensureEnd('ing');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);

