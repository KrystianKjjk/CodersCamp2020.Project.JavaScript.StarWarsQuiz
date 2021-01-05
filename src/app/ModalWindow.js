function modalWindow(component, closeWindow) {
    if ( !(component instanceof HTMLElement) ){
        throw Error('First argument should be HTMLElement.');
    }
    if ( !(typeof closeWindow === 'function') ){
        throw Error('Second argument should be Function.');
    }
    const backgroundDiv = document.createElement('div');
    const modalWindowDiv = document.createElement('div');
    backgroundDiv.appendChild(modalWindowDiv);
    modalWindowDiv.appendChild(component);
    backgroundDiv.className = 'modal-window-bg';
    modalWindowDiv.classList.add('border', 'modal-window');
    backgroundDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target === backgroundDiv){
            closeWindow();
        }
    })
    return backgroundDiv;
}
export default modalWindow;