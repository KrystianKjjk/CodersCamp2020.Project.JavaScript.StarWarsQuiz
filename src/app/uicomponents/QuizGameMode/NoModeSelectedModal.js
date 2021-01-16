import modalWindow from '../ModalWindow/ModalWindow.js';

function noModeSelectedModal() {
    const modeNotSelectedMessage = document.createElement('div');
    modeNotSelectedMessage.innerHTML = "Please select the mode first to start the game</br>Click outside the message box to close";
    modeNotSelectedMessage.style.padding = "30px";
    modeNotSelectedMessage.style.color = "white";
    modeNotSelectedMessage.style.backgroundColor = "black";
    modeNotSelectedMessage.style.textAlign = "center";
    document.body.appendChild(modalWindow(modeNotSelectedMessage, removeModalWindow));
}


function removeModalWindow() {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}
 
export default noModeSelectedModal;