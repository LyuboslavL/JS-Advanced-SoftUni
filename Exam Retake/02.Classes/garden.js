class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    };

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`);
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };

        this.plants.push(plant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let isFound = false;

        for (let element of this.plants) {
            if (element.plantName === plantName) {
                isFound = true;
                break;
            }
        };

        if(!isFound) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        };

        for (let element of this.plants) {
            if (element.plantName === plantName && element.ripe === true) {
                throw new Error(`The ${plantName} is already ripe.`);
            } else if (element.plantName === plantName && element.ripe === false) {
                element.ripe = true;
                element.quantity += quantity;
                if (quantity == 1) {
                    return `${quantity} ${plantName} has successfully ripened.`;
                } else {
                    return `${quantity} ${plantName}s have successfully ripened.`
                }
            }
        }
    }

    harvestPlant(plantName) {
        let isFound = false;

        for (let element of this.plants) {
            if (element.plantName === plantName) {
                isFound = true;
                break;
            }
        };

        if(!isFound) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        for (let element of this.plants) {
            if (element.plantName === plantName && element.ripe === false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
            }
        };

        let searchedPlant = this.plants.find((x) => x.plantName === plantName);

        let plantForStorage = searchedPlant.plantName;
        let plantQuantityForStorage = searchedPlant.quantity;
        let storagePlant = {
            plantName: plantForStorage,
            quantity: plantQuantityForStorage
        }
        this.storage.push(storagePlant);
        
        this.spaceAvailable += searchedPlant.spaceRequired;
        // this.plants.filter((x) => x.plantName !== plantName);
        this.plants.splice(this.plants.indexOf(searchedPlant), 1);
    
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;

        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsResult = [];
        for (let plant of sortedPlants) {
            plantsResult.push(plant.plantName);
        }

        result += plantsResult.join(', ');

        if (this.storage.length > 0) {
            result += `\nPlants in storage: `
            let plantsInStorage = [];
            for (let plant of this.storage) {
                plantsInStorage.push(`${plant.plantName} (${plant.quantity})`);
            }
            result += plantsInStorage.join(', ');
        } else {
            result += `\nPlants in storage: The storage is empty.`;
        }

        return result;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());



