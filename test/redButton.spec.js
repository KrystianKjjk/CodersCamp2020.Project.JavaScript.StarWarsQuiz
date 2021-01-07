import redButton from "../src/app/uicomponents/RedButton/RedButton";

describe('Red Button tests', () => {
    it('returns HTMLButtonElement', () => {
        const onClick = jest.fn();
        const button = redButton('Play the Game', onClick);
        expect(button).toBeInstanceOf(HTMLButtonElement);
    })

    it('only accepts strings as first argument', () => {
        const onClick = jest.fn();
        expect(() => redButton(12, onClick)).toThrowError('Label should be a string.');
        expect(() => redButton({}, onClick)).toThrowError('Label should be a string.');
        expect(() => redButton([], onClick)).toThrowError('Label should be a string.');
        expect(() => redButton(() => {}, onClick)).toThrowError('Label should be a string.');
    })

    it('has correct class name applied', () => {
        const onClick = jest.fn();
        const button = redButton('Play the Game', onClick);
        expect(button.className).toEqual('button red-button');
    })

    it('fires onClick function on clicking component', () => {
        const onClick = jest.fn();
        const button = redButton('Play the Game', onClick);
        button.click();
        expect(onClick).toHaveBeenCalledTimes(1);
    })
});