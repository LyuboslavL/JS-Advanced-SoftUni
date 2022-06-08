function tickets(arr, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    };

    let finalArr = [];

    for (let line of arr) {
        let [place, price, status] = line.split('|');
        price = Number(price);
        finalArr.push(new Ticket(place, price, status));
    };


    if (criterion === 'destination') {
        finalArr.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criterion === 'status') {
        finalArr.sort((a, b) => a.status.localeCompare(b.status));
    } else if (criterion === 'price') {
        finalArr.sort((a, b) => a.price - b.price);
    }

    return finalArr;
}

// console.log(tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));
console.log(tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status'));
