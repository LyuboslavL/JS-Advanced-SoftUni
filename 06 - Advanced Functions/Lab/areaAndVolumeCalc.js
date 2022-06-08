function solve(area, vol, input) {
    let coordinatesArr = JSON.parse(input);

    let result = [];

    for (let figure of coordinatesArr) {
        let output = {
            area: area.call(figure),
            volume: vol.call(figure)
        };

        result.push(output);
    }
    
//     let result = coordinatesArr.map(digit => ({
//         area: Math.abs(area.call(digit)), 
//         volume: Math.abs(vol.call(digit))
//     }));

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);

}

function solve1(area, vol, input) {
    return JSON.parse(input).map(x => ({
        area: area.call(x),
        volume: vol.call(x)
    }));
}

console.log(solve1(area, vol, '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]'));