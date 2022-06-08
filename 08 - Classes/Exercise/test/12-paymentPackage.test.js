const PaymentPackage = require('../12-paymentPackage');
const { assert } = require('chai');

describe ('Testing PaymentPackage class', () => {

    describe ('Constructor', () => {
        it ('Should have all the parameters', () => {
            let instance = new PaymentPackage('Name', 123);

            assert.equal(instance.name, 'Name');
            assert.equal(instance.value, 123);
            assert.equal(instance.VAT, 20);
            assert.equal(instance.active, true);
        });
    })

    describe ('Name', () => {
        it ('Should throw error when the Name is not a correct type', () => {
            assert.throw(() => new PaymentPackage(123, 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage([], 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage({}, 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage(undefined, 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage('', 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage(null, 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage(true, 123), 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage(false, 123), 'Name must be a non-empty string');
        });

        it ('Should pass when the name is a correct string', () => {
            let expectedResult = 'Name';
            let actualResult = new PaymentPackage('Name', 123);

            assert.equal(actualResult.name, expectedResult);
        })
    })

    describe ('Value', () => {
        it ('Should throw error when the Value is not a Number', () => {
            assert.throw(() => new PaymentPackage('name', '123'), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', []), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', {}), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', undefined), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', false), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', true), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', null), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name'), 'Value must be a non-negative number');
        });

        it ('Should throw error when the Value is a negative Number', () => {
            assert.throw(() => new PaymentPackage('name', -1), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', -100), 'Value must be a non-negative number');
            assert.throw(() => new PaymentPackage('name', -1), 'Value must be a non-negative number');
        });

        it ('Should pass when a proper Number is provided', () => {
            let expectedResult = 100;
            let actualResult = new PaymentPackage('name', 100);

            assert.equal(actualResult.value, expectedResult);
        })
    })

    describe ('VAT', () => {
        it ('Should throw error when the VAT is not a Number', () => {
            let actualResult = new PaymentPackage('name', 123);
            assert.throw(() => actualResult.VAT = [], 'VAT must be a non-negative number');
            assert.throw(() => actualResult.VAT = {}, 'VAT must be a non-negative number')
            assert.throw(() => actualResult.VAT = '123', 'VAT must be a non-negative number')
            assert.throw(() => actualResult.VAT = undefined, 'VAT must be a non-negative number')
            assert.throw(() => actualResult.VAT = null, 'VAT must be a non-negative number')
            assert.throw(() => actualResult.VAT = true, 'VAT must be a non-negative number')
            assert.throw(() => actualResult.VAT = false, 'VAT must be a non-negative number')
        });

        it ('Should throw error when the VAT is a negative Number', () => {
            let actualResult = new PaymentPackage('name', 123);
            assert.throw(() => actualResult.VAT = -1, 'VAT must be a non-negative number');
            assert.throw(() => actualResult.VAT = -100, 'VAT must be a non-negative number')
        });

        it ('Should pass when a proper VAT is provided', () => {
            let expectedResult = 100;
            let actualResult = new PaymentPackage('name', 100);
            actualResult.VAT = 100; 

            assert.equal(actualResult.VAT, expectedResult);
        })
    })

    describe ('Active', () => {
        it ('Should throw error when the Active is not a boolean', () => {
            let actualResult = new PaymentPackage('name', 123);
            assert.throw(() => actualResult.active = [], 'Active status must be a boolean');
            assert.throw(() => actualResult.active = {}, 'Active status must be a boolean');
            assert.throw(() => actualResult.active = '123', 'Active status must be a boolean');
            assert.throw(() => actualResult.active = undefined, 'Active status must be a boolean');
            assert.throw(() => actualResult.active = null, 'Active status must be a boolean');
            assert.throw(() => actualResult.active = 'string', 'Active status must be a boolean');
            assert.throw(() => actualResult.active = 1, 'Active status must be a boolean');
        });

        it ('Should pass when a proper Active is provided', () => {
            let expectedResult = true;
            let actualResult = new PaymentPackage('name', 100);
            actualResult.active = true; 

            assert.equal(actualResult.active, expectedResult);

            let expectedResult2 = false;
            let actualResult2 = new PaymentPackage('name', 100);
            actualResult2.active = false;

            assert.equal(actualResult2.active, expectedResult2);
        })
    })

    describe ('toString', () => {
        it ('Should return a string if all the input is correct', () => {
            let result = new PaymentPackage('name', 123);
            let output = [
                `Package: name`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ];

            assert.equal(result.toString(), output.join('\n'));
        })

        it ('Should return a proper string if VAT is added', () => {
            let result = new PaymentPackage('name', 123);
            result.VAT = 30;
            let output = [
                `Package: name`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ];

            assert.equal(result.toString(), output.join('\n'));
        })

        it ('Should return a proper string if Active is changed is added', () => {
            let result = new PaymentPackage('name', 123);
            result.active = false;
            let output = [
                `Package: name (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ];

            assert.equal(result.toString(), output.join('\n'));
        })

        it ('Should return a proper string if VAT and Active are added', () => {
            let result = new PaymentPackage('name', 123);
            result.VAT = 30;
            result.active = false; 
            let output = [
                `Package: name (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ];

            assert.equal(result.toString(), output.join('\n'));
        })
    })
})