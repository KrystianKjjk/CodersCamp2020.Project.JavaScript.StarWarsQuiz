import modalWindow from '../src/app/ModalWindow.js';
describe('Modal Window test', () => {
    it('wrong 1st argument', () => {
        const component = 'component';
        const closeWin = () => console.log('closeWindow');
        expect(() => modalWindow(component, closeWin)).toThrowError('First argument should be HTMLElement.');
    })
    it('wrong 2nd argument', () => {
        const component = document.createElement('p');
        const closeWin = 'closeWindow';
        expect(() => modalWindow(component, closeWin)).toThrowError('Second argument should be Function.');
    })
    it('when correct arguments, return HTMLElement', () => {
        const component = document.createElement('p');
        const closeWin = () => console.log('closeWindow');
        expect(modalWindow(component, closeWin)).toBeInstanceOf(HTMLElement);
    })
    it('when background clicked, run function closeWindow()', () => {
        const component = document.createElement('p');
        const closeWin = jest.fn();
        modalWindow(component, closeWin).click();
        expect(closeWin).toHaveBeenCalled();
    })
    it('when window clicked, dont run function closeWindow()', () => {
        const component = document.createElement('p');
        const closeWin = jest.fn();
        modalWindow(component, closeWin).children[0].click();
        expect(closeWin).not.toHaveBeenCalled();
    })
})