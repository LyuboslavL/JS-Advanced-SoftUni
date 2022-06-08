const isOddOrEven = require('../oddOrEven');
const { assert } = require('chai');

describe('Testing isOddOrEven functionality', () => {
    it('Should pass when result is even', () => {
        let input = 'dell';
        let expectedResult = 'even';
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should pass when result is odd', () => {
        let input = 'del';
        let expectedResult = 'odd';
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when input is not a string', () => {
        let input = 2;
        let expectedResult = undefined;
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when result is an array', () => {
        let input = ['1', '2'];
        let expectedResult = undefined;
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should pass when more than one word is given as an input', () => {
        let input = 'hello world and welcome';
        let expectedResult = 'odd';
        let actualResult = isOddOrEven(input);

        assert.equal(actualResult, expectedResult);
    })
})