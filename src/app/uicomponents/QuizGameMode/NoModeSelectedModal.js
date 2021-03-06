import modalWindow from '../ModalWindow/ModalWindow.js';

function noModeSelectedModal() {
    const modeNotSelectedMessage = document.createElement('div');
    modeNotSelectedMessage.innerHTML = "Please select the mode first</br>Click outside the message box to close";
    modeNotSelectedMessage.style.padding = "30px";
    modeNotSelectedMessage.style.color = "white";
    modeNotSelectedMessage.style.backgroundColor = "black";
    modeNotSelectedMessage.style.textAlign = "center";
    modeNotSelectedMessage.style.fontSize = "1.5rem";
    document.body.appendChild(modalWindow(modeNotSelectedMessage, removeModalWindow));
}


function removeModalWindow() {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}
 
export default noModeSelectedModal;