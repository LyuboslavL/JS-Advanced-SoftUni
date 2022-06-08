function cityRecord(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
    }

    return city;
}

// console.log(cityRecord('Tortuga', 7000, 15000));
// console.log(cityRecord('Santo Domingo', 12000, 23500));

function townPopulation(arr) {
    let cities = {};

    // for (let i = 0; i < arr.length; i ++) {
    //     let [city, population] = arr[i].split(' <-> ');
    //     if(!cities.hasOwnProperty(city)) {
    //         cities[city] = Number(population);
    //     } else {
    //         cities[city] += Number(population);
    //     }
    // }

    for (let town of arr) {
        let [city, population] = town.split(' <-> ');
        if (!cities.hasOwnProperty(city)) {
            cities[city] = Number(population);
        } else {
            cities[city] += Number(population);
        }
    }

    // let keys = Object.keys(cities);
    // for (let city of keys) {
    //     console.log(`${city} : ${cities[city]}`);
    // }

    for (let city in cities) {
        console.log(`${city} : ${cities[city]}`)
    }
}

// townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
// townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);

function cookingByNumbersObj(count, com1, com2, com3, com4, com5) {
    count = Number(count);
    let commands = [com1, com2, com3, com4, com5];

    let command = {
        chop() { count = count / 2; },
        dice() { count = Math.sqrt(count); },
        spice() { count++; },
        bake() { count = count * 3; },
        fillet() { count -= count * 0.2; },
    }

    for (let el of commands) {
        command[el]();
        console.log(count);
    }
}

// cookingByNumbersObj('32', 'chop', 'chop', 'chop', 'chop', 'chop'); 
// cookingByNumbersObj('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function sharedMethod() {
    let person1 = {
        firstName: 'Denzel',
        lastName: 'Washington',
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
    console.log(person1.fullName());

    let person2 = {
        firstName: 'Brad',
        lastName: 'Pitt'
    }

    const fullName = person1.fullName;
    person2.fullName = fullName;
    console.log(person2.fullName());
}

// sharedMethod();

function cityTaxes(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        // collectTaxes() {
        //     this.treasury += this.population * this.taxRate; 
        // },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * percent / 100);
        },
    }

    city.collectTaxes = function (tr, pop, tax) {
        tr += pop * tax;
    };
    city.collectTaxes(city.treasury, city.population, city.taxRate)
    city.applyGrowth(10);
    city.applyRecession(5);

    return city;
}

// console.log(cityTaxes('Tortuga', 7000, 15000));
// console.log(cityRecord('Santo Domingo', 12000, 23500));

function printerScanner() {
    function print() {
        console.log(`${this.name} is printing a page.`);
    }

    function scan() {
        console.log(`${this.name} is scanning a document.`);
    }

    const printer = {
        name: 'Samsung',
        print
    }

    const scanner = {
        name: 'AIG',
        scan
    }

    const copier = {
        name: 'Aiko',
        scan,
        print
    }

    printer.print();
    scanner.scan();
    copier.print();
    copier.scan();
}

// printerScanner();

function objectFactory(library, orders) {

    const result = [];

    for (let order of orders) {
        let composed = Object.assign({}, order.template);
        for (let part of order.parts) {
            composed[part] = library[part];
        }
        result.push(composed);
    }

    return result;
}

// const library = {
//     print: function () {
//         console.log(`${this.name} is printing a page`);
//     },
//     scan: function () {
//         console.log(`${this.name} is scanning a document`);
//     },
//     play: function (artist, track) {
//         console.log(`${this.name} is playing '${track}' by ${artist}`);
//     },
// };

// const orders = [
//     {
//         template: { name: 'ACME Printer' },
//         parts: ['print']
//     },
//     {
//         template: { name: 'Initech Scanner' },
//         parts: ['scan']
//     },
//     {
//         template: { name: 'ComTron Copier' },
//         parts: ['scan', 'print']
//     },
//     {
//         template: { name: 'BoomBox Stereo' },
//         parts: ['play']
//     },
// ];

// console.log(objectFactory(library, orders)); 

function createAssemblyLine() {
    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else {
                    car.temp--;
                }
            }
        },

        hasAudio: (car) => {
            car.currentTrack = { 'name': '', 'artist': '' };
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing ${car.currentTrack.name} by ${car.currentTrack.artist}`);
                }
            }
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log(`Beep! Beep! Beep!`);
                } else if (distance < 0.25) {
                    console.log(`Beep! Beep!`);
                } else if (distance < 0.5) {
                    console.log(`Beep!`);
                } else {
                    console.log('')
                }
            }
        }
    }
}


// const assemblyLine = createAssemblyLine();

// const myCar = {
//     make: 'BMW',
//     model: 'E46'
// };

// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);


function demo(arr) {
    
}


