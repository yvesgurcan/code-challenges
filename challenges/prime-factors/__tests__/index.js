const toPrimeFactors = require('../index');

describe('toPrimeFactors', function() {
    test('2', function() {
        const result = toPrimeFactors(2);
        expect(result).toEqual([2]);
    });

    test('3', function() {
        const result = toPrimeFactors(3);
        expect(result).toEqual([3]);
    });

    test('4', function() {
        const result = toPrimeFactors(4);
        expect(result).toEqual([2, 2]);
    });

    test('5', function() {
        const result = toPrimeFactors(5);
        expect(result).toEqual([5]);
    });

    test('6', function() {
        const result = toPrimeFactors(6);
        expect(result).toEqual([2, 3]);
    });

    test('7', function() {
        const result = toPrimeFactors(7);
        expect(result).toEqual([7]);
    });

    test('8', function() {
        const result = toPrimeFactors(8);
        expect(result).toEqual([2, 2, 2]);
    });

    test('9', function() {
        const result = toPrimeFactors(9);
        expect(result).toEqual([3, 3]);
    });

    test('10', function() {
        const result = toPrimeFactors(10);
        expect(result).toEqual([2, 5]);
    });
});
