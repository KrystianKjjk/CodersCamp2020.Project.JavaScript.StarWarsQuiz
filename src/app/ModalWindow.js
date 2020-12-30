function modalWindow(component, closeWindow) {
    if ( !(component instanceof HTMLElement) ){
        throw Error('First argument should be HTMLElement.');
    }
    if ( !(closeWindow instanceof Function) ){
        throw Error('Second argument should be Function.');
    }
    const modalWindowDiv = document.createElement('div');
    modalWindowDiv.appendChild(component);
    modalWindowDiv.className = 'modal-window-bg';
    modalWindowDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target === modalWindowDiv){
            closeWindow();
        }
    })
    return modalWindowDiv;
}
export default modalWindow;