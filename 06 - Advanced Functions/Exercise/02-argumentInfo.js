function argumentInfo() {
    let typeCount = {};
    // console.log(arguments);

    for (let arg of arguments) {
        console.log(`${typeof(arg)}: ${arg}`);
        if (!typeCount.hasOwnProperty(typeof(arg))) {
            typeCount[typeof(arg)] = 1;
        } else {
            typeCount[typeof(arg)]++;
        }
    }

    Object.keys(typeCount).sort((a, b) => typeCount[b] - typeCount[a]).forEach(el => console.log(`${el} = ${typeCount[el]}`))
};

argumentInfo('cat', 42,function () { console.log('Hello world!')}, 45);
// console.log(`-`.repeat(40));
// argumentInfo( { name: 'bob'}, { name: 'pesho'}, 3.333, 9.999, 'dog');