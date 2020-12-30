function modalWindow(component, closeWindow) {
    const modalWindowDiv = document.createElement('div');
    modalWindowDiv.appendChild(component);
    modalWindowDiv.className = 'modal-window-bg';
    return modalWindowDiv;
}