const testNumbers = require('../testNumbers');
const { assert } = require('chai');
// const { sumNumbers } = require('../testNumbers');

describe('Testing the functionality of testNumbers', () => {
    describe('Testing the sumNumber function', () => {
        it('Should return a proper sum if two numbers are provided', () => {
            let expectedResult = 10;
            let actualResult = testNumbers.sumNumbers(9, 1);

            assert.equal(actualResult, expectedResult);
        });

        it ('Should work with negative numbers as well', () => {
            assert.equal(testNumbers.sumNumbers(-3, -3), -6);
            assert.equal(testNumbers.sumNumbers(-3, 3), 0);
            assert.equal(testNumbers.sumNumbers(3, -2), 1);
        });

        it ('Should return undefined if a NaN is provided', () => {
            assert.notEqual(testNumbers.sumNumbers('String', -3), -6);
            assert.notEqual(testNumbers.sumNumbers([], 3), 0);
            assert.notEqual(testNumbers.sumNumbers({}, -2), 1);
        });

        it ('Should return undefined if any of the two parameters is not a number', () => {
            assert.equal(testNumbers.sumNumbers('String', -3), undefined);
            assert.equal(testNumbers.sumNumbers([], 3), undefined);
            assert.equal(testNumbers.sumNumbers({}, -2), undefined);
        });

        it ('Should round the result to the second decimal point', () => {
            assert.equal(testNumbers.sumNumbers(5.0005, 5.0005), 10.00);
            assert.equal(testNumbers.sumNumbers(3.101, 3.101), 6.20);
            assert.equal(testNumbers.sumNumbers(-1.0001, -2), -3.00);
        });
    });

    describe('Testing the numberChecker function', () => {
        it('Should throw an error if NaN is provided', () => {
            assert.throw(() => testNumbers.numberChecker({}), 'The input is not a number!');
        });
        
        it('Should return even string when even number is provided', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
        });

        it('Should return odd string when odd number is provided', () => {
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
        });

        it('Should work when number is provided as string', () => {
            assert.equal(testNumbers.numberChecker('1'), 'The number is odd!');
            assert.equal(testNumbers.numberChecker('2'), 'The number is even!');

        });
    });

    describe('Testing the averageSumArray function', () => {
        it('Should return a proper average sum', () => {
            assert.equal(testNumbers.averageSumArray([0, 5, 10]), 5);
            assert.equal(testNumbers.averageSumArray([0, -10, 10]), 0);

        });
    });
})