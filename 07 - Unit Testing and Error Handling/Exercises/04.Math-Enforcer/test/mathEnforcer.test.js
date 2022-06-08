const mathEnforcer = require('../mathEnforcer');
const { assert } = require('chai');

describe('Testing mathEnforcer functionality', () => {
    describe('addFive()', () => {
        it('Should fail if NaN is provided', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
            assert.equal(mathEnforcer.addFive(null), undefined);
            assert.equal(mathEnforcer.addFive(true), undefined);
            assert.equal(mathEnforcer.addFive(false), undefined);
            assert.equal(mathEnforcer.addFive([]), undefined);
            assert.equal(mathEnforcer.addFive({}), undefined);
            assert.equal(mathEnforcer.addFive('string'), undefined);
            assert.equal(mathEnforcer.addFive('1'), undefined);
        });

        it('Should work when a positive number is provided', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(2), 7);
        });

        it('Should work with a negative number', () => {
            assert.equal(mathEnforcer.addFive(-3), 2);
            assert.equal(mathEnforcer.addFive(-10), -5);
        });

        it('Should work with a floating-point number', () => {
            let num = 1.101;
            let expectedResult = 6.101;
            let actualResult = mathEnforcer.addFive(num);

            assert.closeTo(actualResult,expectedResult,0.01);
        });
    });

    describe('subtractTen()', () => {
        it('Should fail if NaN is provided', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
            assert.equal(mathEnforcer.subtractTen(null), undefined);
            assert.equal(mathEnforcer.subtractTen(true), undefined);
            assert.equal(mathEnforcer.subtractTen(false), undefined);
            assert.equal(mathEnforcer.subtractTen([]), undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
            assert.equal(mathEnforcer.subtractTen('string'), undefined);
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        });

        it('Should work when a positive number is provided', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(100), 90);
        });

        it('Should work with a negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-3), -13);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });

        it('Should work with a floating-point number', () => {
            let num = 10.101;
            let expectedResult = 0.101;
            let actualResult = mathEnforcer.subtractTen(num);

            assert.closeTo(actualResult,expectedResult,0.01);
        });
    });

    describe('sum()', () => {
        it('Should fail if the first of the two parameters is NaN', () => {
            assert.equal(mathEnforcer.sum(undefined, 0), undefined);
            assert.equal(mathEnforcer.sum(null, 0), undefined);
            assert.equal(mathEnforcer.sum(true, 0), undefined);
            assert.equal(mathEnforcer.sum(false, 0), undefined);
            assert.equal(mathEnforcer.sum('undefined', 0), undefined);
            assert.equal(mathEnforcer.sum([], 0), undefined);
            assert.equal(mathEnforcer.sum({}, 0), undefined);
        });

        it('Should fail if the second of the two parameters is NaN', () => {
            assert.equal(mathEnforcer.sum(0, undefined), undefined);
            assert.equal(mathEnforcer.sum(0, null), undefined);
            assert.equal(mathEnforcer.sum(0, true), undefined);
            assert.equal(mathEnforcer.sum(0, false), undefined);
            assert.equal(mathEnforcer.sum(0, 'undefined'), undefined);
            assert.equal(mathEnforcer.sum(0, []), undefined);
            assert.equal(mathEnforcer.sum(0, {}), undefined);
        });

        it('Should pass when both parameters are positive numbers', () => {
            assert.equal(mathEnforcer.sum(0, 2), 2);
            assert.equal(mathEnforcer.sum(10, 2), 12);
        });

        it('Should pass when both parameters are negative numbers', () => {
            assert.equal(mathEnforcer.sum(-10, -5), -15);
            assert.equal(mathEnforcer.sum(-10, 5), -5);
        });

        it('Should pass when both the first parameters is a floating-point number', () => {
            assert.closeTo(mathEnforcer.sum(1.10, 5), 6.1, 0.01);
            assert.closeTo(mathEnforcer.sum(-10.10, 5.10), -5, 0.01);
        });
    })
})

