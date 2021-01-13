import whiteIconButton from "../src/app/uicomponents/WhiteIconButton/WhiteIconButton";

describe('White Icon Button tests', () => {
    it('returns HTMLButtonElement with two children', () => {
        const icon = document.createElement('i'); // similar to fontawesome
        const onClick = jest.fn();
        const button = whiteIconButton('Play the Game', icon, onClick);
        expect(button).toBeInstanceOf(HTMLButtonElement);
        expect(button.children.length).toEqual(2);
    })

    it('has correct class name applied', () => {
        const icon = document.createElement('i'); // similar to fontawesome
        const onClick = jest.fn();
        const button = whiteIconButton('Play the Game', icon, onClick);
        expect(button.className).toEqual('button white-icon-button');
    })

    it('wrong 1st argument', () => {
        const icon = document.createElement('i');
        const onClick = jest.fn(); 
        expect(() => whiteIconButton(12, icon, onClick)).toThrowError('Label is not a string.');
        expect(() => whiteIconButton({}, icon, onClick)).toThrowError('Label is not a string.');
        expect(() => whiteIconButton([], icon, onClick)).toThrowError('Label is not a string.');
        expect(() => whiteIconButton(() => {}, icon, onClick)).toThrowError('Label is not a string.');
    })

    it('wrong 2nd argument', () => {
        const onClick = jest.fn(); 
        expect(() => whiteIconButton('Hall of fame', 'icon', onClick)).toThrowError('Icon is not HTMLElement');
        expect(() => whiteIconButton('Hall of fame', 12, onClick)).toThrowError('Icon is not HTMLElement');
        expect(() => whiteIconButton('Hall of fame', {}, onClick)).toThrowError('Icon is not HTMLElement');
        expect(() => whiteIconButton('Hall of fame', [], onClick)).toThrowError('Icon is not HTMLElement');
        expect(() => whiteIconButton('Hall of fame', () => {}, onClick)).toThrowError('Icon is not HTMLElement');
    })

    it('fires onClick function on clicking component', () => {
        const onClick = jest.fn();
        const icon = document.createElement('i');
        const button = whiteIconButton('Play the Game', icon, onClick);
        button.click();
        expect(onClick).toHaveBeenCalledTimes(1);
    })
});