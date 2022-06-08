const lookupChar = require('../charLookup');
const { assert } = require('chai');

describe('Testing charLookup functionality', () => {
    it('Should fail when an incorrect string is given', () => {
        let index = 0;
        let expectedResult = undefined;

        assert.equal(lookupChar(undefined, index), expectedResult);
        assert.equal(lookupChar(true, index), expectedResult);
        assert.equal(lookupChar(false, index), expectedResult);
        assert.equal(lookupChar(null, index), expectedResult);
        assert.equal(lookupChar(0, index), expectedResult);
        assert.equal(lookupChar(-1, index), expectedResult);
        assert.equal(lookupChar(1, index), expectedResult);
        assert.equal(lookupChar([], index), expectedResult);
        assert.equal(lookupChar({}, index), expectedResult);
    });
    
    it('Should fail when an incorrect index is given', () => {
        let string = 'dell';
        let expectedResult = undefined;

        assert.equal(lookupChar(string, undefined), expectedResult);
        assert.equal(lookupChar(string, true), expectedResult);
        assert.equal(lookupChar(string, false), expectedResult);
        assert.equal(lookupChar(string, null), expectedResult);
        assert.equal(lookupChar(string, ''), expectedResult);
        assert.equal(lookupChar(string, []), expectedResult);
        assert.equal(lookupChar(string, {}), expectedResult);
        assert.equal(lookupChar(string, 'hi'), expectedResult);
        assert.equal(lookupChar(string, '2'), expectedResult);
        assert.equal(lookupChar(string, 1.23), expectedResult);

    });

    it('Should fail when an out of range index is given', () => {
        let string = 'dell';
        let expectedResult = "Incorrect index";

        assert.equal(lookupChar(string, -1), expectedResult);
        assert.equal(lookupChar(string, 4), expectedResult);
    });

    it('Should fail when both string and index are not right', () => {
        let string = null;
        let index = -1;
        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.equal(actualResult, expectedResult);
    });

    it('Should pass when both arguments are valid', () => {
        assert.equal(lookupChar('other', 0), 'o');
        assert.equal(lookupChar('other', 3), 'e');
    });
})