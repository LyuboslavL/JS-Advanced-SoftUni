const isSymmetric = require('../checkForSymmetry');
const {assert, expect} = require('chai');

describe('Test isSymmetric functionality', () => {
    it('Should pass when symmetric array is provided', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        
        assert.equal(actualResult, expectedResult);
    });

    it('Should pass when symmetric string array is provided', () => {
        let input = ['Fucking', 'Hell', 'Fucking'];
        let expectedResult = true;
        let actualResult = isSymmetric(input);
        
        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when asymmetric array is provided', () => {
        let input = [1, 2, 3, 3, 1];
        let expectedResult = false;
        let actualResult = isSymmetric(input);
        
        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when non-array is provided', () => {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric(true), expectedResult);
        assert.equal(isSymmetric(false), expectedResult);
        assert.equal(isSymmetric(0), expectedResult);
        assert.equal(isSymmetric(Number), expectedResult);
        assert.equal(isSymmetric(String), expectedResult);
        assert.equal(isSymmetric(undefined), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
    }); 
    
    it('Should pass when an array is provided', () => {
        let input = [];
        let expectedResult = true;
        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    }); 

    it('Should fail when type of elements in array is not deeply equal', () => {
        let input = [1, 2, '1'];
        let expectedResult = true;
        let actualResult = isSymmetric(input);

        assert.notDeepEqual(actualResult, expectedResult);
    });

});