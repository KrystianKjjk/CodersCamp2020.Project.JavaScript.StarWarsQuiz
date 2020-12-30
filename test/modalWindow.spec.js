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
        expect(modalWindow(component, closeWin) instanceof HTMLElement).toBe(true);
    })
    it('when background clicked, run function closeWindow()', () => {
        const component = document.createElement('p');
        let msg = 'window';
        const closeWin = () => {msg = 'Window closed'};
        modalWindow(component, closeWin).click();
        expect(msg).toBe('Window closed');
    })
    it('when window clicked, dont run function closeWindow()', () => {
        const component = document.createElement('p');
        let msg = 'window';
        const closeWin = () => {msg = 'Window closed'};
        modalWindow(component, closeWin).children[0].click();
        expect(msg).toBe('window');
    })
})