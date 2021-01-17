import { displayAnswersComponent } from '../../AnswersComponent';
import createHumanPlayer from '../../logic/Players/HumanPlayer';
import createComputerPlayer from '../../logic/Players/ComputerPlayer/ComputerPlayer';
import peopleImageToRecognize from '../../uicomponents/PeopleImageToRecognize/PeopleImageToRecognize';
import generateQuestions from '../../logic/questionsGenerator/QuestionsGenerator';
import modalWindow from '../../uicomponents/ModalWindow/ModalWindow';
import gameOverModalWindowContent from '../../uicomponents/GameOverModalWindowContent/GameOverModalWindowContent';

async function launchGame(gameMode) {
    const humanPlayer = createHumanPlayer("Gracz");
    const computerPlayer = createComputerPlayer();
    const correctAnswers = [];
    const images = [];
    const gameTime = 4000;

    setTimeout(function() {
        const answersAndImages = createArrayOfObjectsWithAnswersAndImage(humanPlayer, computerPlayer, correctAnswers, images);
        console.log(answersAndImages);
        const modalContent = gameOverModalWindowContent(answersAndImages, removeModalWindow);
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
    
    //iterate over all inputs and get the correct array structure
    for (let i = 0; i < humanPlayer._answers.length; i++){
        let obj = {
            human: "",
            computer: "",
            correct: "",
            image: ""
        };

        obj.human = humanPlayer._answers[i];
        obj.computer = computerPlayer._answers[i];
        obj.correct = correctAnswers[i];
        obj.image = images[i];

        objArray.push(obj);
    }

    return objArray;
}


function removeModalWindow() {
    document.body.removeChild(document.querySelector('.modal-window-bg'));
}

export default launchGame;