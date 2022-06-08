class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };

    loadProducts(productsArr) {

        for (let line of productsArr) {
            let [name, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (price <= this.budgetMoney) {
                if(!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0;
                };

                this.stockProducts[name] = quantity;
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        };

        return this.history.join('\n');
    }

    addToMenu(meal, productsNeeded, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: {},
                price: price
            }
        } else {
            return `The ${meal} is already in our menu, try something different.`
        }

        for (let line of productsNeeded) {
            let [productName, productQuantity] = line.split(' ');
            productQuantity = Number(productQuantity);
            this.menu[meal].products[productName] = productQuantity;
        };

        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${(Object.keys(this.menu).length)} meals in the menu, other ideas?`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        };

        let result = [];
        for (let meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return result.join('\n');
    }

    makeTheOrder(mealString) {
        if (!this.menu.hasOwnProperty(mealString)) {
            return `There is not ${mealString} yet in our menu, do you want to order something else?`;
        };

        for (let product of Object.keys(this.menu[mealString].products)) {
            if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < this.menu[mealString].products[product]) {
                return `For the time being, we cannot complete your order (${mealString}), we are very sorry...`;
            } else {
                this.stockProducts[product] -= this.menu[mealString].products[product];
            }
        };

        this.budgetMoney += this.menu[mealString].price;
        return `Your order (${mealString}) will be completed in the next 30 minutes and will cost you ${this.menu[mealString].price}.`;
    }
}


let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));