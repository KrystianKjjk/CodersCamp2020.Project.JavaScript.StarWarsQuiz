function modalWindow(component, closeWindow) {
    if ( !(component instanceof HTMLElement) ){
        throw Error('First argument should be HTMLElement.');
    }
    if ( !(typeof closeWindow === 'function') ){
        throw Error('Second argument should be Function.');
    }
    const backgroundDiv = document.createElement('div');
    const modalWindowDiv = document.createElement('div');
    backgroundDiv.className = 'modal-window-bg';
    backgroundDiv.appendChild(modalWindowDiv);
    modalWindowDiv.appendChild(component);
    modalWindowDiv.classList.add('border');
    modalWindowDiv.classList.add('modal-window');
    backgroundDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target === backgroundDiv){
            closeWindow();
        }
    })
    return backgroundDiv;
}
export default modalWindow;