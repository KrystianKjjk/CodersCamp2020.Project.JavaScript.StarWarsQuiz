import redButton from "../src/app/redButton";

describe('Red Button tests', () => {
    it('returns HTMLButtonElement', () => {
        const button = redButton('Play the Game');
        expect(button).toBeInstanceOf(HTMLButtonElement);
    })

    it('only accepts strings as arguments', () => {
        expect(() => redButton(12)).toThrowError('Label is not string.');
        expect(() => redButton({})).toThrowError('Label is not string.');
        expect(() => redButton([])).toThrowError('Label is not string.');
        expect(() => redButton(() => {})).toThrowError('Label is not string.');
    })

    it('has correct class name applied', () => {
        const button = redButton('Play the Game');
        expect(button.className).toEqual('red-button');
    })
});