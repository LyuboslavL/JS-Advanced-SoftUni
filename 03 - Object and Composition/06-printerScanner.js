function printerScanner() {
    function print() {
        console.log(`${this.name} is printing a page.`);
    }

    function scan() {
        console.log(`${this.name} is scanning a document.`);
    }

    const printer = {
        name: 'Samsung',
        print
    }

    const scanner = {
        name: 'AIG',
        scan
    }

    const copier = {
        name: 'Aiko',
        scan,
        print
    }

    printer.print();
    scanner.scan();
    copier.print();
    copier.scan();
}

// printerScanner();