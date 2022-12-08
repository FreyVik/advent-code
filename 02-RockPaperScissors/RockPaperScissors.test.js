const game = require('./RockPaperScissors');

describe('RockPaperScissors', () => {
    test('test A X', () => {
        let result = game.getTestResult("A X");
        let expected = 4;

        expect(expected).toBe(result);
    });

    test('test A Y', () => {
        let result = game.getTestResult("A Y");
        let expected = 8;

        expect(expected).toBe(result);
    });

    test('test A Z', () => {
        let result = game.getTestResult("A Z");
        let expected = 3;

        expect(expected).toBe(result);
    });

    test('test B X', () => {
        let result = game.getTestResult("B X");
        let expected = 1;

        expect(expected).toBe(result);
    });

    test('test B Y', () => {
        let result = game.getTestResult("B Y");
        let expected = 5;

        expect(expected).toBe(result);
    });

    test('test B Z', () => {
        let result = game.getTestResult("B Z");
        let expected = 9;

        expect(expected).toBe(result);
    });

    test('test C X', () => {
        let result = game.getTestResult("C X");
        let expected = 7;

        expect(expected).toBe(result);
    });

    test('test C Y', () => {
        let result = game.getTestResult("C Y");
        let expected = 2;

        expect(expected).toBe(result);
    });

    test('test C Z', () => {
        let result = game.getTestResult("C Z");
        let expected = 6;

        expect(expected).toBe(result);
    });

    test('Real input points', () => {
        let result = game.getRealPoints();
        let expected = 12156;

        expect(12156).toBe(result);
    });

    test('test A X', () => {
        let result = game.getTestResultSecondStrategy("A X");
        let expected = 3;

        expect(result).toBe(expected);
    });

    test('test A Y', () => {
        let result = game.getTestResultSecondStrategy("A Y");
        let expected = 4;

        expect(result).toBe(expected);
    });

    test('test A Z', () => {
        let result = game.getTestResultSecondStrategy("A Z");
        let expected = 8;

        expect(result).toBe(expected);
    });

    test('test B X', () => {
        let result = game.getTestResultSecondStrategy("B X");
        let expected = 1;

        expect(result).toBe(expected);
    });

    test('test B Y', () => {
        let result = game.getTestResultSecondStrategy("B Y");
        let expected = 5;

        expect(result).toBe(expected);
    });

    test('test B Z', () => {
        let result = game.getTestResultSecondStrategy("B Z");
        let expected = 9;

        expect(result).toBe(expected);
    });

    test('test C X', () => {
        let result = game.getTestResultSecondStrategy("C X");
        let expected = 2;

        expect(result).toBe(expected);
    });

    test('test C Y', () => {
        let result = game.getTestResultSecondStrategy("C Y");
        let expected = 6;

        expect(result).toBe(expected);
    });

    test('test C Z', () => {
        let result = game.getTestResultSecondStrategy("C Z");
        let expected = 7;

        expect(result).toBe(expected);
    });

    

    test('Real input points', () => {
        let result = game.getRealPointsSecondStrategy();
        let expected = 10835;

        expect(result).toBe(expected);
    });
});