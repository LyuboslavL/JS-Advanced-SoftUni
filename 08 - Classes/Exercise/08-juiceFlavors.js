function juiceFlavors(arr) {
    let juices = {};
    let bottles = {};

    for (let line of arr) {
        let [flavor, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(flavor)) {
            juices[flavor] = 0;
        };

        juices[flavor] += quantity;

        if (juices[flavor] >= 1000) {
            if (!bottles.hasOwnProperty(flavor)) {
                bottles[flavor] = 0;
            };
            bottles[flavor] +=  Math.floor(juices[flavor] / 1000);
            while (juices[flavor] >= 1000) {
                juices[flavor] -= 1000;
            }
        }
    };
    
    let result = '';

    Object.keys(bottles).forEach(x => {
        result += `${x} => ${bottles[x]}\n`;
    });

    return result.trim();
}

// console.log(juiceFlavors(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']));

// console.log(juiceFlavors(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']));

function juiceFlavorsMap(arr) {
    let juiceMap = new Map();
    let bottlesMap = new Map();

    for (let line of arr) {
        let [flavor, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juiceMap.has(flavor)) {
            juiceMap.set(flavor, 0);
        }

        juiceMap.set(flavor, juiceMap.get(flavor) + quantity);

        if (juiceMap.get(flavor) >= 1000) { 
            
            if (!bottlesMap.has(flavor)) {
                bottlesMap.set(flavor, 0);
            };

            let currentBottles = bottlesMap.get(flavor);
            let newBottles = Math.trunc(juiceMap.get(flavor) / 1000);
            let totalBottles = currentBottles + newBottles;

            bottlesMap.set(flavor, totalBottles);
            juiceMap.set(flavor, juiceMap.get(flavor) % 1000)
        }
    }

    return [...bottlesMap].map(([key, value]) => `${key} => ${value}`).join('\n');
}

console.log(juiceFlavorsMap(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']));