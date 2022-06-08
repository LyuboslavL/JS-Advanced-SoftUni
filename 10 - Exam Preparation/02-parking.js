class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    };

    addCar(model, carNumber) {
        if (this.capacity <= 0) {
            throw new Error('Not enough parking space.');
        }

        let car = {
            model: model,
            carNumber: carNumber,
            payed: false
        };

        this.vehicles.push(car);
        this.capacity--;
        return `The ${model}, with a registration number ${carNumber}, parked`;
    };

    removeCar(numberToFind) {
        let isFound = false;
        
        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].carNumber === numberToFind) {
                isFound = true;
                if (this.vehicles[i].payed === false) {
                    return `${numberToFind} needs to pay before leaving the parking lot.`;
                } else {
                    this.vehicles.splice(i, 1);
                    this.capacity++;
                    return `${numberToFind} left the parking log.`;
                }
            } else {
                isFound = false;
            }
        }

        if(!isFound) {
            return `The car, you're looking for, is not found.`
        }
    };

    pay(numberToFind) {
        let isFound = false; 

        for (let el of this.vehicles) {
            if (el.carNumber === numberToFind) {
                isFound = true;
                if (el.payed === true) {
                    return `${numberToFind}'s driver has already payed his ticket.`
                } else if (el.payed === false) {
                    el.payed = true;
                    return `${numberToFind}'s driver successfully payed for his stay.`
                }
            } else {
                isFound = false;
            }
        };

        if (!isFound) {
            throw new Error(`${numberToFind} is not in the parking lot.`)
        }
    };

    getStatistics(numberToFind) {
        if (numberToFind !== undefined && numberToFind !== null) {
            let searchedCar = this.vehicles.filter(x => x.carNumber === numberToFind)
            return `${searchedCar[0].model} == ${searchedCar[0].carNumber} - ${searchedCar[0].payed ? `Has payed` : 'Not payed'}`;
        } else {
            let result = `The Parking Lot has ${this.capacity} empty spots left.`;
            let sortedCars = this.vehicles.sort((a, b) => a.model.localeCompare(b.model));
            for (let car of sortedCars) {
                result += `\n${car.model} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
            }
            return result; 
        }   
    }
}

const parking = new Parking(10);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.addCar("BMW t600", "TX3692CA"));
// console.log(parking.addCar("Asprilla t600", "TX3693CA"));

console.log(parking.getStatistics("TX3691CA"));

console.log(parking.pay("TX3691CA"));
console.log(parking.pay("TX3691CA"));

console.log(parking.removeCar("TX3691CA"));

