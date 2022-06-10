function storeCatalogue(arr) {
    let listOfProducts = {};

    for (let el of arr) {
        let [product, price] = el.split(' : ');
        price = Number(price);
        listOfProducts[product] = price;
    }

    let keys = Object.keys(listOfProducts);
    keys = keys.sort((a, b) => a.localeCompare(b));

    let currentLetter = '';
    for (let element of keys) {
        if (element.charAt(0) === currentLetter) {
            console.log(`  ${element}: ${listOfProducts[element]}`);
        } else {
            currentLetter = element.charAt(0);
            console.log(currentLetter);
            console.log(`  ${element}: ${listOfProducts[element]}`);
        }
    }
}

// storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
