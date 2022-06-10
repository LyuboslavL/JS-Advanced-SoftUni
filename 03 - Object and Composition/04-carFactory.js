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