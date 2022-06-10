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