import modalWindow from '../ModalWindow/ModalWindow.js';

function noModeSelectedModal() {
    const modeNotSelectedMessage = document.createElement('div');
    modeNotSelectedMessage.innerText = "Please select the mode first to start the game";
    modeNotSelectedMessage.style.padding = "30px";
    modeNotSelectedMessage.style.color = "white";
    modeNotSelectedMessage.style.backgroundColor = "black";
    document.body.appendChild(modalWindow(modeNotSelectedMessage, removeModalWindow));
}


function removeModalWindow() {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}
 
export default noModeSelectedModal;