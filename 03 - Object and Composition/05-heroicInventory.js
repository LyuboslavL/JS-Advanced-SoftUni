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