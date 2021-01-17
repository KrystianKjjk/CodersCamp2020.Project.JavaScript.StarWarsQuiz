import modalWindow from '../ModalWindow/ModalWindow.js';

function apikeyModal(gamefunction, mode) {
    let apiKey;
    let modalWindowContent = document.createElement('div');

    const textInput = document.createElement('input');
    textInput.type = "text";
    textInput.required = true;
    textInput.placeholder = "Google Vision API Key";

    const inputDescription = document.createElement('p');
    inputDescription.innerHTML = "Please put the Google Vision API key";

    const submitButton = document.createElement('button');
    submitButton.addEventListener('click', (e) => {
        if (textInput.value.length > 0) {
            apiKey = textInput.value;     
            removeModalWindow();  
            gamefunction(apikey, mode);
        }
    })
    submitButton.innerHTML = "MAY THE FORCE BE WITH YOU!"
    submitButton.className = "submit-btn";

    modalWindowContent.appendChild(textInput);
    modalWindowContent.appendChild(inputDescription);
    modalWindowContent.appendChild(submitButton);

    document.body.appendChild(modalWindow(modalWindowContent,removeModalWindow));
}


//function to remove modal
function removeModalWindow() {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}

export default apikeyModal;