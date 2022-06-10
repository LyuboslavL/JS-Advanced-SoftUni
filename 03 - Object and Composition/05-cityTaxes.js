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
