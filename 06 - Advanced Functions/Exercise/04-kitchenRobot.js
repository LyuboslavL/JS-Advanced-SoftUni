function solution() {

    let recipes = {
        "apple": {
            "carbohydrate": 1,
            "flavour": 2
        },
        "lemonade": {
            "carbohydrate": 10,
            "flavour": 20
        },
        "burger": {
            "carbohydrate": 5,
            "fat": 7,
            "flavour": 3
        },
        "eggs": {
            "protein": 5,
            "fat": 1,
            "flavour": 1
        },
        "turkey": {
            "protein": 10,
            "carbohydrate": 10,
            "fat": 10,
            "flavour": 10
        }
    };

    let microelementsObj = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0
    };

    function restock(microelement, quantity) {
        microelementsObj[microelement] += Number(quantity);
        return 'Success'
    }

    function prepare(recipe, quantity) {
        let product = Object.entries(recipes[recipe]);
        // console.log(product);
        for (let [key, value] of product) {
            if (microelementsObj[key] < value * Number(quantity)) {
                return `Error: not enough ${key} in stock`;
            }
        };
        for (let [key, value] of product) {
            microelementsObj[key] -= value * Number(quantity);
        }

        return 'Success';
    }

    function report() {
        let result = [];
        Object.entries(microelementsObj).forEach((el) => {
            result.push(`${el[0]}=${el[1]}`);
        });
        return result.join(' ');
    }

    return function (order) {
        let token = order.split(' ');
        let action = token.shift();

        if (action === 'prepare') {
            return prepare(...token);
        } else if (action === 'restock') {
            return restock(...token);
        } else if (action === 'report') {
            return report();
        }
    }

}

let manager = solution();


console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


