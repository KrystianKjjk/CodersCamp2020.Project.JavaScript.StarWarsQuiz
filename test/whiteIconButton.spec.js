import whiteIconButton from "../src/app/whiteIconButton";

describe('White Icon Button tests', () => {
    it('returns HTMLButtonElement with two children', () => {
        const icon = document.createElement('i'); // similar to fontawesome
        const button = whiteIconButton('Play the Game', icon);
        expect(button).toBeInstanceOf(HTMLButtonElement);
        expect(button.children.length).toEqual(2);
    })

    it('has correct class name applied', () => {
        const icon = document.createElement('i'); // similar to fontawesome
        const button = whiteIconButton('Play the Game', icon);
        expect(button.className).toEqual('white-icon-button');
    })

    it('wrong 1st argument', () => {
        const icon = document.createElement('i'); 
        expect(() => whiteIconButton(12, icon)).toThrowError('Label is not string.');
        expect(() => whiteIconButton({}, icon)).toThrowError('Label is not string.');
        expect(() => whiteIconButton([], icon)).toThrowError('Label is not string.');
        expect(() => whiteIconButton(() => {}, icon)).toThrowError('Label is not string.');
    })

    it('wrong 2nd argument', () => {
       expect(() => whiteIconButton('Hall of fame', 'icon')).toThrowError('Icon is not HTMLElement');
       expect(() => whiteIconButton('Hall of fame', 12)).toThrowError('Icon is not HTMLElement');
       expect(() => whiteIconButton('Hall of fame', {})).toThrowError('Icon is not HTMLElement');
       expect(() => whiteIconButton('Hall of fame', [])).toThrowError('Icon is not HTMLElement');
       expect(() => whiteIconButton('Hall of fame', () => {})).toThrowError('Icon is not HTMLElement');
    })

});