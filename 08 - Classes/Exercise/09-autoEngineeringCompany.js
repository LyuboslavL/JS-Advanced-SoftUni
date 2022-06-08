// function auto(arr) {
//     let cars = new Map();

//     for (let line of arr) {
//         let [car, model, quantity] = line.split(' | ');
//         quantity = Number(quantity);

//         if (!cars.has(car)) {
//             cars.set(car, new Map());
//         }

//         let mapModels = cars.get(car);
//         if (!mapModels.has(model)) {
//             mapModels.set(model, 0);
//         };

//         mapModels.set(model, mapModels.get(model) + quantity);
//     }

//     let result = ''
//     for (let brand of cars.keys()) {
//         result += `${brand}\n`;
//         let mapModels = cars.get(brand);
//         for (let model of mapModels.keys()) {
//             result += `###${model} -> ${mapModels.get(model)}\n`
//         }
//     }
//     return result;
// }


function auto2(arr) {
    let carsMap = new Map();

    for (let line of arr) {
        let [brand, model, amount] = line.split(' | ');
        amount = Number(amount);
        
        if (!carsMap.has(brand)) {
            carsMap.set(brand, new Map());
        }

        let carModel = carsMap.get(brand);
        if (!carModel.has(model)) {
            carModel.set(model, 0);
        }

        carModel.set(model, carModel.get(model) + amount);
    };

    let result = '';

    for (let brand of carsMap.keys()) {
        result += `${brand}\n`;
        let carModels = carsMap.get(brand);
        for (let model of carModels.keys()) {
            result += `###${model} -> ${carModels.get(model)}\n`
        }
    }

    return result;
}


console.log(auto2(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']));
