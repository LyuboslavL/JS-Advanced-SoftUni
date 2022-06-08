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

        return `The ${plantName} has been successfully planted in the garden.`;
    }
};

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());

