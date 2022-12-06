const CalorieCounting = require('./CalorieCounting');

describe('CalorieCounting', () => {
    test('should read file', () => {
        let expected = "1000";
        let result = CalorieCounting.testReading();

        expect(expected).toBe(result);
    });

    test('should read gruop file', () => {
        let expected = new Array()
        expected.push(3000);
        expected.push(7400);

        let result = new Array(); 
        result = CalorieCounting.testGroupReading();

        expect(result[0]).toBe(expected[0]);
        expect(result[1]).toBe(expected[1]);
    });

    test('Test real input get higher', () => {
        let expected = 66616
        let recived = CalorieCounting.getHigher();

        expect(recived).toBe(expected);
    });

    test('Test real input get three best', () => {
        let threeBestCalories = CalorieCounting.getThreeHighers();
        let expected = threeBestCalories.reduce((a, b) => parseInt(a) + parseInt(b), 0);

        expect(expected).toBe(199172);
    });
});