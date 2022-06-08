const createCalculator = require('../addSubtract');
const { assert } = require('chai');

describe('Testing if the calculator is working', () => {
    it('Should return 0 for get', () => {
        let expectedResult = 0;

        assert.equal(createCalculator().get(), expectedResult);
    });

    it('Should add properly', () => {
        let calc = createCalculator();
        calc.add(3);
        calc.add(7);
        let actualResult = calc.get();
        let expectedResult = 10;

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when adding result is incorect', () => {
        let calc = createCalculator();
        calc.add(3);
        calc.add(7);
        let expectedResult = 11;
        let actualResult = calc.get();

        assert.notEqual(actualResult, expectedResult);
    });

    it('Should subtract properly', () => {
        let calc = createCalculator();
        calc.subtract(3);
        calc.subtract(1);
        let expectedResult = -4;
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when subtract is not correct', () => {
        let calc = createCalculator();
        calc.subtract(3);
        calc.subtract(1);
        let expectedResult = 1;
        let actualResult = calc.get();

        assert.notEqual(actualResult, expectedResult);
    });

    it('Should have both add and subtract working together', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(5);
        let expectedResult = 5;
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail if add or subtract doesn\'t work properly', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(5);
        let expectedResult = 3;
        let actualResult = calc.get();

        assert.notEqual(actualResult, expectedResult);
    });

    it('Should work with any kind of number', () => {
        let calc = createCalculator();
        calc.add(5.5);
        calc.subtract(5.5);
        let expectedResult = 0;
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('Should return NaN if add is given a string', () => {
        let calc = createCalculator();
        calc.add('hello');
        let expectedResult = Number;
        let actualResult = calc.get();
        
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should return NaN if subtract is given a string', () => {
        let calc = createCalculator();
        calc.subtract('hello');
        let expectedResult = Number;
        let actualResult = calc.get();
        
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should work when add is given a number as a string', () => {
        let calc = createCalculator();
        calc.add('1');
        let expectedResult = 1;
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('Should work when subtract is given a number as a string', () => {
        let calc = createCalculator();
        calc.subtract('1');
        let expectedResult = -1;
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });

    it('Should work when more than one add and subtract are together', () => {
        let calc = createCalculator();
        calc.add(5);
        calc.subtract(1);
        calc.add(6);
        calc.subtract(5);
        let expectedResult = 5;
        let actualResult = calc.get();

        assert.equal(actualResult, expectedResult);
    });
})