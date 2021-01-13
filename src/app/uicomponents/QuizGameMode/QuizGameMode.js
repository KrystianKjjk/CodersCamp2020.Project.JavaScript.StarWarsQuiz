import {GameModes} from '../../Consts.js'
import modalWindow from '../ModalWindow/ModalWindow.js';
import gameOverModalWindowContent from '../GameOverModalWindowContent/GameOverModalWindowContent.js';

async function quizGameMode(gameTime) {
    //create a questions div
    const questionsDiv = document.createElement('div');
    let selectedMode = document.querySelector(".active");

    //generate a questions div depending on the currently selected mode and inject it
    switch (selectedMode) {
        case GameModes.PEOPLE:
            break;
        case GameModes.PEOPLE:
            break;            
        case GameModes.PEOPLE:
            break;
        default:
            //display a modal saying that the user should select a mode
            const modeNotSelectedMessage = document.createElement('div');
            modeNotSelectedMessage.innerText= "Please select the mode first to start the game";
            modeNotSelectedMessage.style.padding = "30px";            
            modeNotSelectedMessage.style.color = "white";    
            modeNotSelectedMessage.style.backgroundColor = "black";  
            document.body.appendChild(modalWindow(modeNotSelectedMessage, removeModalWindow));          
        }

    


    //display a lightsaber


    //display a text timer below


    //after the game time ends - display a modal window that clicked 
    let interval = async() =>{
        await setTimeout()
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