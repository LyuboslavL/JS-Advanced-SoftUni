function printer() {
    function canPrint(device) {
        device.print = () => {
            console.log(`${device.name} can print!`);
        }
    }

    const printer = { name: 'Printer' };
    canPrint(printer);
    printer.print();
}

// printer();
