import { displayAnswersComponent } from '../../AnswersComponent';
import createHumanPlayer from '../../logic/Players/HumanPlayer';
import createComputerPlayer from '../../logic/Players/ComputerPlayer/ComputerPlayer';
import peopleImageToRecognize from '../../uicomponents/PeopleImageToRecognize/PeopleImageToRecognize';
import generateQuestions from '../../logic/questionsGenerator/QuestionsGenerator';

async function launchGame(gameMode, endGameCallback) {
    const humanPlayer = createHumanPlayer();
    const computerPlayer = createComputerPlayer();
    const gameTime = 10 * 1000; //tutaj będzie 120000 

    setTimeout(function() {
        endGameCallback(humanPlayer, computerPlayer);
    }, gameTime);

    let questionObject = await generateQuestions(gameMode);
    const image = peopleImageToRecognize(questionObject.image);
    const imageDiv = document.body.querySelector('.image');
    imageDiv.appendChild(image);

    humanPlayer.askQuestion(questionObject, []);
    computerPlayer.answerQuestion(questionObject);
    displayAnswersComponent(questionObject.answers, questionObject.rightAnswer, handleUserAnswer);


    async function handleUserAnswer(givenAnswer, isCorrect) {
        humanPlayer.answerQuestion(givenAnswer, []);

        const questionObject = await generateQuestions(gameMode);
        const image = peopleImageToRecognize(questionObject.image);
        const imageDiv = document.body.querySelector('.image');
        imageDiv.removeChild(imageDiv.lastChild);
        imageDiv.appendChild(image);
        humanPlayer.askQuestion(questionObject, []);
        computerPlayer.answerQuestion(questionObject);
        displayAnswersComponent(questionObject.answers, questionObject.rightAnswer, handleUserAnswer);

    }
}



export default launchGame;


// const callback = (userPlayer, computerPlayer) => {endGameModalWindow(userPlayer, computerPlayer, saveToLocalStorageFunction)}
// launchGame("Vehicles", callback);