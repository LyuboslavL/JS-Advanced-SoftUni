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
