function townsToJson(arr) {
    let titles = serializeRow(arr[0]);
    let rows = arr
        .slice(1)
        .map(row => serializeRow(row).reduce(accumulateIntoObject, {}));

    function parseNumber(x) {
        return isNaN(Number(x)) ? x : Number(Number(x).toFixed(2));
    }

    function accumulateIntoObject(obj, el, i) {
        obj[titles[i]] = el;
        return obj;
    }

    function serializeRow(str) {
        return str
            .split(/\s*\|\s*/gim)
            .filter(x => x !== '')
            .map(x => parseNumber(x));
    }

    return JSON.stringify(rows);
}

// console.log(townsToJson(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']));