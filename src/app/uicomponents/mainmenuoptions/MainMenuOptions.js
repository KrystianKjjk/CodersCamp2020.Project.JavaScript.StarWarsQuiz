import {GameModes} from "../../Consts.js"

const createMainMenuOptions = (optionFunction) => {
    let options = GameModes;
    let mainMenuDiv, menuButton, buttonText;

    mainMenuDiv = document.createElement('div'); //create container for menu
    mainMenuDiv.className = 'modeSelectorContainer';

    //nested button onclick function for changing the active styling
    const menuButtonOnclick = (event) => {
        const buttons = document.querySelectorAll('.mainMenuButton');

        //remove active class from all buttons
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('active')) {
                buttons[i].classList.remove('active');
            }
        }
        event.target.classList.add('active'); //set current button's class to active

        //call callback function
        const modeName = event.target.id;
        const generatedNameAndRules = optionFunction(modeName);
        let mainMenuDiv;
        if (document.querySelector('.gameModeContainer')) {
            mainMenuDiv = document.querySelector('.gameModeContainer').parentNode;
        }
        if (mainMenuDiv) {
            //replace name div
            let oldNameDiv = document.querySelector('.gameModeContainer');
            oldNameDiv = mainMenuDiv.replaceChild(generatedNameAndRules.nameModeDiv, oldNameDiv);

            //replace rules div
            let oldRulesDiv = document.querySelector('#howToPlay');
            oldRulesDiv = mainMenuDiv.replaceChild(generatedNameAndRules.rulesDiv, oldRulesDiv);
        }
    }

    //create buttons and append to menu container
    for (const property in options) {
        menuButton = document.createElement('button');
        menuButton.className = 'mainMenuButton';
        menuButton.addEventListener("click", menuButtonOnclick)
        menuButton.id = options[property];
        buttonText = document.createTextNode(options[property]);
        menuButton.appendChild(buttonText);
        mainMenuDiv.appendChild(menuButton);
    }

    //return container with buttons
    return mainMenuDiv;
}

export default createMainMenuOptions;