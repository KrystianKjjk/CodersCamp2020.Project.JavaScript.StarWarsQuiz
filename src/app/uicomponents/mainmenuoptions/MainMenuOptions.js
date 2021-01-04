import MODES from "../GameModes.js"

const createMainMenuOptions = (optionFunction) => {
    let options = MODES;
    let mainMenuDiv, menuButton, buttonText;

    mainMenuDiv = document.createElement('div'); //create container for menu
    mainMenuDiv.className = 'mainMenuContainer';

    //nested button onclick function for changing the active styling
    const menuButtonOnclick = (event) => {
        const buttons = document.querySelectorAll('.mainMenuButton'); 
        
        //remove active class from all buttons
        for (let i = 0; i < buttons.length; i++) { 
            if(buttons[i].classList.contains('active')){
                buttons[i].classList.remove('active');
            }
        }
        event.target.classList.add('active'); //set current button's class to active

        //call callback function
        optionFunction();
    }

    //create buttons and append to menu container
    for (let i = 0; i < options.length; i++) {
        menuButton = document.createElement('button');
        menuButton.className = 'mainMenuButton';
        menuButton.addEventListener("click", menuButtonOnclick)
        menuButton.id = options[i];
        buttonText = document.createTextNode(options[i]);
        menuButton.appendChild(buttonText);
        mainMenuDiv.appendChild(menuButton);
    }

    //return container with buttons
    return mainMenuDiv;
}

export default createMainMenuOptions;