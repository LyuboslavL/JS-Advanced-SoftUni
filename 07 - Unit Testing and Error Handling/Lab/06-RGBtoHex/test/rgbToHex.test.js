const rgbToHexColor = require('../rgbToHex');
const { assert } = require('chai');

describe('Testing RGBtoHexColor functionality', () => {
    describe('Testing valid inputs', () => {
        it('Should pass when valid input1 is provided', () => {
            let expectedResult = '#010101';
            let actualResult = rgbToHexColor(1, 1, 1);

            assert.equal(expectedResult, actualResult);
        });

        it('Should pass when valid input2 is provided', () => {
            let expectedResult = '#000000';
            let actualResult = rgbToHexColor(0, 0, 0);

            assert.equal(actualResult, expectedResult);
        });

        it('Should pass when valid input3 is provided', () => {
            let expectedResult = '#FFFFFF';
            let actualResult = rgbToHexColor(255, 255, 255);

            assert.equal(actualResult, expectedResult);
        })
    });

    describe('Testing invalid inputs', () => {
        it('Should fail when a negative number1 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(-1, 0, 0);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when a negative number2 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(0, -1, 0);

            assert.equal(actualResult, expectedResult);
        });
        
        it('Should fail when a negative number3 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(0, 0, -1);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when an out of range number1 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(256, 0, 0);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when an out of range number2 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(0, 256, 0);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when an out of range number3 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(0, 0, 256);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when an invalid number1 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(3.14, 0, 0);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when an invalid number2 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(0, 3.14, 0);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when an invalid number3 is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor(0, 0, 3.14);

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when NaN is provided', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor([1], '3', {8:9});

            assert.equal(actualResult, expectedResult);
        });

        it('Should fail when there is no input', () => {
            let expectedResult = undefined;
            let actualResult = rgbToHexColor();

            assert.equal(actualResult, expectedResult);
        })
    })
})