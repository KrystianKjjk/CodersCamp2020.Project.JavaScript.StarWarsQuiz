import { displayAnswersComponent } from '../../AnswersComponent';
import createHumanPlayer from '../../logic/Players/HumanPlayer';
import createComputerPlayer from '../../logic/Players/ComputerPlayer/ComputerPlayer';
import peopleImageToRecognize from '../../uicomponents/PeopleImageToRecognize/PeopleImageToRecognize';
import generateQuestions from '../../logic/questionsGenerator/QuestionsGenerator';
import modalWindow from '../../uicomponents/ModalWindow/ModalWindow';
import gameOverModalWindowContent from '../../uicomponents/GameOverModalWindowContent/GameOverModalWindowContent';
import {addUserRankInLocalStorage} from '../UserRankInLocalStorage/UserRankInLocalStorage';
import createPlayer from '../../logic/Players/GooglePlayer/GooglePlayer.js'

async function launchGame(gameMode, apikey) {
    const humanPlayer = createHumanPlayer("Gracz");
    let computerPlayer;

    if(apikey){
        computerPlayer = createPlayer(apikey);
    }
    else{
        computerPlayer = createComputerPlayer();
    }

    const correctAnswers = [];
    const images = [];
    const gameTime = 4000;

//in this functions the modal is created and displayed after the game time ends
    setTimeout(function() {
        console.log(computerPlayer);
        const answersAndImages = createArrayOfObjectsWithAnswersAndImage(humanPlayer, computerPlayer, correctAnswers, images);
        const modalContent = gameOverModalWindowContent(answersAndImages, saveInLocalStorageAndReload, gameMode);
        document.body.appendChild(modalWindow(modalContent, removeModalWindow));
    }, gameTime);

    await generateQuestionsAndReplaceImage(gameMode);

    async function handleUserAnswer(givenAnswer) {
        humanPlayer.answerQuestion(givenAnswer, []);
        await generateQuestionsAndReplaceImage(gameMode);
    }

    async function generateQuestionsAndReplaceImage(gameMode) {
        const questionObject = await generateQuestions(gameMode);
        const image = peopleImageToRecognize(questionObject.image);
        const imageDiv = document.body.querySelector('.image');
        if (imageDiv.hasChildNodes() === true) {
            imageDiv.removeChild(imageDiv.lastChild);
        }
        imageDiv.appendChild(image);

        //pushing the image and correct answer to separate arrays
        images.push(questionObject.image);
        correctAnswers.push(questionObject.rightAnswer)
        humanPlayer.askQuestion(questionObject, []);
        computerPlayer.answerQuestion(questionObject);
        displayAnswersComponent(questionObject.answers, questionObject.rightAnswer, handleUserAnswer);
    }
}

//function to create array of objects used to generate modal window
function createArrayOfObjectsWithAnswersAndImage (humanPlayer, computerPlayer, correctAnswers, images){
    let objArray = [];
    let computerAnswers = computerPlayer.getAnswers();
    let humanAnswers = humanPlayer.answersHistory;
    
    //iterate over all inputs and get the correct array structure
    for (let i = 0; i < humanAnswers.length; i++){
        let obj = {
            human: "",
            computer: "",
            correct: "",
            image: ""
        };

        obj.human = humanAnswers[i];
        obj.computer = computerAnswers[i];
        obj.correct = correctAnswers[i];
        obj.image = images[i];
        objArray.push(obj);
    }
    return objArray;
}


function saveInLocalStorageAndReload(name, humanAnswers, humanCorrect, mode) {
    const obj = {
        gameMode: mode,
        userName: name, 
        numberOfCorrectAnswers: humanCorrect, 
        numberOfTotalAnswers: humanAnswers
    };    
    addUserRankInLocalStorage(obj);
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}

function removeModalWindow() {
    location.reload();
}

export default launchGame;