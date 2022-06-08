const bookSelection = require('../bookSelection');
const { assert } = require('chai');

describe('Testing bookSelection functionality', () => {
    describe('isGenreSuitable', () => {
        it('Should fail to deliver books if age <= 12 and genre is Horror or Thriller', () => {

            assert.equal(bookSelection.isGenreSuitable('Horror', 10), 'Books with Horror genre are not suitable for kids at 10 age');
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), 'Books with Horror genre are not suitable for kids at 12 age');
            assert.equal(bookSelection.isGenreSuitable('Horror', 0), 'Books with Horror genre are not suitable for kids at 0 age');
            assert.equal(bookSelection.isGenreSuitable('Thriller', 10), 'Books with Thriller genre are not suitable for kids at 10 age');
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), 'Books with Thriller genre are not suitable for kids at 12 age');
            assert.equal(bookSelection.isGenreSuitable('Thriller', 0), 'Books with Thriller genre are not suitable for kids at 0 age');
        });

        it('Should pass when age <= 12 if genre is not horror or thriller', () => {

            assert.equal(bookSelection.isGenreSuitable('Comedy', 10), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Action', 12), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Documentary', 0), `Those books are suitable`);
        });

        it('Should pass when age > 12 if genre is horror or thriller', () => {

            assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`);
        });
    });

    describe('isItAffordable', () => {
        it('Should fail if the input is not of correct type', () => {

            assert.throw(() => bookSelection.isItAffordable([], 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable({}, 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(undefined, 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable('string', 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(null, 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(true, 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(false, 100), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable('100', 100), 'Invalid input');

            assert.throw(() => bookSelection.isItAffordable(100, []), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, {}), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, undefined), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, 'string'), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, '100'), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, null), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, true), 'Invalid input');
            assert.throw(() => bookSelection.isItAffordable(100, false), 'Invalid input');
        });

        it('Should deny the purchase if you do not have enough money', () =>{
            assert.equal(bookSelection.isItAffordable(10, 5), "You don't have enough money");
        });

        it('Should allow the purchase if you have enough money', () =>{
            assert.equal(bookSelection.isItAffordable(5, 10), "Book bought. You have 5$ left");
            assert.equal(bookSelection.isItAffordable(5, 5), "Book bought. You have 0$ left");
        });
    });

    describe('suitableTitles', () => {
        it('Should fail if the input is not of correct type', () => {

            assert.throw(() => bookSelection.suitableTitles(null, 'Horror'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles({}, 'Comedy'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(undefined, 'Thriller'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles('string', 'Action'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(true, 'Action'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(false, 'Action'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles('100', 'Action'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(100, 'Action'), 'Invalid input');


            assert.throw(() => bookSelection.suitableTitles([], null), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([], {}), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([], 100), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([], false), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([], true), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([], undefined), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([], []), 'Invalid input');
        });

        it('Should work if the array includes the wanted type of book', () => {

            let expectedResult = 'Peter Pan';
            let actualResult = bookSelection.suitableTitles([{ title: "Peter Pan", genre: "Thriller" }, { title: "Bornstad", genre: "Comedy" }], 'Thriller');
            actualResult.join(' ');

            assert.equal(actualResult, expectedResult);
        });

        it('Should return an empty array if there is no book of desired genre', () => {

            let expectedResult = '';
            let actualResult = bookSelection.suitableTitles([{ title: "Peter Pan", genre: "Comedy" }, { title: "Bornstad", genre: "Comedy" }], 'Thriller');
            // actualResult.join(', ');

            assert.equal(actualResult.join(' '), expectedResult);
        });
    });
})