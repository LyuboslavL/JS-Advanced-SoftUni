const sum = require('../sumOfNumbers');
let { assert, expect } = require('chai');

describe('Testing sum functionality', () => {
    it('Should pass when the sum is accurate', () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;
        let actualResult = sum(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when the sum is inacurate', () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 10;
        let actualResult = sum(input);

        assert.notEqual(actualResult, expectedResult);
    });

    it('Should fail when result is NaN', () => {
        let input = [1, 2, 'string', 4];
        let expectedResult = Number;
        let actualResult = sum(input);
        
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should pass when an array is provided', () => {
        let input = [];
        let expectedResult = 0;
        let actualResult = sum(input);
        
        assert.equal(actualResult, expectedResult);
    });

    // it('Should fail when non-array is provided', () => {
    //     let expectedResult = false;
        
    //     assert.equal(sum(null), expectedResult);
    //     assert.equal(sum(true), expectedResult);
    //     assert.equal(sum(false), expectedResult);
    //     assert.equal(sum(0), expectedResult);
    //     assert.equal(sum(Number), expectedResult);
    //     assert.equal(sum(String), expectedResult);
    //     assert.equal(sum(undefined), expectedResult);
    //     assert.equal(sum({}), expectedResult);
    // });
})