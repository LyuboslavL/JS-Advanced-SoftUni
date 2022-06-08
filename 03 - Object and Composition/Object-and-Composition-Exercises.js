function calorieObj(arr) {
    let foodDiary = {};

    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let grams = Number(arr[i + 1]);
        foodDiary[food] = grams;
    }

    return foodDiary;
}

// console.log(calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
// console.log(calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

function printer() {
    function canPrint(device) {
        device.print = () => {
            console.log(`${device.name} can print!`);
        }
    }

    const printer = { name: 'Printer' };
    canPrint(printer);
    printer.print();
}

// printer();

function constructionCrew(workerObj) {
    if (workerObj.dizziness) {
        let waterNeeded = 0.1 * workerObj.weight * workerObj.experience;
        workerObj.levelOfHydrated += waterNeeded;
        return workerObj;
    } else {
        return workerObj;
    }
}

// console.log(constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0,dizziness: true }));
// console.log(constructionCrew({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true }));
// console.log(constructionCrew({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }));    

function carFactory(carObj) {
    let finalCar = {};

    finalCar.model = carObj.model;

    if (carObj.power <= 90) {
        finalCar.engine = {
            'power': 90,
            'volume': 1800
        }
    } else if (carObj.power <= 120) {
        finalCar.engine = {
            'power': 120,
            'volume': 2400
        }
    } else {
        finalCar.engine = {
            'power': 200,
            'volume': 3500
        }
    }

    finalCar.carriage = {
        'type': carObj['carriage'],
        'color': carObj['color']
    };

    if (carObj.wheelsize % 2 === 0) {
        let wheels = carObj.wheelsize - 1;
        finalCar.wheels = [wheels];
        let i = 1;
        while (i < 4) {
            finalCar.wheels.push(wheels);
            i++;
        }
    } else {
        let wheels = carObj.wheelsize;
        finalCar.wheels = [wheels];
        let i = 1;
        while (i < 4) {
            finalCar.wheels.push(wheels);
            i++;
        }
    }

    return finalCar;
}

// console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));  
// console.log(carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }));

function heroicInventory(arr) {
    let result = [];

    for (let line of arr) {
        let [hero, level, items] = line.split(' / ');
        let heroes = {};
        heroes.name = hero;
        heroes.level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.items = items;
        result.push(heroes);
    }

    return JSON.stringify(result);
}

// console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']));
// console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));

function lowestPrices(arr) {
    let products = {};

    for (let line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        products[product][town] = price;
    }

    let result = [];
    for (let key in products) {
        let townsSorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        let cheapestTown = townsSorted[0];
        result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }

    return result.join('\n');

}

// console.log(lowestPrices(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']));

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

function townsToJson(arr) {
    let titles = serializeRow(arr[0]);
    let rows = arr
        .slice(1)
        .map(row => serializeRow(row).reduce(accumulateIntoObject, {}));

    function parseNumber(x) {
        return isNaN(Number(x)) ? x : Number(Number(x).toFixed(2));
    }

    function accumulateIntoObject(obj, el, i) {
        obj[titles[i]] = el;
        return obj;
    }

    function serializeRow(str) {
        return str
            .split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(x => parseNumber(x));
    }

    return JSON.stringify(rows);
}

// console.log(townsToJson(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']));

function rectangle(width, height, color) {
    let rectObj = {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    }

    return rectObj;

}

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

function createSortedList() {
    let arr = [];

    return {
        add(element) {
            arr.push(element);
            this.size++;
            arr.sort((a, b) => a - b);
        },
        remove(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError;
            }

            arr.splice(index, 1);
            this.size--;
        },
        get(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError;
            }

            return arr[index];
        },
        size: 0
    }
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));
