import modalWindow from '../ModalWindow/ModalWindow.js';

function apikeyModal(gamefunction, mode) {
    let modalWindowContent = document.createElement('div');
    modalWindowContent.classname = "apikey-modal-window";

    const textInput = document.createElement('input');
    textInput.type = "text";
    textInput.required = true;
    textInput.placeholder = "Google Vision API Key";

    const inputDescription = document.createElement('p');
    inputDescription.innerHTML = "Please put the Google Vision API key in the input field above";
    const submitButton = document.createElement('button');
    submitButton.innerHTML = "START"
    submitButton.className = "submit-btn";

    modalWindowContent.appendChild(textInput);
    modalWindowContent.appendChild(inputDescription);
    modalWindowContent.appendChild(submitButton);

    submitButton.addEventListener('click', (e) => {
        if (textInput.value.length > 0) {
            const apikey = textInput.value;            
            gamefunction(apikey, mode);
            removeModalWindow();  
        }
    })
    document.body.appendChild(modalWindow(modalWindowContent,removeModalWindow));    
}


//function to remove modal
function removeModalWindow() {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}

export default apikeyModal;