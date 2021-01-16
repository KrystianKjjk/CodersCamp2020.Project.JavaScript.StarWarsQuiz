import { displayAnswersComponent } from '../../AnswersComponent';
import createHumanPlayer from '../../logic/Players/HumanPlayer';
import createComputerPlayer from '../../logic/Players/ComputerPlayer/ComputerPlayer';
import peopleImageToRecognize from '../../uicomponents/PeopleImageToRecognize/PeopleImageToRecognize';
import generateQuestions from '../../logic/questionsGenerator/QuestionsGenerator';

async function launchGame(gameMode, endGameCallback) {
    const humanPlayer = createHumanPlayer("Gracz");
    const computerPlayer = createComputerPlayer();
    const gameTime = 120000;

    setTimeout(function() {
        endGameCallback(humanPlayer, computerPlayer);
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

        humanPlayer.askQuestion(questionObject, []);
        computerPlayer.answerQuestion(questionObject);
        displayAnswersComponent(questionObject.answers, questionObject.rightAnswer, handleUserAnswer);

    }
}

export default launchGame;