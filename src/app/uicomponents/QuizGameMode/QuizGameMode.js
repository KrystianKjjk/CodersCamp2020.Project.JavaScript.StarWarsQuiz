import {GameModes} from '../../Consts.js'
import modalWindow from '../ModalWindow/ModalWindow.js';
import gameOverModalWindowContent from '../GameOverModalWindowContent/GameOverModalWindowContent.js';
import {generateTextTimerComponent} from '../TextTimer/TextTimer.js';
import {generateLightsaberTimerComponent} from '../LightsaberTimer/LightsaberTimer.js'
import {createAnswersComponent} from '../../AnswersComponent.js'

async function quizGameMode(gameTime) {

    //create a questions div
    const questionsDiv = document.createElement('div');

    //define the selected mode - by checking the button's innerHTML
    //if no button is selected - display modal
    let selectedMode = 0;
    try {
        selectedMode = document.querySelector(".active").innerHTML;
    } catch (error) {
        const modeNotSelectedMessage = document.createElement('div');
        modeNotSelectedMessage.innerText = "Please select the mode first to start the game";
        modeNotSelectedMessage.style.padding = "30px";
        modeNotSelectedMessage.style.color = "white";
        modeNotSelectedMessage.style.backgroundColor = "black";
        document.body.appendChild(modalWindow(modeNotSelectedMessage, removeModalWindow));
    }

    //if any mode was selected then run the game, otherwise do nothing
    if (selectedMode != 0) {

        //create a container for lightsaber and timer
        const saberAndTimerContainer = document.createElement('div');
        saberAndTimerContainer.className = 'saberAndTimerContainer';
        document.body.querySelector('.mainMenu').appendChild(saberAndTimerContainer);

        //display a lightsaber
        const saberDiv = generateLightsaberTimerComponent();
        saberAndTimerContainer.appendChild(saberDiv);      

        //display a text timer below
        const timerDiv = generateTextTimerComponent();
        saberAndTimerContainer.appendChild(timerDiv);

        //inject the answers component and replace the how to div or rulesdiv
        const mainSection = document.body.querySelector('.namerulesranking');
        let answersTargetContainer = document.body.querySelector('.namerulesranking > div:nth-child(2)');
        const answersComponent = createAnswersComponent();
        answersTargetContainer = mainSection.replaceChild(answersComponent,answersTargetContainer);

        //remove the bottom buttons
        mainSection.removeChild(mainSection.querySelector('.buttons'));

        //disable the possibility to change the mode selection by replacing buttons with onclick with empty ones
        const mainMenuButtons = document.querySelector('.modeSelectorContainer');
        const newMainMenuButtons = mainMenuButtons.cloneNode(true);
        mainMenuButtons.parentNode.replaceChild(newMainMenuButtons, mainMenuButtons);

        //run the game! game will return the content of the modal window
        const modalWindowContent = await duummy(selectedMode, gameOverModalWindowContent);
        const modalWindowContainer = modalWindow(modalWindowContent, refreshThePage);
        
        // now append the modal window to the page
        document.body.appendChild(modalWindowContainer);
    }
}

function removeModalWindow () {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}

function refreshThePage () {
    location.reload();
}

function generateModalWindow(){
    gameOverModalWindowContent()
}

//dummy function to be replaced with Justyna's one
async function duummy(mode){
    return dummy;
}

export default quizGameMode;